import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CarCard from "../components/CarCard";
import carData from "../data/cars.json";

function HomePage() {
  const [cars, setCars] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    type: {
      Sport: false,
      SUV: false,
      MPV: false,
      Sedan: false,
      Coupe: false,
      Hatchback: false,
    },
    capacity: {
      "2 Person": false,
      "4 Person": false,
      "6 Person": false,
    },
    price: [0, 100],
  });

  useEffect(() => {
    setCars(carData.cars);
  }, []);

  const filteredCars = cars.filter((car) => {
    // Filter by type
    const selectedTypes = Object.entries(selectedFilters.type).filter(([, checked]) => checked).map(([type]) => type);
    if (selectedTypes.length > 0 && !selectedTypes.includes(car.type)) return false;

    // Filter by capacity
    const selectedCapacities = Object.entries(selectedFilters.capacity).filter(([, checked]) => checked).map(([capacity]) => capacity);
    if (selectedCapacities.length > 0 && !selectedCapacities.includes(`${car.capacity} Person`)) return false;

    // Filter by price
    if (car.daily_price < selectedFilters.price[0] || car.daily_price > selectedFilters.price[1]) return false;

    return true;
  });

  const toggleFavorite = (id) => {
    setCars((prev) =>
      prev.map((car) => (car.id === id ? { ...car, favorite: !car.favorite } : car))
    );
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ display: "flex", padding: "20px" }}>
        <Sidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        <Box sx={{ flex: 1, paddingLeft: "20px" }}>
          <Typography variant="h4" gutterBottom>Cars Catalogue</Typography>
          <Grid container spacing={3}>
            {filteredCars.map((car) => (
              <Grid item key={car.id}>
                <CarCard car={car} toggleFavorite={toggleFavorite} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
