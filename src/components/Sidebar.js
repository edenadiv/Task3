import React from "react";
import { Box, Typography, Checkbox, Slider, FormGroup, FormControlLabel } from "@mui/material";

function Sidebar({ selectedFilters, setSelectedFilters }) {
  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [value]: !prev[category][value],
      },
    }));
  };

  const handlePriceChange = (_, newValue) => {
    setSelectedFilters((prev) => ({
      ...prev,
      price: newValue,
    }));
  };

  return (
    <Box sx={{ width: "250px", padding: "20px", background: "#f5f5f5", borderRadius: "10px" }}>
      {/* Type Filter */}
      <Typography variant="h6" gutterBottom>Type</Typography>
      <FormGroup>
        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
          <FormControlLabel
            key={type}
            control={<Checkbox checked={selectedFilters.type[type]} onChange={() => handleCheckboxChange("type", type)} />}
            label={`${type}`}
          />
        ))}
      </FormGroup>

      {/* Capacity Filter */}
      <Typography variant="h6" gutterBottom>Capacity</Typography>
      <FormGroup>
        {["2 Person", "4 Person", "6 Person"].map((capacity) => (
          <FormControlLabel
            key={capacity}
            control={<Checkbox checked={selectedFilters.capacity[capacity]} onChange={() => handleCheckboxChange("capacity", capacity)} />}
            label={`${capacity}`}
          />
        ))}
      </FormGroup>

      {/* Price Slider */}
      <Typography variant="h6" gutterBottom>Price (per day)</Typography>
      <Slider
        value={selectedFilters.price}
        onChange={handlePriceChange}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        sx={{ color: "#3563E9" }}
      />
      <Typography>Max: ${selectedFilters.price[1]}</Typography>
    </Box>
  );
}

export default Sidebar;
