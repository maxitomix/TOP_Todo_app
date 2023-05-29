(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),d=n.n(o)()(a());d.push([e.id,':root {\r\n    --one-color: #27374D;\r\n    --two-color: #526D82;\r\n    --three-color: #9DB2BF;\r\n    --four-color: #DDE6ED;\r\n    --accent-color:#D21312;\r\n    --accent2-color:#00E5FF;   \r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    color: var(--four-color)\r\n}\r\n\r\nhtml{\r\n    background-color:  var(--one-color);  \r\n}\r\n\r\n#content{\r\n    background-color:  var(--one-color);  \r\n    padding: 1rem;\r\n    display: grid;\r\n    grid-template-areas: \r\n    "headerBox headerBox headerBox headerBox headerBox"\r\n    "sideBox mainBox mainBox mainBox mainBox";\r\n}\r\n\r\n#logo{\r\n    width: 4rem; \r\n}\r\n\r\n#login{\r\n    width: 4rem;\r\n}\r\n\r\n.svg{\r\n    /* filter: invert(16%) sepia(81%) saturate(3883%) hue-rotate(354deg) brightness(92%) contrast(96%); */\r\n    filter: invert(51%) sepia(36%) saturate(3669%) hue-rotate(160deg) brightness(92%) contrast(106%);\r\n}\r\n\r\n.headerBox {\r\n    grid-area: headerBox;\r\n    align-items: center; \r\n    background-color: var(--two-color);\r\n    border-radius: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.headerBox{\r\n    display: flex;\r\n}\r\n\r\n.headerBox h1{\r\n    padding-left: 1rem;\r\n}\r\n\r\n.headerBox object:last-child{\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n\r\n.controlsSidebarDiv, .controlsMainDiv{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.statusButton{\r\n    color:#00E5FF;\r\n    background-color: #526D82;\r\n}\r\n\r\n.sideBox {\r\n    grid-area: sideBox;\r\n    background-color: var(--two-color);\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.selected{\r\n    background-color:  var(--two-color) !important;\r\n    outline: 4px solid var(--one-color) !important;\r\n}\r\n\r\n .projectItem {\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    background-color:  var(--one-color);  \r\n    box-shadow: \r\n    2px 2px 4px rgba(0, 0, 0, 0.2),\r\n    -2px -2px 4px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.deleteButtonDiv{\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    background-color: darkred;  \r\n    box-shadow: \r\n    2px 2px 4px rgba(0, 0, 0, 0.2),\r\n    -2px -2px 4px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: var(--three-color)\r\n}\r\n\r\n.addButtonDiv{\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    background-color:  green;  \r\n    box-shadow: \r\n    2px 2px 4px rgba(0, 0, 0, 0.2),\r\n    -2px -2px 4px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: var(--three-color)\r\n}\r\n\r\n.mainBox {\r\n    grid-area: mainBox;\r\n    background-color: var(--two-color);\r\n    margin-left: 1rem;\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.mainBox h2{\r\n    text-align: center;\r\n}\r\n\r\n.statusContainer h2{\r\n    text-align: left;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.mainBox .statusItems{\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    background-color:  var(--one-color);  \r\n    box-shadow: \r\n    2px 2px 4px rgba(0, 0, 0, 0.2),\r\n    -2px -2px 4px rgba(0, 0, 0, 0.2);\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.statusItems .taskItem{\r\n    grid-column: 1/3;\r\n    border-top: 1px solid var(--accent2-color);\r\n    padding-top: .5rem;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.statusItems p:nth-child(2){\r\n    text-align-last: right;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    #content {\r\n\r\n        grid-template-areas:\r\n            "headerBox"\r\n            "sideBox"\r\n            "mainBox";\r\n    }\r\n\r\n.mainBox, .sideBox{\r\n    margin: 0;\r\n    margin-top: .5rem;\r\n\r\n}\r\n\r\n.headerBox{\r\n    margin-bottom: 0;\r\n    font-size:1rem;\r\n}\r\n\r\n#logo, #login{\r\n    width: 2rem; \r\n}\r\n\r\n.headerBox h1{\r\n    margin: .5rem;\r\n}\r\n\r\n}',""]);const s=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(d[c]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&d[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},d=[],s=0;s<e.length;s++){var c=e[s],i=r.base?c[0]+r.base:c[0],l=o[i]||0,m="".concat(i," ").concat(l);o[i]=l+1;var u=n(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var g=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:m,updater:g,references:1})}d.push(m)}return d}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var s=n(o[d]);t[s].references--}for(var c=r(e,a),i=0;i<o.length;i++){var l=n(o[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),d=n.n(o),s=n(565),c=n.n(s),i=n(216),l=n.n(i),m=n(589),u=n.n(m),p=n(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),t()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;let v=[{name:"Project1",todos:[{text:"Lorem ipsum dolor sit amet.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-26")},{text:"Ut enim ad minim veniam.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-27")},{text:"19 packages are looking for funding.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-28")}],doing:[{text:"Lorem ipsum dolor sit amet.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-26")},{text:"Ut enim ad minim veniam.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-27")}],done:[{text:"Lorem ipsum dolor sit amet.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-26")},{text:"Ut enim ad minim veniam.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-27")}]},{name:"Project2",todos:[{text:"Ut enim ad minim veniam.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-29")},{text:"Ut enim ad minim veniam.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-30")}],doing:[{text:"Lorem ipsum dolor sit amet.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-26")}],done:[{text:"Lorem ipsum dolor sit amet.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-26")}]},{name:"Project3",todos:[{text:"19 packages are looking for funding.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-06-01")}],doing:[{text:"Lorem ipsum dolor sit amet.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-26")},{text:"Ut enim ad minim veniam.",recordDate:new Date("2023-05-20"),dueDate:new Date("2023-05-27")}],done:[]}],x="0",f=null,h=null,D=null,b=document.getElementById("content").getElementsByClassName("mainBox")[0],E=document.getElementById("content").getElementsByClassName("sideBox")[0];function w(){if(!b){const e=document.getElementById("content");b=document.createElement("div"),b.classList.add("mainBox"),e.appendChild(b)}b.innerHTML="";const e=document.createElement("h2");e.textContent=` ${v[x].name} tasks:`,b.appendChild(e);const t=[];v.forEach((e=>{Object.keys(e).forEach((e=>{"name"===e||t.includes(e)||t.push(e)}))})),t.forEach((e=>{const t=document.createElement("div");t.classList.add("statusContainer"),t.dataset.status=e,t.dataset.project=x,b.appendChild(t),t.addEventListener("dragover",(e=>{e.preventDefault()})),t.addEventListener("drop",(t=>{t.preventDefault();const n=t.dataTransfer.getData("parent"),r=t.dataTransfer.getData("text/plain");!function(e,t,n,r){const a=v[e][t][n];v[e][t].splice(n,1),v[e][r].splice(D,0,a),n=null,h=null,w()}(x,n,r,e)}));const n=document.createElement("h2");n.textContent=e,t.appendChild(n),v[x][e].forEach(((n,r)=>{const a=document.createElement("div");a.classList.add("statusItems"),a.dataset.task=r,t.appendChild(a);const o=document.createElement("p");o.textContent=`Due Date: ${n.dueDate}`,o.classList.add("DueDate"),a.appendChild(o);const d=document.createElement("p");d.textContent=`Record Date: ${n.recordDate}`,d.classList.add("RecordDate"),a.appendChild(d);const s=document.createElement("p");s.textContent=n.text,s.classList.add("taskItem"),a.appendChild(s),r.toString()===f&&e===h&&a.classList.add("selected"),a.addEventListener("click",(()=>{f=a.dataset.task,h=t.dataset.status;const e=t.getElementsByClassName("statusItems");Array.from(e).forEach((e=>{e.classList.remove("selected")})),a.classList.add("selected"),console.log("Status selected:",h),console.log("Task selected:",f),w()})),a.setAttribute("draggable","true"),a.addEventListener("dragstart",(t=>{t.dataTransfer.setData("text/plain",t.target.dataset.task),t.dataTransfer.setData("parent",e)})),a.addEventListener("dragover",(e=>{e.preventDefault(),D=a.dataset.task,console.log(D)})),a.addEventListener("dragleave",(e=>{D=null,console.log(D)})),o.addEventListener("click",(()=>{const t=function(){let e=prompt("Please enter a new due date (yyyy-MM-dd)");return e=null===e?"":new Date(e),e}();v[x][e][r].dueDate=t,w()})),s.addEventListener("click",(()=>{const t=function(e){let t=prompt(`${e}`);return null===t&&(t=e),t}(v[x][e][r].text);v[x][e][r].text=t,w()}))}));const r=document.createElement("div");r.classList.add("controlsMainDiv"),t.appendChild(r);const a=document.createElement("div");a.classList.add("addButtonDiv"),a.textContent="Add Task",r.appendChild(a),a.addEventListener("click",(()=>{h=t.dataset.status;const e=prompt("Please enter new task:","Very important task");console.log("Task Add:",e,h),function(e,t,n){const r=new Date;v[e][t].push({text:n,recordDate:r,dueDate:""}),f=null}(x,h,e),w()}));const o=document.createElement("div");o.classList.add("deleteButtonDiv"),o.textContent="Delete",r.appendChild(o),o.addEventListener("click",(()=>{var e,n;console.log(x,"=",t.dataset.project,h,"=",t.dataset.status,f,"=!",null),x===t.dataset.project&&h===t.dataset.status&&null!==f&&(console.log("Task Remove:",x,h,f),e=h,n=f,v[x][e].splice(n,1),f=null,w())}))}))}!function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("headerBox"),e.appendChild(t);const n=document.createElement("object");n.classList.add("svg"),n.id="login",n.type="image/svg+xml",n.data="/src/logo.svg",t.appendChild(n);const r=document.createElement("h1");r.textContent="ToDoneIng",t.appendChild(r);const a=document.createElement("object");a.classList.add("svg"),a.id="login",a.type="image/svg+xml",a.data="/src/login.svg",t.appendChild(a)}(),function e(){if(!E){const e=document.getElementById("content");E=document.createElement("div"),E.classList.add("sideBox"),e.appendChild(E)}E.innerHTML="";const t=document.createElement("h2");t.textContent="Your Projects: ",E.appendChild(t);const n=document.createElement("div");n.classList.add("projectList"),E.appendChild(n),v.forEach(((e,t)=>{const r=document.createElement("div");r.classList.add("projectItem"),r.textContent=e.name,r.dataset.ProjectPosition=t,t===x&&r.classList.add("selected"),r.addEventListener("click",(()=>{x=r.dataset.ProjectPosition,f=null;const e=n.getElementsByClassName("projectItem");Array.from(e).forEach((e=>{e.classList.remove("selected")})),r.classList.add("selected"),console.log("Project selected:",x),w()})),n.appendChild(r)}));const r=document.createElement("div");r.classList.add("controlsSidebarDiv"),n.appendChild(r);const a=document.createElement("div");a.classList.add("addButtonDiv"),a.textContent="Add Project",r.appendChild(a),a.addEventListener("click",(()=>{const t=prompt("Please enter a new project name:","Awesome winner project");console.log("Project Add:",t),function(e,t){let n=function(e){return{name:e,todos:[],doing:[],done:[]}}(e);v.push(n)}(t),w(),e()}));const o=document.createElement("div");o.classList.add("deleteButtonDiv"),o.textContent="Delete",r.appendChild(o),o.addEventListener("click",(()=>{var t;console.log("Project Remove:",x),t=x,v.splice(t,1),e(),w()}))}(),w(),console.log(v),console.log(x)})()})();