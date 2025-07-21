import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardActionArea, 
  CardContent, 
  Chip,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Clubs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Button
        component={Link}
        to="/"
        startIcon={<ArrowBack />}
        sx={{ mb: 4, textTransform: 'none' }}
      >
        Back to Home
      </Button>
      
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip 
          label="Extracurricular" 
          color="primary" 
          sx={{ 
            mb: 2, 
            px: 2, 
            py: 1, 
            fontSize: '0.9rem',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
            color: 'white'
          }} 
        />
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            color: '#1a237e',
            fontSize: { xs: '2rem', sm: '2.5rem' },
            lineHeight: 1.2,
            mb: 2
          }}
        >
          Our School Clubs
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#555', 
            maxWidth: '700px',
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}
        >
          Fostering talents, skills, and passions beyond the classroom
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Wildlife Club */}
        <Grid item xs={12} md={6}>
          <Card 
            elevation={3}
            sx={{ 
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
              }
            }}
          >
            <CardActionArea sx={{ height: '100%' }}>
              <Box
                component="img"
                src="/public/wildlife.jpeg"
                alt="Wildlife Club"
                sx={{
                  width: '100%',
                  height: { xs: '300px', sm: '400px', md: '450px' },
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/public/wildlife.jpg';
                }}
              />
              <CardContent sx={{ p: 4 }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700, color: '#1a237e', mb: 3 }}>
                  Wildlife Club
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, fontSize: '1.05rem' }}>
                  Explore the wonders of nature and wildlife conservation with our Wildlife Club. Students learn about local ecosystems, participate in conservation projects, and develop a deep appreciation for biodiversity through hands-on activities and field trips.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Chip 
                    label="Conservation" 
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      bgcolor: 'rgba(76, 175, 80, 0.1)',
                      color: '#2e7d32',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 0.5
                    }} 
                  />
                  <Chip 
                    label="Outdoor Learning" 
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      bgcolor: 'rgba(0, 150, 136, 0.1)',
                      color: '#00796b',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 0.5
                    }} 
                  />
                  <Chip 
                    label="Eco-Awareness" 
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      bgcolor: 'rgba(255, 152, 0, 0.1)',
                      color: '#ef6c00',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 0.5
                    }} 
                  />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Debate Club */}
        <Grid item xs={12} md={6}>
          <Card 
            elevation={3}
            sx={{ 
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
              }
            }}
          >
            <CardActionArea sx={{ height: '100%' }}>
              <Box
                component="img"
                src="/public/debate.jpeg"
                alt="Debate Club"
                sx={{
                  width: '100%',
                  height: { xs: '300px', sm: '400px', md: '450px' },
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/public/debate.jpg';
                }}
              />
              <CardContent sx={{ p: 4 }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700, color: '#1a237e', mb: 3 }}>
                  Debate Club
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, fontSize: '1.05rem' }}>
                  Hone your public speaking and critical thinking skills in our dynamic Debate Club. Students learn to construct persuasive arguments, think on their feet, and engage in respectful discourse on a variety of topics, building confidence and communication skills that last a lifetime.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Chip 
                    label="Public Speaking" 
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      bgcolor: 'rgba(233, 30, 99, 0.1)',
                      color: '#c2185b',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 0.5
                    }} 
                  />
                  <Chip 
                    label="Critical Thinking" 
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      bgcolor: 'rgba(103, 58, 183, 0.1)',
                      color: '#512da8',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 0.5
                    }} 
                  />
                  <Chip 
                    label="Teamwork" 
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      bgcolor: 'rgba(63, 81, 181, 0.1)',
                      color: '#303f9f',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 0.5
                    }} 
                  />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Clubs;
