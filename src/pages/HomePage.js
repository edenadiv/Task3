import React, { useState, useEffect } from "react";
import carData from "../data/cars.json";
import { Container, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";

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
    <Container>
      <Navbar />
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "20px" }}>
        Available Cars
      </Typography>
      <SearchBar search={search} setSearch={setSearch} />
      <Grid container spacing={3} justifyContent="center">
        {filteredCars.map((car) => (
          <Grid item key={car.id}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
