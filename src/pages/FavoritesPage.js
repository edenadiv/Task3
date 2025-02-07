import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import carData from "../data/cars.json";

function FavoritesPage() {
  const favoriteCars = carData.cars.filter((car) => car.favorite);

  return (
    <Box>
      <Navbar />
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>Favorite Cars</Typography>
        <Grid container spacing={3}>
          {favoriteCars.map((car) => (
            <Grid item key={car.id}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default FavoritesPage;
