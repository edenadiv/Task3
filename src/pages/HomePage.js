import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carData from "../data/cars.json";

function HomePage() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCars(carData.cars);
  }, []);

  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Car Rental</h1>
      <input 
        type="text" 
        placeholder="Search cars..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div>
        {filteredCars.map((car) => (
          <div key={car.id}>
            <h2>{car.name}</h2>
            <img src={car.images[0]} alt={car.name} width="200" />
            <p>Daily Price: ${car.daily_price}</p>
            <Link to={`/car/${car.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;