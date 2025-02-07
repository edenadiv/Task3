import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <Card sx={{ width: 300, margin: 2, borderRadius: "10px", boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={car.images[0]}
        alt={car.name}
      />
      <CardContent>
        <Typography variant="h6">{car.name}</Typography>
        <Typography variant="body2" color="textSecondary">{car.type}</Typography>
        <Typography variant="h6" color="primary">${car.daily_price}/day</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
          <Button variant="contained" color="primary" component={Link} to={`/car/${car.id}`}>
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CarCard;
