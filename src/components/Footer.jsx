import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Transformer Blessed Junior School
            </Typography>
            <Typography variant="body2">
              Transforming lives through quality education and character development.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/admission" color="inherit" underline="hover">
                Admission
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Link href="#" color="inherit">
                <Facebook sx={{ fontSize: 24 }} />
              </Link>
              <Link href="#" color="inherit">
                <Twitter sx={{ fontSize: 24 }} />
              </Link>
              <Link href="#" color="inherit">
                <Instagram sx={{ fontSize: 24 }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 4, pt: 2 }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Transformer Blessed Junior School. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
