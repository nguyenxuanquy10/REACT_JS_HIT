import  {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/redux-toolkit/todoSlice';
import { useState } from 'react';
const Todo=()=>{
    
    const todoList=useSelector((state)=>state.todo); 
    
    const [value,setValue]=useState(""); 
    const dispatch=useDispatch(); 
   
    const add=()=>{
        console.log(value)
          dispatch(addTodo(value))
          setValue(""); 
    }
    const delete1=(item)=>{
        dispatch(deleteTodo(item))
    }
    return (
        <div>
          <h1> current value: {value}</h1>
          <input placeholder="enter your name " onChange={(e)=>setValue(e.target.value)} />
          <button onClick={add}>add</button>
           <ul>
            {
               todoList &&  todoList.map(
                 item=>{
                    return <li key={item}>
                                  {item}
                                 <span onClick={()=>delete1(item)}>X</span>
                           </li>
                 }
                )
            }
            </ul>
        </div>
    )
}
export default Todo; 