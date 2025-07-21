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
      <Box sx={{ 
        mt: { xs: 6, md: 10 },
        mb: { xs: 4, md: 8 },
        position: 'relative',
        px: { xs: 3, sm: 4 },
        '& .MuiBox-root': {
          '&:first-of-type': {
            mb: { xs: 1, sm: 1.5 }
          }
        }
      }}>
        <Box sx={{ 
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          px: { xs: 0, sm: 0 },
          '& > * + *': {
            mt: { xs: 2.5, sm: 3 }
          }
        }}>
          <Box sx={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
            color: 'white',
            padding: { xs: '8px 22px', sm: '10px 28px' },
            borderRadius: '30px',
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.2)',
            transform: 'translateZ(0)'
          }}>
            Our Strengths
          </Box>
          <Box sx={{ 
            position: 'relative',
            pt: { xs: 1, sm: 0 }
          }}>
            <Typography variant="h3" sx={{
              fontWeight: '700',
              color: '#1a237e',
              display: 'inline-block',
              fontSize: { xs: '1.8rem', sm: '2.5rem' },
              lineHeight: { xs: 1.25, sm: 1.3 },
              letterSpacing: '0.3px',
              px: { xs: 0, sm: 0 },
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '50px',
                height: '4px',
                background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                bottom: { xs: '-12px', sm: '-10px' },
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '2px'
              }
            }}>
              Why Choose <span style={{ color: '#1976d2', marginLeft: '0.2em' }}>Our School</span>
            </Typography>
          </Box>
          <Typography variant="body1" sx={{
            maxWidth: '700px',
            mx: 'auto',
            color: '#666',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: { xs: 1.7, sm: 1.8 },
            px: { xs: 1, sm: 2 },
            mt: { xs: 3, sm: 3.5 },
            mb: { xs: 1, sm: 0 }
          }}>
            We are committed to providing an exceptional educational experience that nurtures every child's potential through innovative programs and dedicated educators.
          </Typography>
        </Box>

        <Grid container spacing={0} sx={{ 
          mt: 2,
          '& > .MuiGrid-item': {
            px: { xs: 2, sm: 3 },
            mb: { xs: 2, md: 0 }
          }
        }}>
          {/* Academic Excellence */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{
              p: 4,
              height: '100%',
              borderRadius: '16px',
              background: 'white',
              border: '1px solid rgba(25, 118, 210, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 50px rgba(25, 118, 210, 0.15)',
                '& $iconContainer': {
                  transform: 'scale(1.1)'
                }
              }
            }}>
              <Box sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(100, 181, 246, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px dashed rgba(25, 118, 210, 0.2)',
                  animation: 'spin 20s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  }
                }
              }}>
                <School sx={{
                  fontSize: 40,
                  color: '#1976d2',
                  position: 'relative',
                  zIndex: 1
                }} />
              </Box>
              <Typography variant="h5" sx={{
                fontWeight: '700',
                color: '#1a237e',
                mb: 2,
                textAlign: 'center',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '40px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                  margin: '12px auto 0',
                  borderRadius: '3px'
                }
              }}>
                Academic Excellence
              </Typography>
              <Typography variant="body1" sx={{
                color: '#555',
                textAlign: 'center',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                Our dedicated faculty uses innovative teaching methods to ensure every student reaches their full potential through personalized learning experiences.
              </Typography>
            </Paper>
          </Grid>

          {/* Sports & Activities */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{
              p: 4,
              height: '100%',
              borderRadius: '16px',
              background: 'white',
              border: '1px solid rgba(25, 118, 210, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 50px rgba(25, 118, 210, 0.15)',
                '& $iconContainer': {
                  transform: 'scale(1.1)'
                }
              }
            }}>
              <Box sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 193, 7, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px dashed rgba(255, 152, 0, 0.2)',
                  animation: 'spin 20s linear infinite',
                }
              }}>
                <SportsBasketball sx={{
                  fontSize: 40,
                  color: '#ff9800',
                  position: 'relative',
                  zIndex: 1
                }} />
              </Box>
              <Typography variant="h5" sx={{
                fontWeight: '700',
                color: '#1a237e',
                mb: 2,
                textAlign: 'center',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '40px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #ff9800, #ffc107)',
                  margin: '12px auto 0',
                  borderRadius: '3px'
                }
              }}>
                Sports & Activities
              </Typography>
              <Typography variant="body1" sx={{
                color: '#555',
                textAlign: 'center',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                Extensive sports program including volleyball, soccer, netball  and more to develop physical fitness, teamwork, and leadership skills in a fun environment.
              </Typography>
            </Paper>
          </Grid>

          {/* Modern Facilities */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{
              p: 4,
              height: '100%',
              borderRadius: '16px',
              background: 'white',
              border: '1px solid rgba(25, 118, 210, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 50px rgba(25, 118, 210, 0.15)',
                '& $iconContainer': {
                  transform: 'scale(1.1)'
                }
              }
            }}>
              <Box sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px dashed rgba(76, 175, 80, 0.2)',
                  animation: 'spin 20s linear infinite',
                }
              }}>
                <Science sx={{
                  fontSize: 40,
                  color: '#4caf50',
                  position: 'relative',
                  zIndex: 1
                }} />
              </Box>
              <Typography variant="h5" sx={{
                fontWeight: '700',
                color: '#1a237e',
                mb: 2,
                textAlign: 'center',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '40px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #4caf50, #8bc34a)',
                  margin: '12px auto 0',
                  borderRadius: '3px'
                }
              }}>
                Modern Facilities
              </Typography>
              <Typography variant="body1" sx={{
                color: '#555',
                textAlign: 'center',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                Modern, well-equipped classrooms with the latest technology to support effective teaching and learning in today's world.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Academic Programs Section */}
      <Box sx={{ mt: 10, mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            label="Learning Excellence" 
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
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: '#1a237e',
              fontSize: { xs: '1.8rem', sm: '2.125rem' },
              lineHeight: 1.2,
              mb: 2
            }}
          >
            Our Academic Programs
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
            Nurturing young minds through innovative and engaging learning experiences
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* PP1 Kindergarten Program */}
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
                  src="/public/pp1.jpeg"
                  alt="PP1 Kindergarten Program"
                  sx={{
                    width: '100%',
                    height: { xs: '250px', sm: '300px' },
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/public/pp1.jpg';
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a237e' }}>
                    PP1 Kindergarten Program
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    Our PP1 program provides a nurturing environment where young learners develop essential skills through play-based learning. Our curriculum focuses on holistic development, including language, numeracy, and social-emotional growth.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Chip 
                      label="Ages 4-5 Years" 
                      color="primary" 
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        bgcolor: 'rgba(25, 118, 210, 0.1)',
                        color: '#1976d2',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label="Play-Based Learning" 
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        bgcolor: 'rgba(0, 150, 136, 0.1)',
                        color: '#00897b',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label="Holistic Development" 
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        bgcolor: 'rgba(255, 152, 0, 0.1)',
                        color: '#ef6c00',
                        fontWeight: 600
                      }} 
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* CBC Group Discussions */}
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
                  src="/public/group discussion.jpeg"
                  alt="CBC Group Discussions"
                  sx={{
                    width: '100%',
                    height: { xs: '250px', sm: '300px' },
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/public/group discussion.jpg';
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a237e' }}>
                    CBC Group Discussions
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    Our CBC-aligned group discussions foster critical thinking, communication, and collaboration. Students engage in meaningful dialogues, develop problem-solving skills, and learn to articulate their thoughts effectively in a supportive environment.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Chip 
                      label="Critical Thinking" 
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        bgcolor: 'rgba(233, 30, 99, 0.1)',
                        color: '#c2185b',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label="Teamwork" 
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        bgcolor: 'rgba(103, 58, 183, 0.1)',
                        color: '#512da8',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label="Communication" 
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        bgcolor: 'rgba(0, 150, 136, 0.1)',
                        color: '#00796b',
                        fontWeight: 600
                      }} 
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Upcoming Events Section */}
      <Box sx={{ mt: 10, mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            label="Mark Your Calendars" 
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
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: '#1a237e',
              fontSize: { xs: '1.8rem', sm: '2.125rem' },
              lineHeight: 1.2,
              mb: 2
            }}
          >
            Graduation Ceremony 2025
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
            Celebrating the Achievements of Our PP2 Graduates
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                borderRadius: 2,
                overflow: 'hidden',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box
                component="img"
                src="/public/graduation.jpeg"
                alt="PP2 Graduation Ceremony"
                sx={{
                  width: '100%',
                  height: { xs: '300px', sm: '400px' },
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/public/graduation.jpg';
                }}
              />
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: { xs: 3, md: 4 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#1976d2',
                  mb: 3,
                  fontSize: { xs: '1.4rem', sm: '1.6rem' }
                }}
              >
                Join Us in Celebrating Excellence
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    mr: 2
                  }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    <strong>Date:</strong> December 15, 2025
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    mr: 2
                  }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    <strong>Time:</strong> 10:00 AM - 1:00 PM
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    mr: 2
                  }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    <strong>Venue:</strong> School Grounds 
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ 
                color: '#555', 
                mb: 4,
                lineHeight: 1.7,
                fontSize: '1.05rem'
              }}>
                We are thrilled to invite you to our annual PP2 Graduation Ceremony, where we'll celebrate the incredible journey of our young graduates. This special day marks their transition to the next exciting chapter of their educational adventure.
              </Typography>
              
              <Box sx={{ mt: 'auto' }}>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    bgcolor: '#1976d2',
                    '&:hover': {
                      bgcolor: '#1565c0'
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                >
                  RSVP Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ 
        margin: { xs: '60px 0', md: '80px 0' },
        px: { xs: 0, sm: 3 }
      }}>
        <Box sx={{ 
          textAlign: 'center',
          marginBottom: { xs: '40px', md: '50px' },
          px: { xs: 1, sm: 0 }
        }}>
          <Box sx={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
            color: 'white',
            padding: '8px 25px',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '15px',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.2)'
          }}>
            Testimonials
          </Box>
          <Typography variant="h4" sx={{
            fontWeight: '700',
            color: '#1a237e',
            margin: '15px 0',
            lineHeight: { xs: 1.2, sm: 1.3 },
            fontSize: { xs: '1.75rem', sm: '2.125rem' }
          }}>
            What Our <span style={{ color: '#1976d2' }}>Parents Say</span>
          </Typography>
          <Typography variant="body1" sx={{
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: { xs: 1.6, sm: 1.7 },
            fontSize: { xs: '1rem', sm: '1.1rem' },
            px: { xs: 1, sm: 2 }
          }}>
            Hear from the families who have experienced the Transformer Blessed Junior School difference.
          </Typography>
        </Box>

        <Grid container spacing={0} sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: '16px', md: '30px' },
          marginTop: { xs: '30px', md: '40px' },
          '& > .MuiGrid-item': {
            px: { xs: 2, sm: 3 },
            mb: { xs: 2, md: 0 },
            '& > .MuiPaper-root': {
              height: '100%',
              p: { xs: 2, md: 4 },
              mx: { xs: 2, sm: 0 },
              '&:hover': {
                transform: { xs: 'none', md: 'translateY(-5px)' },
                boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.1)', md: '0 15px 50px rgba(0,0,0,0.1)' }
              }
            }
          }
        }}>
          {/* Testimonial 1 */}
          <Grid item xs={12} md>
            <Paper elevation={3} sx={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              position: 'relative',
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                fontSize: '3rem',
                color: 'rgba(25, 118, 210, 0.1)',
                lineHeight: '1',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>"</Box>
              <Typography variant="body1" sx={{
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '25px',
                position: 'relative',
                zIndex: '1'
              }}>
                The transformation I've seen in my child since joining Transformer Blessed Junior School has been remarkable. The teachers are dedicated, and the learning environment is nurturing and stimulating.
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                borderTop: '1px solid #eee',
                paddingTop: '20px'
              }}>
                <Box sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#f0f7ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  AM
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: '600',
                    color: '#1a237e',
                    marginBottom: '4px'
                  }}>Alice Mwangi</Typography>
                  <Typography variant="body2" sx={{
                    color: '#777',
                    fontSize: '0.85rem'
                  }}>Parent of Grade 4 Student</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Testimonial 2 */}
          <Grid item xs={12} md>
            <Paper elevation={3} sx={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              position: 'relative',
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                fontSize: '3rem',
                color: 'rgba(25, 118, 210, 0.1)',
                lineHeight: '1',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>"</Box>
              <Typography variant="body1" sx={{
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '25px',
                position: 'relative',
                zIndex: '1'
              }}>
                The school's focus on both academic excellence and character development is impressive. My child has grown not just academically but also in confidence and social skills.
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                borderTop: '1px solid #eee',
                paddingTop: '20px'
              }}>
                <Box sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f0f7ff, #d0e5ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  JO
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: '600',
                    color: '#1a237e',
                    marginBottom: '4px'
                  }}>James Omondi</Typography>
                  <Typography variant="body2" sx={{
                    color: '#777',
                    fontSize: '0.85rem'
                  }}>Parent of Grade 2 Student</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Testimonial 3 */}
          <Grid item xs={12} md>
            <Paper elevation={3} sx={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              position: 'relative',
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                fontSize: '3rem',
                color: 'rgba(25, 118, 210, 0.1)',
                lineHeight: '1',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>"</Box>
              <Typography variant="body1" sx={{
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '25px',
                position: 'relative',
                zIndex: '1'
              }}>
                The communication from the school is excellent, and I appreciate how they involve parents in the learning journey. The teachers truly care about each child's success.
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                borderTop: '1px solid #eee',
                paddingTop: '20px'
              }}>
                <Box sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f0f7ff, #e0f0ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  SA
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: '600',
                    color: '#1a237e',
                    marginBottom: '4px'
                  }}>Sarah Atieno</Typography>
                  <Typography variant="body2" sx={{
                    color: '#777',
                    fontSize: '0.85rem'
                  }}>Parent of Kindergarten Student</Typography>
                </Box>
              </Box>
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
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
          zIndex: 0,
          opacity: 0.9
        }
      }}>
        <Box position="relative" zIndex={1}>
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
      </Box>
    </Container>
  );
};

export default Home;
