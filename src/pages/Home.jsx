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
        px: { xs: 0, sm: 3 }
      }}>
        <Box sx={{ 
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
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
            Our Strengths
          </Box>
          <Typography variant="h3" sx={{
            fontWeight: '700',
            color: '#1a237e',
            mb: 2,
            position: 'relative',
            display: 'inline-block',
            fontSize: { xs: '2rem', sm: '2.5rem' },
            lineHeight: { xs: 1.2, sm: 1.3 },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '2px'
            }
          }}>
            Why Choose <span style={{ color: '#1976d2' }}>Our School</span>
          </Typography>
          <Typography variant="body1" sx={{
            maxWidth: '700px',
            margin: { xs: '16px auto 0', md: '20px auto 0' },
            color: '#666',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: { xs: 1.6, sm: 1.7 },
            px: { xs: 1, sm: 2 }
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
                Celebrate diversity with performances, traditional foods and cultural exhibitions from around the world.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Date: December 10, 2025
              </Typography>
            </Paper>
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
