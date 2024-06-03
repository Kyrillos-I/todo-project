import './style.css';
import './reset.css';
import redFolder from './redFolder.png';
import greenFolder from './greenFolder.png';
import purpleFolder from './purpleFolder.png';
import blueFolder from './blueFolder.png';
import addProject from './addProject.png';
import pen from './pen.png';
import trash from './trash.png';
import addTodoImage from './addTodoImg.png';
import projectTrash from './projectTrash.png';

import deleteProjects from './deleteProject.js';
import createToDo from './todos.js';
import addToProject from './addToProject.js';
import editTodo from './editTodo.js';
import deleteTodo from './deleteTodo.js';


let addProjectImg = document.querySelector('.addImage')
addProjectImg.src = addProject;
let addTodoImg = document.querySelector('.todoImg');
addTodoImg.src = addTodoImage;


function updateDOM(projects, selected){

    let flexProjects = document.querySelector('.projectGroups');
    flexProjects.innerHTML = '';
    let heading = document.querySelector('.p-heading');
    heading.addEventListener('click',function(){
        updateDOM(projects);
    })

    for(let i=0; i<projects.length; i++){
        let project = document.createElement('div');
        project.classList.add('group');
        project.classList.add(projects[i].color);
        project.classList.add(projects[i].title);
        flexProjects.appendChild(project);

        let folder = document.createElement('img');
        if(projects[i].color == 'red'){
            folder.src = redFolder;
            project.classList.add('red');
        }
        else if(projects[i].color == 'green'){
            folder.src = greenFolder;
            project.classList.add('green');
        }
        else if(projects[i].color == 'purple'){
            folder.src = purpleFolder;
            project.classList.add('purple');
        }
        else if(projects[i].color == 'blue'){
            folder.src = blueFolder;
            project.classList.add('blue');
        }
        project.appendChild(folder);

        let projectName = document.createElement('div');
        projectName.textContent = projects[i].title;
        projectName.classList.add('projectName');
        project.appendChild(projectName);
        project.addEventListener('click', function(){
            updateDOM(projects, projects[i]);
        })
    }
    
    let itemList = document.querySelector('.itemList')
    itemList.innerHTML = '';

    if(selected===undefined){
        /*
        let addTodoButton = document.querySelector('.addTodo');
        let todoPopUp = document.querySelector('.todoPopUp');
        let closeTodo = document.querySelector('.closeTodo');
        let submitTodo = document.querySelector('.s-todo');
        addTodoButton.addEventListener('click', function(){
            todoPopUp.showModal();
        })
        closeTodo.addEventListener('click',function(){
            todoPopUp.close();
        })
        submitTodo.addEventListener('click', function(){
            alert('Please Select A Project To Add A Todo');
            todoPopUp.close();
        })
        */

        for(let i=0; i<projects.length; i++){
            for(let j=0; j<projects[i].contents.length; j++){
                let item = document.createElement('div');
                item.classList.add('item');
                itemList.appendChild(item);

                let checkOff = document.createElement('div');
                checkOff.classList.add('checkOff')
                item.appendChild(checkOff);

                let input = document.createElement('input');
                input.type = 'checkbox';
                input.id = projects[i].contents[j].title;
                input.name = projects[i].contents[j].title;
                input.value = 'checked';
                let label = document.createElement('label');
                label.setAttribute('for', projects[i].contents[j].title);
                label.classList.add('label');
                if(projects[i].color == 'red'){
                    label.classList.add('redT');
                }
                else if(projects[i].color == 'green'){
                    label.classList.add('greenT');
                }
                else if(projects[i].color == 'purple'){
                    label.classList.add('purpleT');
                }
                else if(projects[i].color == 'blue'){
                    label.classList.add('blueT');
                }
                label.innerText = projects[i].contents[j].title;
                checkOff.appendChild(input);
                checkOff.appendChild(label);
                
                let date = document.createElement('div');
                date.classList.add('date')
                date.innerText = projects[i].contents[j].dueDate;
                item.appendChild(date);

                let description = document.createElement('description');
                description.classList.add('description');
                description.innerText = projects[i].contents[j].description;
                item.appendChild(description);

                let footer = document.createElement('div');
                footer.classList.add('footer');
                item.appendChild(footer);
                let editPen = document.createElement('img');
                editPen.alt = 'edit';
                editPen.classList.add('edit');
                editPen.src = pen;
                let priority = document.createElement('div');
                priority.classList.add('priority');
                let level = projects[i].contents[j].priority;
                priority.classList.add(level);
                priority.innerText = level;
                let deleteTrash = document.createElement('img');
                deleteTrash.alt = 'delete';
                deleteTrash.classList.add('delete');
                deleteTrash.src = trash;
                deleteTrash.addEventListener('click', function(){
                    deleteTodo(projects[i].contents[j], projects);
                    updateDOM(projects, selected);
                })
                footer.appendChild(editPen);
                footer.appendChild(priority);
                footer.appendChild(deleteTrash);
            }
        }
    }
    else{

        todoPopUp.selectedProject = selected;


        let storeName = "."+selected.title;
        let currentlySelected = document.querySelector(storeName);
        let removeSelected = document.createElement('img');
        removeSelected.alt = 'Delete Selected Project';
        removeSelected.src = projectTrash;
        removeSelected.classList.add('deleteProject');
        currentlySelected.appendChild(removeSelected);
        removeSelected.addEventListener('click',function(){
            deleteProjects(selected, projects);
            updateDOM(projects);
        })

        for(let j=0; j<selected.contents.length; j++){
            let item = document.createElement('div');
            item.classList.add('item');
            itemList.appendChild(item);

            let checkOff = document.createElement('div');
            checkOff.classList.add('checkOff')
            item.appendChild(checkOff);

            let input = document.createElement('input');
            input.type = 'checkbox';
            input.id = selected.contents[j].title;
            input.name = selected.contents[j].title;
            input.value = 'checked';
            let label = document.createElement('label');
            label.setAttribute('for', selected.contents[j].title);
            label.classList.add('label');
            if(selected.color == 'red'){
                label.classList.add('redT');
            }
            else if(selected.color == 'green'){
                label.classList.add('greenT');
            }
            else if(selected.color == 'purple'){
                label.classList.add('purpleT');
            }
            else if(selected.color == 'blue'){
                label.classList.add('blueT');
            }
            label.innerText = selected.contents[j].title;
            checkOff.appendChild(input);
            checkOff.appendChild(label);
            
            let date = document.createElement('div');
            date.classList.add('date')
            date.innerText = selected.contents[j].dueDate;
            item.appendChild(date);

            let description = document.createElement('description');
            description.classList.add('description');
            description.innerText = selected.contents[j].description;
            item.appendChild(description);

            let footer = document.createElement('div');
            footer.classList.add('footer');
            item.appendChild(footer);
            let editPen = document.createElement('img');
            editPen.alt = 'edit';
            editPen.classList.add('edit');
            editPen.src = pen;
            editPen.addEventListener('click', function(){
                todoPopUp.editItem = selected.contents[j];
                todoPopUp.edit =true;
                todoPopUp.showModal();
            })
            let priority = document.createElement('div');
            priority.classList.add('priority');
            let level = selected.contents[j].priority;
            priority.classList.add(level);
            priority.innerText = level;
            let deleteTrash = document.createElement('img');
            deleteTrash.alt = 'delete';
            deleteTrash.classList.add('delete');
            deleteTrash.src = trash;
            deleteTrash.addEventListener('click', function(){
                deleteTodo(selected.contents[j], projects);
                updateDOM(projects, selected);
            })
            footer.appendChild(editPen);
            footer.appendChild(priority);
            footer.appendChild(deleteTrash);
        }
        todoPopUp.removeEventListener('submit', (event)=> handleSubmit(todoPopUp.selectedProject, event));
    }
   localStorage.setItem('projects', JSON.stringify(projects));
   todoPopUp.projects = projects;
}

let addTodoButton = document.querySelector('.addTodo');
let todoPopUp = document.querySelector('.todoPopUp');
let closeTodo = document.querySelector('.closeTodo');

addTodoButton.addEventListener('click', function() {
    todoPopUp.showModal();
});

closeTodo.addEventListener('click', function() {
    todoPopUp.close();
});

const handleSubmit = function(selected1, event) {
    event.preventDefault();
    console.log('Well this ran!');
    let todo = createToDo(
        document.querySelector('#todo-title').value,
        document.querySelector('#description').value,
        document.querySelector('#dueDate').value,
        document.querySelector('#priority').value
    );
    addToProject(selected1, todo);
    todoPopUp.close();
    updateDOM(todoPopUp.projects, selected1);
    
};

todoPopUp.addEventListener('submit', (event)=> handleSubmit(todoPopUp.selectedProject, event));

export default updateDOM;