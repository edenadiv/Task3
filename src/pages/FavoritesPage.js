import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import carData from "../data/cars.json";
import Footer from "../components/Footer"

function FavoritesPage() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const savedFavorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    const updatedFavorites = carData.cars.filter((car) => savedFavorites.includes(car.id));
    setFavoriteCars(updatedFavorites);
    setFavoritesCount(savedFavorites.length);
  }, []);

  const toggleFavorite = (id) => {
    const updatedFavorites = favoriteCars.filter((car) => car.id !== id);
    setFavoriteCars(updatedFavorites);

    const savedFavorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    const newFavorites = savedFavorites.filter((favId) => favId !== id);
    sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavoritesCount(newFavorites.length);
  };

  const handleRent = (id) => {
    alert(`Car with ID: ${id} has been rented successfully!`);
  };

  return (
    <Box>
      <Navbar favoritesCount={favoritesCount} />
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Favorite Cars
        </Typography>
        <Grid container spacing={3}>
          {favoriteCars.map((car) => (
            <Grid item key={car.id}>
              <CarCard car={car} toggleFavorite={toggleFavorite} onRent={handleRent} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </Box>
  );
}

export default FavoritesPage;