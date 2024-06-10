import createProject from './projects.js'
import updateDOM from './updateDOM.js';

let projects;
//localStorage.clear();
console.log('Heyy')
if(localStorage.getItem('projects')===null){
    console.log('No Projects Found In Local Storage');
    projects = [];
}
else{
    console.log('Projects found in local storage');
    projects = JSON.parse(localStorage.getItem('projects'));
}


let inputProject = document.querySelector('.addProjects');
let closeInputProject = document.querySelector('.closeProject');
let popupFormProject = document.querySelector('.projectPopUp');

inputProject.addEventListener('click', function() {
    popupFormProject.showModal();
});
closeInputProject.addEventListener('click', function() {
    popupFormProject.close();
    console.log('Closed!');
});
popupFormProject.addEventListener('submit', function(event) {
    event.preventDefault();
    let pTitle = document.querySelector('#title').value;
    let pColor = document.querySelector('#color').value;
    let createdProject = createProject(pTitle, pColor);
    projects.push(createdProject);
    localStorage.setItem('projects', JSON.stringify(projects))
    updateDOM(projects, createdProject);
    popupFormProject.close();
});

updateDOM(projects);


//The below code only serves to test the other modules.
/*
let project1 = createProject('Gym', 'red');
let todo1 = createToDo("Get Swole", "Hit the gym and get big", "3/13", "High", false);
let project2 = createProject('Code', 'purple');
let todo2 = createToDo("Get Big", "Hit the gym and get big", "3/13", "Medium", false);
let todo3 = createToDo("Get Huge", "Hit the gym and get big", "3/13", "Low", false);

projects.push(project1);


addToProject(project1, todo1);
addToProject(project1, todo2);
addToProject(project2, todo3);



console.log(project1.title);
console.log(todo1.title);

console.log(project1.contents);

console.log(todo1.checked);
toggleCheck(todo1);
console.log(todo1.checked);
toggleCheck(todo1);
console.log(todo1.checked);
projects.push(project2);

updateDOM(projects);
*/







