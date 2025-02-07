import React from "react";
import { useParams, Link } from "react-router-dom";
import carData from "../data/cars.json";
import { Container, Typography, Button, Grid, CardMedia } from "@mui/material";
import Footer from "../components/Footer"

function CarDetails() {
  const { id } = useParams();
  const car = carData.cars.find(car => car.id === parseInt(id));

  if (!car) return <Typography variant="h5">Car not found</Typography>;

  return (
    <Container>
      <Typography variant="h4">{car.name}</Typography>
      <Grid container spacing={2}>
        {car.images.map((image, index) => (
          <Grid item key={index}>
            <CardMedia component="img" image={image} alt={car.name} sx={{ width: 300 }} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6">Type: {car.type}</Typography>
      <Typography variant="h6">Capacity: {car.capacity} people</Typography>
      <Typography variant="h6">Price: ${car.daily_price} / day</Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Back to Home
      </Button>
      <Footer/>
    </Container>
  );
}

export default CarDetails;
