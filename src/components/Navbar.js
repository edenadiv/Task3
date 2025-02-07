import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, TextField, Menu, MenuItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import carData from "../data/cars.json";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const filtered = carData.cars.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(filtered);
      setAnchorEl(document.getElementById("search-bar"));
    } else {
      setFilteredCars([]);
      setAnchorEl(null);
    }
  }, [searchQuery]);

  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: "#3563E9", padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ fontWeight: "bold", fontSize: "24px", textDecoration: "none", color: "inherit" }}
        >
          Eden Task
        </Typography>

        <Box sx={{ position: "relative" }}>
          <TextField
            id="search-bar"
            variant="outlined"
            placeholder="Search for a car"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ background: "white", borderRadius: "5px", width: "300px" }}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && filteredCars.length > 0}
            onClose={() => setAnchorEl(null)}
            sx={{ mt: 1 }}
          >
            {filteredCars.map((car) => (
              <MenuItem key={car.id} component={Link} to={`/car/${car.id}`} onClick={() => setSearchQuery("")}> 
                {car.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box>
          <IconButton component={Link} to="/favorites" sx={{ color: "inherit" }}>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
