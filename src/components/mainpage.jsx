 import React from 'react'
 import Header from './header'
 import CarDetails from './cardetails'

 import { useState,useEffect } from "react";
 import axios from "axios";

 const MainPage = () => {
const  [carData,setCarData]=useState([])
useEffect(() => {
  axios.get(`http://localhost:7860/car/all`)
    .then((response) => setCarData(response.data))
    .catch((error) => console.error("Error in Fetching projects:", error));
}, []);

   return (
     <div>  
       <Header>
 
       </Header>
       <div className='row row-cols-3 '>
  

       {
    carData.map((item,index)=><CarDetails carObj={item}>
    
    </CarDetails>
    )
}
 
 
</div>

     </div>
   )
 }
 
 export default MainPage