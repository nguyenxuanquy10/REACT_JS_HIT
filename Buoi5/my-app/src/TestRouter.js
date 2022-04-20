import {React,useState,useEffect,useRef,useContext} from 'react'
import { testUseContext } from './App'
export const TestRouter = (props) => {
  const checkUseContent=useContext(testUseContext)
  console.log(checkUseContent)
  const [color,setColor]=useState(null)
  const [change,setChange]=useState(0)
  const [dogImage,setDogImage]=useState(null);
   useEffect(  ()=>{
         fetch("https://dog.ceo/api/breeds/image/random").then(data=>data.json()).then(data=>setDogImage(data.message))
   },[change])
  return (
    <div>
      <h1 className={color}>TestRouter + {checkUseContent}</h1>
      <button onClick={()=>setColor(props.test)}>Click me </button>
      <button onClick={()=>setChange(Math.random())}>Click to change image</button>
      {/* {dogImage && <img src={dogImage} ></img>}  */}
     </div>
  )
}
