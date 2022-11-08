import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./result.css"

export default function Result(){
  const navigate=useNavigate();
const [display, setdisplay] = useState(true)


var home=JSON.parse(localStorage.getItem('home'));
var education=JSON.parse(localStorage.getItem('education'));
var Personal=JSON.parse(localStorage.getItem('Personal'));

const remove=()=>{


  localStorage.removeItem("Name");
  localStorage.removeItem("Mail");
  localStorage.removeItem("PhoneNum");
  localStorage.removeItem("FatherName");
  localStorage.removeItem("MotherName");
 localStorage.removeItem("AlterNumber");
 setdisplay(navigate('/'))
}
    return (
      <div>
        
        
      <div className='res1'>
        <h1><u> your details</u></h1>
        <p className='p1'>&nbsp;&nbsp;&nbsp;&nbsp; Name&nbsp;&nbsp; :      <span className='sp'>{education.Name}</span></p>
        <p className='p2'>&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp; :      <span className='sp1'>{home.Mail}</span></p>
        <p className='p3'>Contact &nbsp;&nbsp;:    <span className='sp2'>{home.PhoneNum}</span></p>
        <p className='p4'>Father Name &nbsp;&nbsp;:<span>{Personal.FatherName}</span></p>
        <p className='p5'>Mother Name&nbsp;&nbsp; :<span>{Personal.MotherName}</span></p>
        <p className='p6'>Alternate Number&nbsp;&nbsp; :<span>{Personal.AlterNumber}</span></p>
        <br></br>
        <button className='but' onClick={remove}>EDIT</button>
        </div >
      
  
  </div>


    )
  }

