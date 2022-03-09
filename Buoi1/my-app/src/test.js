import React ,{useState,useEffect} from 'react';
import './test.css';
const Test=(props)=>{
    const {curColor}=props; 
    const {curText}=props;
    const [number,setNumber]=useState(0); 
    const [text,setText]=useState(curText);
    const [newColor,newSetcolor]=useState(curColor);
    const [textColor,setTextColor]=useState('white'); 
    const [dogImage,setDogImage]=useState(null) 
    useEffect( async ()=>{
        await fetch("https://dog.ceo/api/breeds/image/random")
       .then(response=>response.json())
       .then(data=>setDogImage(data.message))
       .catch((err)=>{
           console.error(err)
       })
    },[])
    const myStyle={
        backgroundColor:newColor,
        color:textColor,

    }
    const changeBackground=()=>{
        newSetcolor('pink');
      myStyle.backgroundColor=newColor;
      
    }
    const increaseNumber=()=>{
        setNumber(number+1)
    }
    const changeText=()=>{
        setText('Full Stack')
    }
    const changeTextColor=()=>{
        setTextColor('black');
    }
    return(
      <div className="body" style={myStyle}>
        <h1>Number: {number}</h1>
        <h1>Text:{text}</h1>
        <h1>BackGroundColor: {newColor}</h1>
        <button onClick={()=>increaseNumber()}>Increase Number</button>
        <br></br>
        <br></br>
        <button onClick={()=>changeText()}>Change Text</button>
        <br></br>
        <br></br>
         <button  onClick={()=>changeBackground()}>Change BackGroundColor</button>
        <br></br>
        <br></br>
        <button onClick={()=>changeTextColor()}>Change Color text</button>
        <img src={dogImage} ></img>
      </div>
    )
}
export default Test;
