function deleteTodo(todo, projects){
    let project = null;
    for(let i = 0; i<projects.length; i++){
        for(let j=0; j<projects[i].contents.length; j++){
            if(projects[i].contents[j] == todo){
                project = projects[i];
                break;
            }
        }
        if(project) break;
    }
    let index = project.contents.indexOf(todo);
    project.contents.splice(index, 1);
}

export default deleteTodo;