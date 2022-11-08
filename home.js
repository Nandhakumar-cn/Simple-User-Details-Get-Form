import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./App.css"


export default function Home(props) {
  const navigate=useNavigate();
  const [FatherName, setFatherName] = useState("")
  const [MotherName, setMotherName] = useState("")
  const [AlterNumber, setAlterNumber] = useState("")
  const [display,setdisplay] = useState(true)
  

  const submit=()=>{
    var Personal={
      FatherName:FatherName,
      MotherName:MotherName,
      AlterNumber:AlterNumber
      
       
       }
       
       localStorage.setItem('Personal',JSON.stringify(Personal));
  if(FatherName.length && MotherName.length && AlterNumber.length  > 0){
    setdisplay(navigate('/result'))
  }
  }

    return (
      <div>
        
        
         <table>
            
        <tr>
       <td> <label>FatherName:</label></td>
       <td> <input type='text'  value={FatherName} onChange={(e)=>setFatherName(e.target.value)}  ></input></td><br></br>
      </tr>
      <br></br>
      <br></br>
      <tr>
       <td> <label>MotherName :</label></td>
       <td><input type='text'  value={MotherName} onChange={(e)=>setMotherName(e.target.value)} 
        ></input> </td> <br></br>
        </tr>
        <br></br>
        <br></br>
        <tr>
       <td> <label>AlterNumber:</label></td>
       <td><input type='number'  value={AlterNumber} onChange={(e)=>setAlterNumber(e.target.value)} 
        ></input> </td> <br></br>
        </tr>
        <br></br>
        <br></br>
      
       <button onClick={submit}> SAVE</button>
       </table>
  
      </div>
    )
  }
    
        

