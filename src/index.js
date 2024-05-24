import createToDo from './todos.js';
import createProject from './projects.js'
import addToProject from './addToProject.js';
import toggleCheck from './complete.js';
import editTodo from './editTodo.js';
import deleteTodo from './deleteTodo.js';
import deleteProjects from './deleteProject.js';

//The below code only serves to test the other modules.

const projects = [];

let project1 = createProject('Gym', 'red');
let todo1 = createToDo("Get Swole", "Hit the gym and get big", "3/13", "High", false);

projects.push(project1);


addToProject(project1, todo1);

console.log(project1.title);
console.log(todo1.title);

console.log(project1.contents);

console.log(todo1.checked);
toggleCheck(todo1);
console.log(todo1.checked);
toggleCheck(todo1);
console.log(todo1.checked);


let hey = document.querySelector('.hey');
console.log(projects);
hey.addEventListener('click',function(){
    //editTodo(todo1, projects, "Learn web dev", "Get good at node.js and react", '3/13', 'High', false);
    //deleteTodo(todo1, projects);
    deleteProjects(project1, projects)
    console.log(projects);
})





