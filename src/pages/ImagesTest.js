import React, { useEffect, useState } from "react";
import carData from "../data/cars.json";

function ImageTest() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carData.cars);
  }, []);

  return (
    <div>
      <h1>Test Images</h1>
      {cars.map((car) => (
        <div key={car.id} style={{ marginBottom: "20px" }}>
          <h2>{car.name}</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${car.name} ${index + 1}`}
                width="200"
                height="150"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200x150?text=Image+Not+Found";
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageTest;
