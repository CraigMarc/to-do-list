import {  } from './factoryfunct';

function storeToDo(toDoArray) {
    localStorage.setItem("toDoArray", toDoArray.value);

}

function storeProject(projectArray) {
    localStorage.setItem("projectArray", projectArray.value);

}