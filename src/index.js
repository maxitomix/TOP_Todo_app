import './style.css';
import { format } from 'date-fns';

let projectList = [
  {
    name: 'Project1',
    todos: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-26') },
      { text: 'Ut enim ad minim veniam.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-27') },
      { text: '19 packages are looking for funding.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-28') }
    ],
    doing: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-26') },
      { text: 'Ut enim ad minim veniam.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-27') },
    ],
    done: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-26') },
      { text: 'Ut enim ad minim veniam.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-27') },
    ],
  },
  {
    name: 'Project2',
    todos: [
      { text: 'Ut enim ad minim veniam.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-29') },
      { text: 'Ut enim ad minim veniam.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-30') }
    ],
    doing: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-26') },
    ],
    done: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-26') },
    ],
  },
  {
    name: 'Project3',
    todos: [
      { text: '19 packages are looking for funding.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-06-01') }
    ],
    doing: [
      { text: 'Lorem ipsum dolor sit amet.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-26') },
      { text: 'Ut enim ad minim veniam.', recordDate: new Date('2023-05-20'), dueDate: new Date('2023-05-27') },
    ],
    done: [
    ],
  }
];


let projectSelected = '0'; 
let taskSelected = null;
let statusSelected= null;
let currentHoverTask = null;

let mainDiv = document.getElementById('content').getElementsByClassName('mainBox')[0];
let sidebarDiv = document.getElementById('content').getElementsByClassName('sideBox')[0];


function header(){
    const contentDiv = document.getElementById('content');
  
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerBox');
    contentDiv.appendChild(headerDiv);
  
    const logoObj = document.createElement('object');
    logoObj.classList.add('svg');
    logoObj.id = 'logo';
    logoObj.type = 'image/svg+xml';
    logoObj.data = '/src/logo.svg';
    headerDiv.appendChild(logoObj);  
    
    const titleDiv = document.createElement('div');
    titleDiv.classList="titleDiv";
    headerDiv.appendChild(titleDiv);

    const headH1 = document.createElement('h1');
    headH1.textContent = 'ToDominator 3000';
    titleDiv.appendChild(headH1);

    const headp = document.createElement('p');
    headp.textContent = 'No task shall be left un-checked';
    headp.classList="headP";
    titleDiv.appendChild(headp);

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
      projectItem.dataset.ProjectPosition = index;

      if (index === projectSelected) {
        projectItem.classList.add('selected');
      }

      //add a click listener to stored the selected project
        projectItem.addEventListener('click', () => {
            projectSelected = projectItem.dataset.ProjectPosition;
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
  addButtonDiv.classList.add('addButtonDiv');
  addButtonDiv.textContent = 'Add Project';
  controlsSidebarDiv.appendChild(addButtonDiv); 

  //add click for add button
  addButtonDiv.addEventListener('click', () => {
    const newProject = prompt("Please enter a new project name:", "Awesome winner project");
    console.log('Project Add:', newProject);
    addProject(newProject);
    main();
    sidebar()
  })

  //add delete button for projects
  const deleteButtonDiv = document.createElement('div');
  deleteButtonDiv.classList.add('deleteButtonDiv');
  deleteButtonDiv.textContent = 'Delete';
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
    mainH2.textContent = ` ${projectList[projectSelected].name} tasks:`;
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

        //make droppable into
        statusContainer.addEventListener('dragover', (e) => {
            e.preventDefault(); // this is necessary to allow dropping
        });
        
        statusContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            const oldStatus = e.dataTransfer.getData('parent');
            const taskPosition = e.dataTransfer.getData('text/plain');
            changeStatus(projectSelected, oldStatus, taskPosition, statuses);
        });
        //
        
        const statusTitle = document.createElement('h2');
        statusTitle.textContent = statuses;
        statusContainer.appendChild(statusTitle);

        projectList[projectSelected][statuses].forEach((task,index) => {
          const statusItems = document.createElement('div');
          statusItems.classList.add('statusItems');
          statusItems.dataset.task = index;
          statusContainer.appendChild(statusItems);

          const taskDueDate = document.createElement('p');
          // taskDueDate.textContent = `Due Date: ${task.dueDate}`;

          if (task.dueDate === null || task.dueDate === '' )
              {taskDueDate.textContent = `Due Date: ${task.dueDate}`;}
          else{
          let isoDueDate = task.dueDate;
          taskDueDate.textContent = `Due Date: ${isoDueDate.toISOString().slice(0,10)}`;
          // taskDueDate.textContent = `Due Date: ${task.dueDate.toISOString().slice(0,10)}`;
          // taskDueDate.textContent = `Due Date: ${format(task.dueDate, 'yyyy-MM-ss')}`;
          }
          taskDueDate.classList.add('DueDate');
          statusItems.appendChild(taskDueDate);

          const taskRecordDate = document.createElement('p');
          // taskRecordDate.textContent = `Record Date: ${task.recordDate}`;
          let isoRecordDate = task.recordDate;
          taskRecordDate.textContent = `Record Date: ${isoRecordDate.toISOString().slice(0,10)}`;
          // taskRecordDate.textContent = `Record Date: ${format(task.recordDate, 'yyyy-MM-ss')}`;
          taskRecordDate.classList.add('RecordDate');
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
            taskSelected = statusItems.dataset.task;
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
          
          //make dragable
          statusItems.setAttribute("draggable", "true");
          statusItems.addEventListener('dragstart', (e) => {
              e.dataTransfer.setData('text/plain', e.target.dataset.task);
              e.dataTransfer.setData('parent', statuses);
          });

          //Listen to dragover
          statusItems.addEventListener('dragover', (e) => {
            e.preventDefault();
            currentHoverTask = statusItems.dataset.task;
            console.log(currentHoverTask);
          });

          statusItems.addEventListener('dragleave', (e) => {
                currentHoverTask = null;
                console.log(currentHoverTask);
          });
          //
          //modify due date
          taskDueDate.addEventListener('click', () => {
            const newDueDate = promptForNewDate();
            projectList[projectSelected][statuses][index].dueDate = newDueDate;
            main();
          });

          //modify task text
          taskElement.addEventListener('click', () => {
            let oldTaskText = projectList[projectSelected][statuses][index].text;
            const newTaskText = promptForNewTaskText(oldTaskText);
            projectList[projectSelected][statuses][index].text = newTaskText;
            main();
          });

        })

        //control button div
        const controlsMainDiv = document.createElement('div');
        controlsMainDiv.classList.add('controlsMainDiv');
        statusContainer.appendChild(controlsMainDiv);
              


        //add add button for projects
        const addButtonDiv = document.createElement('div');
        addButtonDiv.classList.add('addButtonDiv')
        addButtonDiv.textContent = 'Add Task'
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
        deleteButtonDiv.textContent = 'Delete'
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

function createProject(name) {
  return {
    name,
    todos: [],
    doing: [],
    done: [],
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
  // const today = format(new Date(), 'yyyy-MM-dd');
  const today = new Date();
  projectList[projectListIndex][status].push({ text: task, recordDate: today, dueDate: '' });
  taskSelected = null;
}

//function changeStatus

function changeStatus(projectSelected, oldStatus, taskSelected, newStatus){
  const tempObject = projectList[projectSelected][oldStatus][taskSelected];
  projectList[projectSelected][oldStatus].splice(taskSelected, 1);

  projectList[projectSelected][newStatus].splice(currentHoverTask, 0, tempObject);

  taskSelected = null;
  statusSelected= null;
  main();
}


// function promptForNewDate() {
//   let newDateString = prompt("Please enter a new due date (yyyy-MM-dd)");
//   if (newDateString === null){newDateString =''}
//   else{
//   newDateString = new Date(newDateString);
//   }
//   return newDateString
// }

function promptForNewDate() {
  let newDateString = prompt("Please enter a new due date (yyyy-MM-dd)");
  if (newDateString === null){newDateString =''; return newDateString}
  else{
    let newDate = new Date(newDateString);
    console.log(newDate);
    // Create a new date object for the current date and time
    let currentDate = new Date();

    // Set the time of the newDate to the current time
    // newDate.setHours(currentDate.getHours(), currentDate.getMinutes());
    console.log(currentDate);
    console.log(newDate);
    let offset = currentDate.getTimezoneOffset();
    console.log('offset', offset);
    offset *= 60 * 1000;
    newDate.setTime(newDate.getTime() + offset);
    console.log(newDate);
    return newDate;
  }
}


function promptForNewTaskText(oldtTaskText) {
  let newTaskText = prompt(`${oldtTaskText}`);
  if (newTaskText === null){newTaskText = oldtTaskText}

  return newTaskText;
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