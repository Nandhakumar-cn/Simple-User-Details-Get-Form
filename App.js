import React ,{useState}from 'react'
// import {useHistory} from "react-router-dom"

// import { Link } from 'react-router-dom';
import {  useNavigate} from "react-router-dom"
// import Education from './education'

export default function App(props) {

  const navigate =useNavigate()
  const [Mail, setMail] = useState("")
 
    const [PhoneNum, setPhoneNum] = useState("")
  const [display, setdisplay] = useState("")






  const handle = () => {
   
    var home={
      Mail:Mail,
      PhoneNum:PhoneNum
      
      }
      
      localStorage.setItem('home',JSON.stringify(home));
   
     if(Mail.length > 0 && PhoneNum.length > 0 ){
    setdisplay(navigate('/education'))
     }
 }

 


    
    
  
  
    
    return (
      <div className='container'> 
      
        
       
      <table> 
        <tr>
       <td> <label>Email :</label></td>
       <td> <input type='text' value={Mail} onChange={(e)=>setMail(e.target.value)} ></input></td><br></br>
      </tr>
      <br></br>
      <br></br>
      <tr>
       <td> <label>PhoneNumber :</label></td>
       <td><input type='number'  value={PhoneNum} onChange={(e)=>setPhoneNum(e.target.value)} 
        ></input> </td> <br></br>
        </tr>
        <br></br>
        <br></br>
       
      <button  onClick={handle}>Next </button>
       
       </table>
       
      
      </div>
    )
 
  
    }
   