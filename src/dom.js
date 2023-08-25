import {
  addToProject,
  projectNameArray,
  currentProject,
  returnProjectArray,
  deleteToDoFromProjectArray,
  deleteProjectFromProjectArray,
  deleteProjectFromProjectListArray,
  projectTaken,
  getWeek,
  getDaysInMonth,
} from "./factoryfunct";

//set project var
//let returnProject = []
//module for current project

const newProject = (() => {
  let currentProjectArray = [];

  //adds new project
  const changeProject = (newProject) => {
    currentProjectArray[0] = newProject;
  };
  return { currentProjectArray, changeProject };
})();

projectNow("Inbox");

// display todos

function displayToDos(todoArray) {
  //change title
  const title = document.querySelector("#title");
  title.textContent = newProject.currentProjectArray[0];

  for (let i = 0; i < todoArray.length; i++) {
    let table = document.getElementById("todoTable");
    let row = table.insertRow(1);
    row.id = "row";
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let cell4 = row.insertCell(3);
    cell4.setAttribute("id", "cell4");

    if (
      newProject.currentProjectArray[0] == "Due This Week" ||
      newProject.currentProjectArray[0] == "Due This Month"
    ) {
      cell1.textContent =
        todoArray[i].description + "(" + todoArray[i].project + ")";
    }

    if (
      newProject.currentProjectArray[0] != "Due This Week" &&
      newProject.currentProjectArray[0] != "Due This Month"
    ) {
      cell1.textContent = todoArray[i].description;
    }
    cell2.textContent = todoArray[i].dueDate;
    cell3.textContent = todoArray[i].priority;

    if (
      newProject.currentProjectArray[0] != "Due This Week" &&
      newProject.currentProjectArray[0] != "Due This Month"
    ) {
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("type", "button");
      deleteButton.setAttribute("id", "deleteButton");
      deleteButton.setAttribute("value", i);
      deleteButton.textContent = "Delete";
      cell4.appendChild(deleteButton);
    }
    /*delete button event listener*/

    const number = document.querySelectorAll("#deleteButton");

    number.forEach((button) => {
      button.addEventListener("click", (e) => {
        let value = button.value;

        deleteToDo(value, todoArray);
        e.stopImmediatePropagation();
      });
    });
  }
}

// delete table function when deleting to do **** may just use clear table now
/*
function deleteTable(todoArray) {



 for (let i = 1; i < todoArray.length + 2; i++) {
   document.getElementById("todoTable").deleteRow(1);


 }
}*/

// clear table when adding new item
function clearTable() {
  const rowRem = document.querySelectorAll("#row");

  rowRem.forEach((proj) => {
    proj.remove();
  });
}

//delete todo
function deleteToDo(value) {
  deleteToDoFromProjectArray(newProject.currentProjectArray[0], value);

  clearTable();
  displayToDos(returnProjectArray(newProject.currentProjectArray[0]));
}

function form() {
  //let todoArray = addToProject()

  //let todoArray = returnProjectArray(returnProject[0])

  document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    hideForm();
    const data = Object.fromEntries(new FormData(e.target).entries());
    let descriptionForm = data.description;
    let dateForm = data.date;
    let priorityForm = data.priority;
    let projectForm = projectNow();
    document.getElementById("form").reset();

    let todoArray = returnProjectArray(newProject.currentProjectArray[0]);

    if (todoArray.length > 0) {
      clearTable();
    }
    todoArray = returnProjectArray(newProject.currentProjectArray[0]);

    addToProject(projectForm, descriptionForm, dateForm, priorityForm);

    displayToDos(returnProjectArray(newProject.currentProjectArray[0]));
  });
}

//project form
function projectForm() {
  document.getElementById("projform").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    let projectForm = data.project;

    let projectList = projectTaken(projectForm);

    if (projectList == -1) {
      projectNameArray(projectForm);
      document.getElementById("projform").reset();
    }
  });
}
//adds new project tabs and buttons
function addProjectTabs(projectListArray) {
  //const grid = document.getElementById('grid')
  const menu = document.getElementById("menuContainer");

  for (let i = 0; i < projectListArray.length; i++) {
    const projectContainer = document.createElement("div");

    projectContainer.id = "projectContainer";
    const div1 = document.createElement("div");
    div1.id = "projecttab";
    div1.value = i;
    div1.textContent = projectListArray[i];

    projectContainer.appendChild(div1);

    //buttons
    if (i > 0) {
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("type", "button");
      deleteButton.setAttribute("id", "projectDelete");
      deleteButton.setAttribute("value", i);
      deleteButton.classList.add(projectListArray[i]);
      deleteButton.textContent = "Delete";
      projectContainer.appendChild(deleteButton);
    }

    menu.appendChild(projectContainer);
    //grid.appendChild(menu)

    //document.body.appendChild(projectContainer)
    //document.menu.appendChild(menu)
  }

  projectDeleteListener();
  projectTabListener();

  return;
}

// project delete event listener

function projectDeleteListener() {
  const select = document.querySelectorAll("#projectDelete");

  select.forEach((button) => {
    button.addEventListener("click", deleteProject);
  });
}
// delete project

function deleteProject(e) {
  deleteProjectFromProjectArray(e.target.className);
  let projectListArray = deleteProjectFromProjectListArray(e.target.className);

  removeProjectTabs();
  addProjectTabs(projectListArray);
  //may delete ********
  newProject.changeProject("Inbox");
  clearTable();
  displayToDos(returnProjectArray(newProject.currentProjectArray[0]));
}

//removes project tabs when refresh

function removeProjectTabs() {
  const projectTab = document.querySelectorAll("#projecttab");

  projectTab.forEach((proj) => {
    proj.remove();
  });

  const deleteTab = document.querySelectorAll("#projectDelete");

  deleteTab.forEach((proj) => {
    proj.remove();
  });

  const container = document.querySelectorAll("#projectContainer");
  container.forEach((proj) => {
    proj.remove();
  });
}

//project tab event listener
function projectTabListener() {
  const select = document.querySelectorAll("#projecttab");

  select.forEach((button) => {
    button.addEventListener("click", selectProject);
  });
}

//selects project

function selectProject(e) {
  hideForm();
  showButton();

  newProject.changeProject(currentProject(e.target.value));
  clearTable();
  displayToDos(returnProjectArray(newProject.currentProjectArray[0]));

  return currentProject(e.target.value);
}
//saves keeps track of current project
function projectNow(project) {
  if (project == undefined) {
    return newProject.currentProjectArray[0];
  }

  newProject.changeProject(project);

  return newProject.currentProjectArray[0];
}
// history tab event listener

function historyTabListener() {
  const select = document.querySelectorAll("#timetab");

  select.forEach((button) => {
    button.addEventListener("click", selectTime);
  });
}

function selectTime(e) {
  hideButton();

  if (e.target.classList.value == "week") {
    newProject.changeProject("Due This Week");
    clearTable();
    displayToDos(getWeek());
  }

  if (e.target.classList.value == "month") {
    newProject.changeProject("Due This Month");
    clearTable();
    displayToDos(getDaysInMonth());
  }
}

//display form

function displayForm() {
  const btn = document.getElementById("showMenu");

  btn.addEventListener("click", () => {
    const form = document.getElementById("form");
    form.style.display = "block";
    btn.style.display = "none";
  });
}
function hideForm() {
  const form = document.getElementById("form");
  form.style.display = "none";
  const btn = document.getElementById("showMenu");
  btn.style.display = "block";
}

function hideButton() {
  const btn = document.getElementById("showMenu");
  btn.style.display = "none";
}

function showButton() {
  const btn = document.getElementById("showMenu");
  btn.style.display = "block";
}

export {
  form,
  projectForm,
  addProjectTabs,
  removeProjectTabs,
  selectProject,
  projectNow,
  historyTabListener,
  projectTabListener,
  displayToDos,
  displayForm,
  hideForm,
};
