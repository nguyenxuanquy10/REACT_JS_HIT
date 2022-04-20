import {useLocation} from 'react-router-dom'
import React from 'react'

export const  UseLocation=() => {
    const location=useLocation(); 
    console.log(location.search)
  return (
    <div>useLocation : {location}</div>
  )
}
