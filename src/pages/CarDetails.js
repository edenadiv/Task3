import React from "react";
import { useParams, Link } from "react-router-dom";
import carData from "../data/cars.json";

function CarDetails() {
  const { id } = useParams();
  const car = carData.cars.find(car => car.id === parseInt(id));

  if (!car) {
    return <h2>Car not found</h2>;
  }

  return (
    <div>
      <h1>{car.name}</h1>
      <div>
        {car.images.map((image, index) => (
          <img key={index} src={image} alt={`${car.name} ${index + 1}`} width="200" />
        ))}
      </div>
      <p>Type: {car.type}</p>
      <p>Capacity: {car.capacity} people</p>
      <p>Daily Price: ${car.daily_price}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default CarDetails;