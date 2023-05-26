import './style.css';
import { format } from 'date-fns';


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
      ],
      doing: [
        { text: 'Lorem ipsum dolor sit amet.', recordDate: '2023-05-20', dueDate: '2023-05-26' },
      ],
      done: [
        { text: 'Lorem ipsum dolor sit amet.', recordDate: '2023-05-20', dueDate: '2023-05-26' },
      ],
    },
    {
      name: 'Project3',
      todos: [
        { text: '19 packages are looking for funding.', recordDate: '2023-05-20', dueDate: '2023-06-01' }
      ],
      doing: [
        { text: 'Lorem ipsum dolor sit amet.', recordDate: '2023-05-20', dueDate: '2023-05-26' },
        { text: 'Ut enim ad minim veniam.', recordDate: '2023-05-20', dueDate: '2023-05-27' },
      ],
      done: [
      ],
    }
];

let projectSelected = '0'; 
let taskSelected = null;
let statusSelected= null;
let mainDiv = document.getElementById('content').getElementsByClassName('mainBox')[0];
let sidebarDiv = document.getElementById('content').getElementsByClassName('sideBox')[0];


function header(){
    const contentDiv = document.getElementById('content');
  
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerBox');
    contentDiv.appendChild(headerDiv);
  
    const logoObj = document.createElement('object');
    logoObj.classList.add('svg');
    logoObj.id = 'login';
    logoObj.type = 'image/svg+xml';
    logoObj.data = '/src/logo.svg';
    headerDiv.appendChild(logoObj);  
    
    const headH1 = document.createElement('h1');
    headH1.textContent = 'ToDoneIng';
    headerDiv.appendChild(headH1);

    const loginObj = document.createElement('object');
    loginObj.classList.add('svg');
    loginObj.id = 'login';
    loginObj.type = 'image/svg+xml';
    loginObj.data = '/src/login.svg';
    headerDiv.appendChild(loginObj);   
}

function sidebar(){
  if (!sidebarDiv) {
    const contentDiv = document.getElementById('content');
    sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sideBox');
    contentDiv.appendChild(sidebarDiv);
  }
  sidebarDiv.innerHTML = '';


  const sideBarH2 = document.createElement('h2');
  sideBarH2.textContent = 'Your Projects: ';
  sidebarDiv.appendChild(sideBarH2);

  // Create an unordered list for project names
  const projectListUl = document.createElement('div');
  projectListUl.classList.add('projectList')
  sidebarDiv.appendChild(projectListUl);



  // Iterate over the projectList and add project names as list items
  projectList.forEach((project, index) => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('projectItem')
      projectItem.textContent = project.name;
      // Add data attribute for the project name position
      projectItem.dataset.position = index;

      if (index === projectSelected) {
        projectItem.classList.add('selected');
      }

      //add a click listener to stored the selected project
        projectItem.addEventListener('click', () => {
            projectSelected = projectItem.dataset.position;
            taskSelected = null;

            //store selected and also highlight it
            const sidebarListAll = projectListUl.getElementsByClassName('projectItem');
            Array.from(sidebarListAll).forEach(item => {
                item.classList.remove('selected')
            })
            projectItem.classList.add('selected');
            console.log('Project selected:', projectSelected);
            main()
        })

      projectListUl.appendChild(projectItem);
  });

  //control button div
  const controlsSidebarDiv = document.createElement('div');
  controlsSidebarDiv.classList.add('controlsSidebarDiv');
  projectListUl.appendChild(controlsSidebarDiv);

  //add add button for projects
  const addButtonDiv = document.createElement('div');
  addButtonDiv.classList.add('addButtonDiv')
  addButtonDiv.textContent = 'Add New Project'
  controlsSidebarDiv.appendChild(addButtonDiv); 

  //add click for add button
  addButtonDiv.addEventListener('click', () => {
    const newProject = prompt("Please enter a new project name:", "Awesome winner project");
    console.log('Project Add:', newProject);
    addProject(newProject)
    main();
    sidebar()
  })

  //add delete button for projects
  const deleteButtonDiv = document.createElement('div');
  deleteButtonDiv.classList.add('deleteButtonDiv')
  deleteButtonDiv.textContent = 'Delete Selected'
  controlsSidebarDiv.appendChild(deleteButtonDiv); 

  //add delete click for delete button
  deleteButtonDiv.addEventListener('click', () => {
    console.log('Project Remove:', projectSelected);
    removeProject(projectSelected);
    sidebar()
    main();
  })


}

function main(){
    if (!mainDiv) {
    const contentDiv = document.getElementById('content');
    mainDiv = document.createElement('div');
    mainDiv.classList.add('mainBox');
    contentDiv.appendChild(mainDiv);
    }
    mainDiv.innerHTML = '';

    const mainH2 = document.createElement('h2');
    mainH2.textContent = ` ${projectList[projectSelected].name} work area:`;
    mainDiv.appendChild(mainH2);


    // Display todo, doing, and done tasks of the selected project
    const todoStatus = [];
    // Iterate over projectList to extract unique status values
    projectList.forEach(project => {
      Object.keys(project).forEach(key => {
        if (key !== 'name' && !todoStatus.includes(key)) {
          todoStatus.push(key);
        }
      });
    });

    todoStatus.forEach( statuses => {
        const statusContainer = document.createElement('div');
        statusContainer.classList.add('statusContainer');
        statusContainer.dataset.status = statuses;
        statusContainer.dataset.project = projectSelected;
        mainDiv.appendChild(statusContainer);

        const statusTitle = document.createElement('h2');
        statusTitle.textContent = statuses;
        statusContainer.appendChild(statusTitle);

        projectList[projectSelected][statuses].forEach((task,index) => {
          const statusItems = document.createElement('div');
          statusItems.classList.add('statusItems');
          statusItems.dataset.position = index;
          statusContainer.appendChild(statusItems);

          const taskDueDate = document.createElement('p');
          taskDueDate.textContent = `Due Date: ${task.dueDate}`;
          taskDueDate.classList.add('date');
          statusItems.appendChild(taskDueDate);

          const taskRecordDate = document.createElement('p');
          taskRecordDate.textContent = `Record Date: ${task.recordDate}`;
          taskRecordDate.classList.add('date');
          statusItems.appendChild(taskRecordDate);

          const taskElement = document.createElement('p');
          taskElement.textContent = task.text;
          taskElement.classList.add('taskItem');
          statusItems.appendChild(taskElement);

          if (index.toString() === taskSelected && statuses === statusSelected) {
            statusItems.classList.add('selected');
          }
         
          //select functionality
          statusItems.addEventListener('click', () => {
            taskSelected = statusItems.dataset.position;
            statusSelected = statusContainer.dataset.status;

            //store selected and also highlight it
            const statusItemsAll = statusContainer.getElementsByClassName('statusItems');
            Array.from(statusItemsAll).forEach(item => {
                item.classList.remove('selected')
            })
            statusItems.classList.add('selected');
            console.log('Status selected:', statusSelected);
            console.log('Task selected:', taskSelected);
            main()
          })
        })

        //control button div
        const controlsMainDiv = document.createElement('div');
        controlsMainDiv.classList.add('controlsMainDiv');
        statusContainer.appendChild(controlsMainDiv);
              


        //add add button for projects
        const addButtonDiv = document.createElement('div');
        addButtonDiv.classList.add('addButtonDiv')
        addButtonDiv.textContent = 'Add New Task'
        controlsMainDiv.appendChild(addButtonDiv); 

        //add click for add button
        addButtonDiv.addEventListener('click', () => {
          statusSelected = statusContainer.dataset.status;
          const newTask = prompt("Please enter new task:", "Very important task");
          console.log('Task Add:', newTask, statusSelected);
          addTask(projectSelected, statusSelected, newTask)
          main();
        })

        //add delete button for status items
        const deleteButtonDiv = document.createElement('div');
        deleteButtonDiv.classList.add('deleteButtonDiv')
        deleteButtonDiv.textContent = 'Delete Selected'
        controlsMainDiv.appendChild(deleteButtonDiv); 

        //add delete click for delete button
        deleteButtonDiv.addEventListener('click', () => {
          console.log(projectSelected, '=',statusContainer.dataset.project, statusSelected, '=',statusContainer.dataset.status , taskSelected, '=!', null );
          if (projectSelected ===  statusContainer.dataset.project && statusSelected === statusContainer.dataset.status
            && taskSelected !== null){
          console.log('Task Remove:', projectSelected, statusSelected, taskSelected);
          removeTask(projectSelected, statusSelected, taskSelected);
          main();
          }
        })
      })
}




//------------------------------------------------------------------------------------------------------------------
//factory creat project
function createProject(name) {
  return {
    name,
    todos: [
      { text: '', recordDate: '', dueDate: '' },
    ],
    doing: [
      { text: '', recordDate: '', dueDate: '' },
    ],
    done: [
      { text: '', recordDate: '', dueDate: '' },
    ],
  };
}

// Function to add a new project to the projectList
function addProject(name, todos) {
let newProject = createProject(name);
projectList.push(newProject);
}

//function remove a project from projectlist
function removeProject(projectListIndex) {
    projectList.splice(projectListIndex, 1);
}

//function remove a task
function removeTask(projectListIndex, status, task) {
  projectList[projectListIndex][status].splice(task, 1);
  taskSelected = null;
}

//function add a task 
function addTask(projectListIndex, status, task) {
  const today = format(new Date(), 'yyyy-MM-dd');
  projectList[projectListIndex][status].push({ text: task, recordDate: today, dueDate: '' });
  taskSelected = null;
}

//function changeStatus
function changeStatus(projectSelected, statusSelected, taskSelected, newStatus){
  const tempObject = projectList[projectSelected][statusSelected][taskSelected];
  projectList[projectSelected][statusSelected].splice(taskSelected, 1);
  projectList[projectSelected][newStatus].push(tempObject);
  projectSelected = '0'; 
  taskSelected = null;
  statusSelected= null;
  main();
}

//function display
function display(){
  header();
  sidebar();
  main();
}

//------------------------------------------------------------------------------------------------------------------
display()
console.log(projectList);
console.log(projectSelected);