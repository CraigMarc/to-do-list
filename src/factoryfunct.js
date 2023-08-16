const todoFactory = (description, dueDate, priority) => {
    
    return { description, dueDate, priority };

  };
/*create new array for new project*/
  function createProject(projectName) {
    let newProject = projectName + 'Array'
    
    return window[newProject] = []
  }

/*add to project array*/
  function addToProject(projectName, description, dueDate, priority) {
   let array = projectName+'Array'

   window[array].push(todoFactory(description, dueDate, priority))
   return window[array]
  }

  export {
    createProject,
    addToProject
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




 