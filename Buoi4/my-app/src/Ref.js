import { useState,useRef } from "react";
import {useNavigate,useLocation} from 'react-router-dom'
const Demo=()=>{
  // const [time,setTime]=useState(0); 
  // const stoptime=useRef(); 
  // const incressTime=()=>{
  //    stoptime.current= setInterval(()=>{
  //       setTime((pretime)=>pretime+1)
  //     },1000)
  // }
  // const stopTime=()=>{
  //    clearInterval(stoptime.current)
  // }
  const location=useLocation(); 
  console.log(location.pathname)
  const navigate=useNavigate();
  const  [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const arrListToDo=[]; 
  const [value,setValue]=useState("")
  const handleSubmit=function(){
    
  }
  console.log(value)
    return (
      <div>
           <h1 className="heading">ToDoList</h1>
           <div className="form-input">
               <input type="text" placeholder="todo" onChange={(e)=>setValue(e.target.value)}/>
               {/* <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> */}
           </div>
           <button onClick={handleSubmit}>add todo</button>
      </div>
  )
}
export default Demo; 

