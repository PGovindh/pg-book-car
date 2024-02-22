import React from 'react'


const CarDetails = ({carObj}) => {
  console.log("ravan",carObj)
  return (
     
<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <div>{carObj.price}</div>
    <h5 className="card-title">{carObj.carModel}</h5>
    <p className="card-text"> {carObj.seating}</p>
     

    
  </div>
  <div className="card-body">
    <div>
      <p className="card-text">Available from 13 February</p>
      <h5>$399/hr</h5>
    </div>
    <div className="ml-auto">
      Bangalore
    </div>

  </div>
 


    </div>
  )
}

export default  CarDetails