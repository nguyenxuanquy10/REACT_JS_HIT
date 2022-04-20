import {React,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'; 
import {addTodo,deleteTodo} from '../../redux/actions'; 
const ToDo=()=>{
    const todoList=useSelector(state=>state.todoList); 
    const [value,setValue]=useState(); 
    console.log(todoList);
    const dispatch=useDispatch(); 
    const handleAdd=()=>{
        dispatch(addTodo(value)); 
    }
    const handleDelete=(item)=>{
        console.log(item+'chake')
        dispatch(deleteTodo(item));
    }
    return  (
        <div>
           <div>Test redux</div>
           <div>
               <input placeholder="enter your name " onChange={(e)=>setValue(e.target.value)}/>
               <button onClick={handleAdd}>Add</button>
           </div>
           {
               
                   todoList.map(item=>(
                       <ul key={item}>
                           <li>{item}</li>
                           <span onClick={()=>handleDelete(item)}>X</span>
                       </ul>
                   ))
            
           }
        </div>
    )
}
export default ToDo; 