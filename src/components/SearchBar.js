import React from "react";
import { TextField, Box } from "@mui/material";

function SearchBar({ search, setSearch }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
      <TextField
        label="Search Cars"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ width: "300px" }}
      />
    </Box>
  );
}

export default SearchBar;
