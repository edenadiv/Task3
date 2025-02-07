import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CarCard from "../components/CarCard";
import carData from "../data/cars.json";
import Footer from "../components/Footer"

function HomePage() {
  const [cars, setCars] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(0);

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
    price: [45, 95],
  });

  useEffect(() => {
    const savedFavorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    const updatedCars = carData.cars.map((car) => ({
      ...car,
      favorite: savedFavorites.includes(car.id),
    }));
    setCars(updatedCars);
    setFavoritesCount(savedFavorites.length);
  }, []);

  const filteredCars = cars.filter((car) => {
    const selectedTypes = Object.entries(selectedFilters.type)
      .filter(([, checked]) => checked)
      .map(([type]) => type);
    if (selectedTypes.length > 0 && !selectedTypes.includes(car.type)) return false;

    const selectedCapacities = Object.entries(selectedFilters.capacity)
      .filter(([, checked]) => checked)
      .map(([capacity]) => capacity);
    if (selectedCapacities.length > 0 && !selectedCapacities.includes(`${car.capacity} Person`)) return false;

    if (car.daily_price < selectedFilters.price[0] || car.daily_price > selectedFilters.price[1]) return false;

    return true;
  });

  const toggleFavorite = (id) => {
    const updatedCars = cars.map((car) =>
      car.id === id ? { ...car, favorite: !car.favorite } : car
    );
    setCars(updatedCars);

    const favoriteIds = updatedCars.filter((car) => car.favorite).map((car) => car.id);
    sessionStorage.setItem("favorites", JSON.stringify(favoriteIds));
    setFavoritesCount(favoriteIds.length);
  };

  const handleRent = (id) => {
    alert(`Car with ID: ${id} has been rented successfully!`);
  };

  return (
    <Box>
      <Navbar favoritesCount={favoritesCount} />
      <Box sx={{ display: "flex", padding: "20px" }}>
        <Sidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        <Box sx={{ flex: 1, paddingLeft: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Cars Catalogue
          </Typography>
          <Grid container spacing={3}>
            {filteredCars.map((car) => (
              <Grid item key={car.id}>
                <CarCard car={car} toggleFavorite={toggleFavorite} onRent={handleRent} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;