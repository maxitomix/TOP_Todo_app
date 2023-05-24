import './style.css';


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
    sideBarH2.textContent = 'ToDoneIng';
    sidebarDiv.appendChild(sideBarH2);

    
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


header();
sidebar();
main();