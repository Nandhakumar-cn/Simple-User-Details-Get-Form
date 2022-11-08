import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

import "./education.css"



export default function Education(props){

  const navigate=useNavigate();
 const [Name, setName] = useState("")
 const [Education, setEducation] = useState("")
 const [Address, setAddress] = useState("")
 const [Pincode, setPincode] = useState("")
 const [display, setdisplay] = useState(true)

 const handle = ()=>{
  var education={
   Name:Name,
   Education:Education,
   Address:Address,
   Pincode:Pincode
    
    }
    
    localStorage.setItem('education',JSON.stringify(education));
  if(Name.length && Education.length && Address.length && Pincode.length > 0){
  setdisplay(navigate('/home'));

  }
 }




    
    return (
      <div>
        
       
        <table className='edu1'>
        <tr>
       <td> <label>Name :</label></td>
       <td> <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}  ></input></td><br></br>
      </tr>
      
      <br></br>
      <br></br>
      <tr>
       <td> <label>Education :</label></td>
       <td><input type='text' value={Education} onChange={(e)=>setEducation(e.target.value)} >
        </input> </td> <br></br>
        </tr>
        <br></br>
        <br></br>
        <tr>
       <td> <label>Address</label></td>
       <td><input type='text' value={Address} onChange={(e)=>setAddress(e.target.value)}   >
        </input> </td> <br></br>
        </tr>
        <br></br>
        <br></br>
        <tr>
       <td> <label>Postal Code:</label></td>
       <td><input type='number'value={Pincode} onChange={(e)=>setPincode(e.target.value)}  
        ></input> </td> <br></br>
        </tr>
        <br></br>
        <br></br>

       <button onClick={handle}> Next</button>
       
       </table>
       
      
  
      
      </div>
    )
  }  

