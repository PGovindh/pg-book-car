import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router";

const CarDetail = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [carObj, setCarObj] = useState({
    price: 50,
    carModel: "Suzuki",
    seating: 5,
    AvailableDate: "13th Frebruary",
    location: "Bangalore",
  });
  const data = [
    {
      image: require(`../../assets/car1.jpg`),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require(`../../assets/car2.jpg`),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require(`../../assets/car3.jpg`),
      caption: "Caption",
      description: "Description Here",
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:7860/car/all`)
  //     .then((response) => setCarData(response.data))
  //     .catch((error) => console.error("Error in Fetching projects:", error));
  // }, []);

  return (
    <div className="row m-3">
      <div className="col-6">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((slide, i) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="slider image"
                />
                <Carousel.Caption>
                  <h3>{carObj.carModel}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="col-6">
        <div className="card p-0">
          <div className="card-body pb-0">
            <div>{carObj.price}</div>
            <h5 className="card-title">{carObj.carModel}</h5>
            <p className="card-text"> {carObj.seating}</p>
          </div>
          <div className="card-body">
            <div>
              <p className="card-text">Available from 13 February</p>
              <h5>$399/hr</h5>
            </div>
            <div>
              Bangalore
              <button
                type="button"
                className="btn btn-primary "
                style={{ float: "right" }}
                onClick={() => navigate("/user/booknow")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
