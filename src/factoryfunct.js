import {addProjectTabs, removeProjectTabs, projectNow} from './dom';


let projectListArray = ['inbox', ]
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
function returnProjectArray (array, projectName) {


  
  return array.filter(function(x){return x.project == projectName}) 
  
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
  returnProjectArray
};

/*
  createProject('project1')
  console.log(addToProject('project1', 'project1', '11/02', 'high'))

  createProject('project2')
  console.log(addToProject('project2', 'project2', '11/02', 'high'))
  console.log(addToProject('project2', 'project2a', '11/02', 'high'))*/
/*
 
let newProject = 'project1'

window[newProject] = todoFactory('hello', 'project1', 'high');

console.log(project1)

newProject = 'project2'

window[newProject] = todoFactory('hello', 'project2', 'high');

console.log(project2)*/




