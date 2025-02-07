import React, { useState } from "react";
import carData from "../data/cars.json";

function FavoritesPage() {
  const [favoriteCars, setFavoriteCars] = useState(
    carData.cars.filter(car => car.favorite)
  );

  return (
    <div>
      <h1>Favorite Cars</h1>
      {favoriteCars.length === 0 ? (
        <p>No favorite cars selected.</p>
      ) : (
        favoriteCars.map((car) => (
          <div key={car.id}>
            <h2>{car.name}</h2>
            <img src={car.images[0]} alt={car.name} width="200" />
            <p>Daily Price: ${car.daily_price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoritesPage;