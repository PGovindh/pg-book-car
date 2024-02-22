 import React from 'react'
 import Navbar from './navbar'
 import './style.css'
 import { useNavigate } from "react-router";
 import { Button } from "react-bootstrap";
 const Header = () => {
  const navigate = useNavigate();

const logOut=()=>{
  navigate("/");

}

   return (
    <div className='cr-header'>


        <div className="row">
    <div className="col-6">
      Drive Your Dreams
    </div>
    <div className="col-6">
      <div className="row">
        <div className="col">
          Become a host
        </div>
        <div className="col">
          Company profile
        </div>
        <div className="col">
        <Button variant="primary" onClick={logOut} >LogOut</Button>
                            
        </div>
      </div>
    </div>
  </div> 



<div>


</div>

 
        <Navbar>
 


        </Navbar>
     </div>
   )
 }
 
 export default Header
 