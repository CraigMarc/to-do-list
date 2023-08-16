import {createProject, addToProject} from './factoryfunct';

createProject('inbox')

/*get data from form*/

function form() {
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    let descriptionForm = data.description
    let dateForm = data.date
    let priorityuForm = data.priority
    
    console.log(data)
    /*
    if (myLibrary.length > 0) {
      deleteTable(myLibrary)
    }*/

    addToProject('inbox', descriptionForm, dateForm, priorityuForm)
    /*
    displayBooks(myLibrary)*/
    console.log(inboxArray)
    
  
  });
}

export default form;
