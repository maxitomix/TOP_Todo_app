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
      ]
    },
    {
      name: 'Project3',
      todos: [
        { text: '19 packages are looking for funding.', recordDate: '2023-05-20', dueDate: '2023-06-01' }
      ]
    }
];

let projectSelected 


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
            
        })


        projectListUl.appendChild(projectLi);
    });

}

function main(){
    const contentDiv = document.getElementById('content');
  
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('mainBox');
    contentDiv.appendChild(mainDiv);

    const mainH2 = document.createElement('h2');
    mainH2.textContent = 'Project "Default" work area:';
    mainDiv.appendChild(mainH2);
}

function display(){
    header();
    sidebar();
    main();
}

display()