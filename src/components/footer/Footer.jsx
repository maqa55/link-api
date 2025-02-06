import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {

  return (
    <div style={{ width: '100%',padding:'10px 0 0 0' }}>
      <footer style={{ backgroundColor: 'black', color: 'white'}}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" align="left" style={{ color: 'white' }}>
                My Website
              </Typography>
              <Typography variant="body2" align="left" style={{ color: 'white' }}>
                © {new Date().getFullYear()} My Website. All rights reserved.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} container justifyContent="flex-end">
              <Link href="#" color="inherit" style={{ marginLeft: '20px', color: 'white' }}>
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" style={{ marginLeft: '20px', color: 'white' }}>
                Terms of Service
              </Link>
              <Link href="#" color="inherit" style={{ marginLeft: '20px', color: 'white' }}>
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
