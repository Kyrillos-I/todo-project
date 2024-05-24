function deleteProjects(project, projects){
    let store = "";
    for(let i=0; i<projects.length; i++){
        if(projects[i] == project){
            store = project;
            break;
        }
    }
    let index = projects.indexOf(project)
    projects.splice(index,1);
}

export default deleteProjects;