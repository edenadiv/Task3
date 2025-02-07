import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

function Navbar({ favoritesCount }) {
  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: "#3563E9" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "24px", textDecoration: "none", color: "inherit" }}
        >
          Eden Task
        </Typography>

        <Box>
          <IconButton component={Link} to="/favorites" sx={{ color: "inherit" }}>
            {favoritesCount > 0 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;