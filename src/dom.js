/*get data from form*/

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    let descriptionForm = data.description
    let DateForm = data.date
    let priorityuForm = data.priority
    
    console.log(data)
    /*
    if (myLibrary.length > 0) {
      deleteTable(myLibrary)
    }
    addBookToLibrary(titleForm, authorForm, pagesForm, readForm)
    displayBooks(myLibrary)
    document.getElementById("form").reset();
    form.style.display = 'none';
    btn.style.display = 'block';*/
  
  });