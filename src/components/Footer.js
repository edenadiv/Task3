import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#3563E9",
        color: "white",
        padding: "20px",
        marginTop: "auto",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Company</Typography>
          <Link href="#" color="inherit" display="block">About Us</Link>
          <Link href="#" color="inherit" display="block">Careers</Link>
          <Link href="#" color="inherit" display="block">Contact</Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Support</Typography>
          <Link href="#" color="inherit" display="block">Help Center</Link>
          <Link href="#" color="inherit" display="block">FAQs</Link>
          <Link href="#" color="inherit" display="block">Terms of Service</Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Follow Us</Typography>
          <Link href="#" color="inherit" display="block">Facebook</Link>
          <Link href="#" color="inherit" display="block">Twitter</Link>
          <Link href="#" color="inherit" display="block">Instagram</Link>
        </Grid>
      </Grid>
      <Box textAlign="center" marginTop="20px">
        <Typography variant="body2">© {new Date().getFullYear()} Eden Task. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;