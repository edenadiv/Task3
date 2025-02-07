import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: "#3563E9" }}>
      <Toolbar>
        {/* Logo and Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "24px" }}
        >
          ShenCarCar
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontWeight: "600" }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/favorites" sx={{ fontWeight: "600" }}>
            Favorites
          </Button>

          {/* Favorites Icon */}
          <IconButton component={Link} to="/favorites" sx={{ color: "inherit" }}>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
