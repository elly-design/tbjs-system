import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar } from '@mui/material';
import { School, Build, Groups } from '@mui/icons-material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        About Us
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our History
            </Typography>
            <Typography paragraph>
              Established in [YEAR], Transformer Blessed Junior School has been dedicated to providing quality education to young minds. Our journey began with a vision to transform lives through education and character development.
            </Typography>
            <Typography paragraph>
              Over the years, we've grown from strength to strength, maintaining our commitment to academic excellence while fostering a nurturing environment for our students.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <School sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Academic Excellence
                  </Typography>
                  <Typography variant="body2">
                    Dedicated faculty and modern teaching methods
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Build sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Modern Facilities
                  </Typography>
                  <Typography variant="body2">
                    State-of-the-art infrastructure
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Groups sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Community Focus
                  </Typography>
                  <Typography variant="body2">
                    Strong parent-teacher relationships
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Our Vision & Mission
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Vision
        </Typography>
        <Typography paragraph>
          To be a leading educational institution that transforms lives through quality education and character development.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Mission
        </Typography>
        <Typography paragraph>
          To provide a nurturing environment where students can develop their full potential academically, socially, and spiritually.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
