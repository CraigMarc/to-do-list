import { addToProject,
   projectNameArray, 
   currentProject, 
   returnProjectArray, 
   deleteToDoFromProjectArray,
   deleteProjectFromProjectArray,
   deleteProjectFromProjectListArray,
   projectTaken
   } from './factoryfunct';

//set project var
let returnProject = []
projectNow('inbox')

// display todos

function displayToDos(todoArray) {

//change title
  const title = document.querySelector('#title');
  title.textContent = returnProject[0];
  
  

  for (let i = 0; i < todoArray.length; i++) {
    let table = document.getElementById("todoTable");
    let row = table.insertRow(1);
    row.id = 'row'
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let cell4 = row.insertCell(3);
    cell4.setAttribute('id', 'cell4');


    cell1.textContent = todoArray[i].description;
    cell2.textContent = todoArray[i].dueDate;
    cell3.textContent = todoArray[i].priority;


    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.setAttribute('value', i);
    deleteButton.textContent = 'Delete'
    cell4.appendChild(deleteButton);

    /*delete button event listener*/

    const number = document.querySelectorAll('#deleteButton');

    number.forEach((button) => {

      button.addEventListener('click', (e) => {
        let value = button.value

        deleteToDo(value, todoArray)
        e.stopImmediatePropagation();


      })
    })



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
function clearTable(todoArray) {

  const rowRem = document.querySelectorAll('#row');

  rowRem.forEach(proj => {
    proj.remove();
  });


}



//delete todo
function deleteToDo(value) {


deleteToDoFromProjectArray(returnProject[0], value)

  clearTable(returnProjectArray(returnProject[0]))
  displayToDos(returnProjectArray(returnProject[0]))
}



function form() {
let todoArray = addToProject()

//let todoArray = returnProjectArray(returnProject[0])

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    let descriptionForm = data.description
    let dateForm = data.date
    let priorityForm = data.priority
    let projectForm = projectNow()


    if (todoArray.length > 0) {
      clearTable(returnProjectArray(returnProject[0]))
    }
    //todoArray = returnProjectArray(returnProject[0])
    addToProject(projectForm, descriptionForm, dateForm, priorityForm)

    displayToDos(returnProjectArray(returnProject[0]))
   
  

  });
}







//project form
function projectForm() {
  document.getElementById('projform').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    let projectForm = data.project
    
    let projectList = projectTaken(projectForm)

    if (projectList == -1){
    projectNameArray(projectForm)
    }


  });
}
//adds new project tabs and buttons
function addProjectTabs(projectListArray) {



  for (let i = 0; i < projectListArray.length; i++) {
    
    const projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';
    const div1 = document.createElement('div');
    div1.id = 'projecttab';
    div1.value = i
    div1.textContent = projectListArray[i]

    //buttons
    if (i > 0) {
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', 'projectDelete');
    deleteButton.setAttribute('value', i);
    deleteButton.classList.add(projectListArray[i]);
    deleteButton.textContent = 'Delete'
    projectContainer.appendChild(deleteButton);
    }
   
    projectContainer.appendChild(div1);

    document.body.appendChild(projectContainer)

  }
  
  projectDeleteListener()
  projectTabListener()
  return
}

// project delete event listener

function projectDeleteListener() {
  const select = document.querySelectorAll('#projectDelete');

  select.forEach((button) => {

    button.addEventListener('click', deleteProject)


  })
}
// delete project

function deleteProject (e) {
console.log(e.target.className)

deleteProjectFromProjectArray(e.target.className)
let projectListArray = deleteProjectFromProjectListArray(e.target.className)

removeProjectTabs()
addProjectTabs(projectListArray)

}



//removes project tabs when refresh

function removeProjectTabs() {

  const projectTab = document.querySelectorAll('#projecttab');

  projectTab.forEach(proj => {
    proj.remove();
  });

  const deleteTab = document.querySelectorAll('#projectDelete');

  deleteTab.forEach(proj => {
    proj.remove();
  });

  const container = document.getElementById('projectContainer');
  container.remove();

}


//project tab event listener
function projectTabListener() {
  const select = document.querySelectorAll('#projecttab');

  select.forEach((button) => {

    button.addEventListener('click', selectProject)


  })
}

//selects project

function selectProject(e) {

  clearTable(returnProjectArray(returnProject[0]))
  displayToDos(returnProjectArray(returnProject[0]))


  return currentProject(e.target.value)

}
//saves keeps track of current project
function projectNow(project){
  if (project == undefined) {
    return returnProject[0]
  }
  returnProject[0] = project
  return returnProject
}



export {
  form,
  projectForm,
  addProjectTabs,
  removeProjectTabs,
  selectProject,
  projectNow
};


