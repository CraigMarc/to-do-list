import { addToProject, projectNameArray, currentProject, returnProjectArray, deleteToDoFromProjectArray } from './factoryfunct';

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

/*
  for (let i = 1; i < todoArray.length + 1; i++) {
    document.getElementById("todoTable").deleteRow(1);


  }*/
}



//delete todo
function deleteToDo(value, todoArray) {


deleteToDoFromProjectArray(returnProject[0], value)

  clearTable(returnProjectArray(returnProject[0]))
  displayToDos(returnProjectArray(returnProject[0]))
}

// will have to take out inboxarray variables ********

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
    console.log(projectForm)
    projectNameArray(projectForm)



  });
}

function addProjectTabs(projectListArray) {



  for (let i = 0; i < projectListArray.length; i++) {

    const div1 = document.createElement('div');
    div1.id = 'projecttab';
    div1.value = i
    div1.textContent = projectListArray[i]
    document.body.appendChild(div1)

  }
  ;

  projectTabListener()
  return


}


function removeProjectTabs() {

  const projectTab = document.querySelectorAll('#projecttab');

  projectTab.forEach(proj => {
    proj.remove();
  });



}


//project tab event listener
function projectTabListener() {
  const select = document.querySelectorAll('#projecttab');

  select.forEach((button) => {

    button.addEventListener('click', selectProject)


  })
}



function selectProject(e) {

  clearTable(returnProjectArray(returnProject[0]))
  displayToDos(returnProjectArray(returnProject[0]))


  return currentProject(e.target.value)

}

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


