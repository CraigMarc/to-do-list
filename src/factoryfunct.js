import { addProjectTabs, removeProjectTabs, projectNow } from './dom';


let projectListArray = ['inbox',]
let projectArray = []

const todoFactory = (project, description, dueDate, priority) => {

  return { project, description, dueDate, priority };

};

/*add to project array*/
function addToProject(projectName, description, dueDate, priority) {

  if (description == undefined) {
    return projectArray
  }

  projectArray.push(todoFactory(projectName, description, dueDate, priority))

  return projectArray
}

//filter array 
function returnProjectArray(projectName) {

  return projectArray.filter(function (x) { return x.project == projectName })

}

// find the indexes of all projects in the projectArray
function findProjects(projectFind) {
  let result = [];

  projectArray.forEach((project, index) => project.project === projectFind ? result.push(index) : null)
  
  return result
}

//delete todo from array

function deleteToDoFromProjectArray(project, value) {

  let projectArr = findProjects(project)


  projectArray.splice(projectArr[value], 1)
  return projectArray
}

// delete project from array

function deleteProjectFromProjectArray(project) {

  function recursion() {

    let projectArr = findProjects(project)
    if (projectArr.length == 0) {
      console.log(projectArray)
      return projectArray
    }
    projectArray.splice(projectArr[0], 1)
    recursion()

  }
  recursion()
}

// delete project from projectlistarray

function deleteProjectFromProjectListArray(project) {

  let index = projectListArray.indexOf(project)

  projectListArray.splice(index, 1)

  console.log(projectListArray)
  return projectListArray
}




// project name array for new projects


function projectNameArray(projectName) {
  projectListArray.push(projectName)


  if (projectListArray.length > 1) {

    removeProjectTabs()
  }
  addProjectTabs(projectListArray)

  //return projectListArray
}

function projectTaken(project) {

return projectListArray.indexOf(project)

}

function currentProject(arrayNumber) {

  if (projectListArray.length == 1) {
    projectNow(projectListArray[0])
    return projectListArray[0]
  }
  projectNow(projectListArray[arrayNumber])
  return (projectListArray[arrayNumber])

}



export {

  addToProject,
  projectNameArray,
  currentProject,
  returnProjectArray,
  deleteToDoFromProjectArray,
  deleteProjectFromProjectArray,
  deleteProjectFromProjectListArray,
  projectTaken
};






