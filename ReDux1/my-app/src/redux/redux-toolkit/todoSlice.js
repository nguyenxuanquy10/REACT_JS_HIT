import {createSlice} from '@reduxjs/toolkit'
const initialState = [];
const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log('test')
            state.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            const newState=[...state];
            return newState.filter(item=>item!==action.payload)
        }

    }       
})
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer; 
