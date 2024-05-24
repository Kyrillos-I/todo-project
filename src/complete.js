function toggleCheck(todo){
    if(todo.checked === false){
        todo.checked = true;
    }
    else{
        todo.checked = false;
    }
}
export default toggleCheck;