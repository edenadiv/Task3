import React from "react";
import { Box, Typography, Grid } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ padding: "20px", background: "#f5f5f5", marginTop: "20px" }}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">ShenCarCar</Typography>
          <Typography variant="body2" color="textSecondary">Our vision is to provide convenience...</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">About</Typography>
          <Typography variant="body2">How it works</Typography>
          <Typography variant="body2">Featured</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Community</Typography>
          <Typography variant="body2">Events</Typography>
          <Typography variant="body2">Blog</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
