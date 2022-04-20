const initState=[]; 
const todoReducer=(state=initState,action)=>{
    switch(action.type){
        case 'add/todoList':
            console.log('add')
            return [...state,action.payload];

        case 'delete/todoList':
            const newState=[...state]; 
            return newState.filter(list=>list!==action.payload)
        default: return state; 
    }
}
export default todoReducer; 