
let projectList = [
  {
    name: 'Project1',
    todos: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: '2023-05-20', dueDate: '2023-05-26' },
      { text: 'Ut enim ad minim veniam.', recordDate: '2023-05-20', dueDate: '2023-05-27' },
      { text: '19 packages are looking for funding.', recordDate: '2023-05-20', dueDate: '2023-05-28' }
    ],
    doing: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: '2023-05-20', dueDate: '2023-05-26' },
      { text: 'Ut enim ad minim veniam.', recordDate: '2023-05-20', dueDate: '2023-05-27' },
    ],
    done: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: '2023-05-20', dueDate: '2023-05-26' },
      { text: 'Ut enim ad minim veniam.', recordDate: '2023-05-20', dueDate: '2023-05-27' },
    ],
  },
  {
    name: 'Project2',
    todos: [
      { text: 'Ut enim ad minim veniam.', recordDate: '2023-05-20', dueDate: '2023-05-29' },
      { text: 'Ut enim ad minim veniam.', recordDate: '2023-05-20', dueDate: '2023-05-30' }
    ]
  },
  {
    name: 'Project3',
    todos: [
      { text: '19 packages are looking for funding.', recordDate: '2023-05-20', dueDate: '2023-06-01' }
    ]
  }
];

//factory creat project
function createProject(name, todos) {
  return {
    name,
    todos,
    doing,
    done
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
  
    const [movedTodo] = todos.splice(currentPos, 1);
    todos.splice(newPos, 0, movedTodo);
  }

// Function to move a todo within a project from 'todos' to either 'doing' or 'done'
function moveTodoToStatus(projectListIndex, todosIndex, newStatus) {
    if (projectListIndex < 0 || projectListIndex >= projectList.length) {
      console.log('Invalid project index.');
      return;
    }
  
    const projectSelection = projectList[projectListIndex];
    const todos = projectSelection.todos;
  
    if (todosIndex < 0 || todosIndex >= todos.length) {
      console.log('Invalid to-do index for the specified project.');
      return;
    }

    if (!['doing', 'done'].includes(newStatus)) {
      console.log('Invalid status. Choose either "doing" or "done".');
      return;
    }
 
    const [movedTodo] = todos.splice(todosIndex, 1);
    projectSelection[newStatus].push(movedTodo);
}



console.log(projectList)


