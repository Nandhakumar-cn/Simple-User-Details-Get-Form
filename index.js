import React from "react";
import ReactDOM  from "react-dom";
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import App from "./App";
import Education from "./education";
import Result from "./result";

import './index.css'
import Home from "./home";
import Patherror from "./patherr";




  function Routerapp() {
  return (
    <Router>
    <div className="rou1">
       <nav>
       <ul className="rou2">
     
          <li><Link to="/"></Link>Home</li>
         
          <li><Link to="/education">Education</Link></li>
  
          <li><Link to="/home">Personal Details</Link></li>
          <li><Link to="/result">Result</Link></li>
       
          </ul>
       
          </nav>     

      <Routes >
     
        <Route path="/" element={<App/> }/>
        <Route path="/education" element={<Education/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/result" element={<Result/>} />
        <Route path="/*" element={<Patherror/>}/>
        
      </Routes>
    
    </div>
    </Router>
  )
}
ReactDOM.render(<Routerapp/>,document.getElementById('root'));
