import './style.css';


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

let projectSelected = 0; 
let mainDiv = document.getElementById('content').getElementsByClassName('mainBox')[0];


function header(){
    const contentDiv = document.getElementById('content');
  
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerBox');
    contentDiv.appendChild(headerDiv);
  
    const logoObj = document.createElement('object');
    logoObj.classList.add('svg');
    logoObj.id = 'login';
    logoObj.type = 'image/svg+xml';
    logoObj.data = '/src/login.svg';
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
    const contentDiv = document.getElementById('content');
  
    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sideBox');
    contentDiv.appendChild(sidebarDiv);

    const sideBarH2 = document.createElement('h2');
    sideBarH2.textContent = 'Your Projects: ';
    sidebarDiv.appendChild(sideBarH2);

    // Create an unordered list for project names
  const projectListUl = document.createElement('ul');
  sidebarDiv.appendChild(projectListUl);

  // Iterate over the projectList and add project names as list items
    projectList.forEach((project, index) => {
        const projectLi = document.createElement('li');
        projectLi.textContent = project.name;
        // Add data attribute for the project name position
        projectLi.dataset.position = index;

        //add a click listener to stored the selected project
        projectLi.addEventListener('click', () => {
            projectSelected = projectLi.dataset.position;

            //store selected and also highlight it
            const sidebarListAll = projectListUl.getElementsByTagName('li');
            Array.from(sidebarListAll).forEach(item => {
                item.classList.remove('selected')
            })
            projectLi.classList.add('selected');
            console.log('Project selected:', projectSelected);
            main()
          
        })
        projectListUl.appendChild(projectLi);
    });

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
        statusContainer.classList.add('statusContainer')
        mainDiv.appendChild(statusContainer);

        const statusTitle = document.createElement('h2');
        statusTitle.textContent = statuses;
        statusContainer.appendChild(statusTitle);

        projectList[projectSelected][statuses].forEach(task => {
          const statusItems = document.createElement('div');
          statusItems.classList.add('statusItems');
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
        })
    })
}

function display(){
    header();
    sidebar();
    main();
}

display()
console.log(projectList)
