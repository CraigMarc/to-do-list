import {addProjectTabs, removeProjectTabs, projectNow} from './dom';


let projectListArray = ['inbox', ]
let projectArray = []

const todoFactory = (project, description, dueDate, priority) => {
console.log(projectArray)
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
function returnProjectArray (projectName) {

  return projectArray.filter(function(x){return x.project == projectName}) 
  
}

// find the indexes of all projects in the projectArray
function findProjects (projectFind) {
  let result = [];
  
  projectArray.forEach((project, index) => project.project === projectFind ? result.push(index) : null)
    return result
  }

  //delete todo from array

  function deleteToDoFromProjectArray(project, value) {

    let projectArr = findProjects(project)
    console.log(projectArray)

    projectArray.splice(projectArr[value], 1)
    return projectArray
  }






// project name array for new projects


function projectNameArray(projectName) {
  projectListArray.push(projectName)

  
  if (projectListArray.length > 1){
    
  removeProjectTabs()
}
  addProjectTabs(projectListArray)

  //return projectListArray
}



function currentProject(arrayNumber) {
  
if (projectListArray.length == 1) {
  projectNow(projectListArray[0] )
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
  deleteToDoFromProjectArray
};






