import React from 'react'
import {useParams} from 'react-router-dom'
export const UseParams = () => {
    const {userName}=useParams();
  return (
    <div>params is : {userName}</div>
  )
}
