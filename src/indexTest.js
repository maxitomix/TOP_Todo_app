let projectList = [
    {
      name: 'Project1',
      todos: ['Lorem ipsum dolor sit amet.', 'Ut enim ad minim veniam.', '19 packages are looking for funding.'],
    },
    {
      name: 'Project2',
      todos: ['Ut enim ad minim veniam.', 'Ut enim ad minim veniam.']
    },
    {
      name: 'Project3',
      todos: ['19 packages are looking for funding.']
    }
  ];

//factory creat project
function createProject(name, todos) {
return {
    name,
    todos,
};
}

// Function to add a new project to the projectList
function addProject(name, todos) {
let newProject = createProject(name, todos);
projectList.push(newProject);
}

//function remove a project from projectlist
function removeProject(projectListIndex) {
    if (projectListIndex < 0 || projectListIndex >= projectList.length) {
      console.log('Invalid project index.');
      return;
    }
  
    projectList.splice(projectListIndex, 1);
}


//// Function to remove a todo from a project in projectList
function removeTodo(projectListIndex, todosIndex) {
    if (projectListIndex < 0 || projectListIndex >= projectListIndex.length) {
      console.log('Invalid project index.');
      return;
    }
  
    const projectSelection = projectList[projectListIndex];
    const todos = projectSelection.todos;
  
    if (todosIndex < 0 || todosIndex >= todos.length) {
      console.log('Invalid to-do index for the specified project.');
      return;
    }
  
    todos.splice(todosIndex, 1);
}

/// Function to add a todo from a project in projectList
function addTodo(projectListIndex, todo) {
if (projectListIndex < 0 || projectListIndex >= projectList.length) {
    console.log('Invalid project index.');
    return;
    }

    const projectSelection = projectList[projectListIndex];
    projectSelection.todos.push(todo);
}


// funtion to move a todo within a project
function moveTodo(projectListIndex, currentPos, newPos) {
    if (projectListIndex < 0 || projectListIndex >= projectList.length) {
      console.log('Invalid project index.');
      return;
    }
  
    const project = projectList[projectListIndex];
    const todos = project.todos;
  
    if (currentPos < 0 || currentPos >= todos.length || newPos < 0 || newPos >= todos.length) {
      console.log('Invalid current or new position.');
      return;
    }
  
    const [removedTodo] = todos.splice(currentPos, 1);
    todos.splice(newPos, 0, removedTodo);
  }


console.log(projectList)