import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="cr-header" >
      <nav class="navbar navbar-expand-lg text-white  bg-dark ">
        <div class="container-fluid text-white " style={{paddingRight: 0}}>
          <div className="row w-100">
            <div className="col-6 d-flex ">
            <a class="navbar-brand " href="#" style={{color: 'white'}}  onClick={goHome}>
            Book Car App
          </a>
            </div>
            <div className="col-6 p-0">
            <ul class="navbar-nav ma-auto mb-2 mb-lg-0" style={{'float': 'right'}}>
            <li class="nav-item">
              <button className="btn btn-outline-primary " style={{backgroundColor: 'white', height: '50px', borderRadius: '50px'}}><a class="nav-link active" aria-current="page" href="#" >User name</a></button>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#" style={{color: 'white'}}>Logout</a>
            </li>
          </ul>
            </div>
          </div>

          
        </div>
      </nav>
    </div>
  );
};

export default Header;
