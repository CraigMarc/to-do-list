//import {  } from './factoryfunct';

function storeToDo(toDoArray) {
    console.log(toDoArray)
    console.log('storage')
    //localStorage.removeItem('toDoArray')
    localStorage.setItem("toDoArray", JSON.stringify(toDoArray));


}

function storeProject(projectArray) {
    //localStorage.removeItem('projectArray')
    localStorage.setItem("projectArray", JSON.stringify(projectArray));

}

function storedToDo() {

    let storedToDos = JSON.parse(localStorage.getItem("toDoArray"));
    return storedToDos
}

function storedProject() {

    //localStorage.removeItem("projectArray");

    let storedProjects = JSON.parse(localStorage.getItem("projectArray")); 
    return storedProjects

}




export {
    storeToDo,
    storeProject,
    storedToDo,
    storedProject
};