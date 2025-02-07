import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

function CarCard({ car, toggleFavorite }) {
  return (
    <Card sx={{ width: "300px", borderRadius: "10px", boxShadow: 3, padding: "10px" }}>
      <Link to={`/car/${car.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="150"
          image={car.images[0]}
          alt={car.name}
          sx={{ width: "100%", borderRadius: "10px", boxShadow: 3 }}
        />
      </Link>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">{car.name}</Typography>
          <IconButton onClick={() => toggleFavorite(car.id)}>
            {car.favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary">{car.type}</Typography>
        <Typography variant="h6" color="primary">${car.daily_price}/day</Typography>
        <Box sx={{ marginTop: "10px" }}>
          <Button variant="contained" color="primary" fullWidth disabled>
            Rent Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CarCard;
