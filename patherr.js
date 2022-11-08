import React from 'react'
import { useLocation } from 'react-router-dom'
import "./patherr.css"

export default function Patherror() {
  const location = useLocation()

  return (
    <div className='error'>
         <h1 className='err2'>404 Error Found</h1>   
 <p className='err'><span>{location.pathname}</span>&nbsp; Sorry This Request did't Work</p>
    <p className='symbol'><span id='span'>&#x26A0;</span></p> 
   
      </div>
  )
    }