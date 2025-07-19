import React from 'react';
import { 
  Box,
  Container, 
  Grid, 
  Paper, 
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Divider,
  Stack,
  Typography,
  Button
} from '@mui/material';
import { 
  School, 
  SportsBasketball, 
  MusicNote, 
  Science,
  GroupAdd,
  ArrowForward
} from '@mui/icons-material';
import ImageSlider from '../components/ImageSlider';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Section with Slideshow */}
      <Box sx={{ 
        position: 'relative', 
        mb: 4,
        height: 600,
        borderRadius: 2,
        overflow: 'hidden',
        background: 'transparent'
      }}>
        <ImageSlider />
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 4,
            py: 8,
            zIndex: 1,
            backdropFilter: 'blur(0.5px)',
            background: 'rgba(0, 0, 0, 0.03)'
          }}
        >


        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <School sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Academic Excellence
              </Typography>
              <Typography variant="body1">
                Our dedicated faculty uses innovative teaching methods to ensure every student reaches their full potential.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <SportsBasketball sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Sports & Activities
              </Typography>
              <Typography variant="body1">
                Extensive sports program including volleyball, soccer, netball and more to develop physical fitness and teamwork.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Science sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Modern Facilities
              </Typography>
              <Typography variant="body1">
                State-of-the-art classrooms equipped with the latest technology for optimal learning experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Academic Programs Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Our Academic Programs
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/classroom.jpg"
                  alt="Modern Classroom"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Early Childhood Education
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our early childhood program focuses on developing foundational skills through play-based learning and interactive activities.
                  </Typography>
                  <Chip label="Ages 3-6" color="primary" sx={{ mt: 2 }} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/science-lab.jpg"
                  alt="Science Laboratory"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Primary Education
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our primary program offers a comprehensive curriculum that prepares students for secondary education and beyond.
                  </Typography>
                  <Chip label="Ages 7-12" color="primary" sx={{ mt: 2 }} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Upcoming Events Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Upcoming Events
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Science Fair
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join us for our annual science fair where students showcase their innovative projects and scientific discoveries.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Date: October 15, 2025
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Sports Day
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A day of friendly competition and team spirit featuring various sports activities for all students.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Date: November 5, 2025
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Cultural Festival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Celebrate diversity with performances, traditional foods, and cultural exhibitions from around the world.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Date: December 10, 2025
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ mt: 8, bgcolor: 'background.paper', p: 4 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          What Our Parents Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                "The teachers at TBJS are incredibly dedicated and passionate about education. My child has shown remarkable progress in just one year."
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                - Sarah Johnson, Parent
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                "The facilities are top-notch and the extracurricular activities have helped my child develop important social skills."
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                - Michael Chen, Parent
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                "I'm impressed with the school's commitment to character development alongside academic excellence."
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                - Aisha Patel, Parent
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ 
        bgcolor: 'primary.main',
        color: 'white',
        borderRadius: 2,
        p: 4,
        mt: 8,
        textAlign: 'center'
      }}>
        <Typography variant="h4" gutterBottom>
          Ready to Transform Your Child's Future?
        </Typography>
        <Typography variant="body1" paragraph>
          Join the TBJS community and give your child the best start in life.
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ mt: 2 }}
          href="/admission"
        >
          Apply Now
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
