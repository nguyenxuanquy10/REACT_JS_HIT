const addTodo=(data)=>{
    return {
        type:'add/todoList', 
        payload:data, 
    }
}
const deleteTodo=(data)=>{
    return {
        type:'delete/todoList', 
        payload:data, 
    }
}
export {addTodo,deleteTodo}; 
