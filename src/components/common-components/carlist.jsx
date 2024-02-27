import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";


const CarList = ({ carObj, index }) => {
  const navigate = useNavigate();
  return (
    <div className="card p-0">
      <img
        src={require(`../../assets/car${index}.jpg`)}
        className="card-img-top "
        style={{ height: "200px" }}
        alt="..."
      />
      <div className="card-body pb-0">
        <div>{carObj.price}</div>
        <h5 className="card-title">{carObj.carModel}</h5>
        <p className="card-text"> {carObj.seating}</p>
      </div>
      <hr />
      <div className="card-body">
        <div>
          <p className="card-text">Available from 13 February</p>
          <h5>$399/hr</h5>
        </div>
        <div>
          Bangalore
          <button type="button" className="btn btn-primary " style={{'float': 'right'}} onClick={() => navigate("/user/cardetail")}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
