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
  Button,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  School, 
  SportsBasketball, 
  MusicNote, 
  Science,
  GroupAdd,
  ArrowForward,
  Star,
  EmojiEvents,
  Groups,
  Person,
  PersonOutline,
  PersonPin
} from '@mui/icons-material';
import ImageSlider from '../components/ImageSlider';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, position: 'relative' }}>
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
            padding: { xs: '10px 24px', sm: '12px 30px' },
            borderRadius: '50px',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            fontWeight: '600',
            boxShadow: '0 6px 20px rgba(25, 118, 210, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 25px rgba(25, 118, 210, 0.4)',
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5, #1976d2)',
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.5s ease',
            },
            '&:hover:before': {
              opacity: 1,
            }
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
          <Box sx={{ overflow: 'hidden' }}>
            <Fade in={true} timeout={1000}>
              <Slide direction="up" in={true} timeout={800} mountOnEnter unmountOnExit>
                <Typography 
                  variant="body1" 
                  sx={{
                    maxWidth: '700px',
                    mx: 'auto',
                    color: '#666',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: { xs: 1.7, sm: 1.8 },
                    px: { xs: 1, sm: 2 },
                    mt: { xs: 3, sm: 3.5 },
                    mb: { xs: 1, sm: 0 },
                    opacity: 0,
                    animation: 'fadeIn 1s ease-out 0.3s forwards',
                    '@keyframes fadeIn': {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' }
                    }
                  }}
                >
                  We are committed to providing an exceptional educational experience that nurtures every child's potential through innovative programs and dedicated educators.
                </Typography>
              </Slide>
            </Fade>
          </Box>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ 
          mt: { xs: 3, md: 5 },
          px: { xs: 2, sm: 3 },
          justifyContent: 'center',
          '& > .MuiGrid-item': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
          }
        }}>
          {/* Academic Excellence */}
          <Grid item xs={12} sm={6} lg={4}>
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
              <Box className="strength-icon-container" sx={{
                width: '90px',
                height: '90px',
                borderRadius: '25px',
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(129, 199, 132, 0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                position: 'relative',
                transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                boxShadow: '0 10px 30px rgba(255, 152, 0, 0.15)',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '30px',
                  border: '2px dashed rgba(255, 82, 82, 0.4)',
                  animation: 'pulse 3s ease-in-out infinite',
                }
              }}>
                <School sx={{
                  fontSize: { xs: 42, sm: 50 },
                  color: '#ff1744',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 4px 8px rgba(255, 23, 68, 0.3))'
                }} />
                <Box sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                  zIndex: 0,
                  opacity: 0.6
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
                  background: 'linear-gradient(90deg, #ff5252, #ff8a80)',
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
          <Grid item xs={12} sm={6} lg={4}>
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
                background: 'linear-gradient(135deg, rgba(255, 82, 82, 0.15), rgba(255, 138, 128, 0.15))',
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
                  border: '2px dashed rgba(255, 82, 82, 0.3)',
                  animation: 'spin 20s linear infinite',
                }
              }}>
                <SportsBasketball sx={{
                  fontSize: { xs: 40, sm: 44 },
                  color: '#ff1744',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 4px 8px rgba(255, 23, 68, 0.3))'
                }} />
                <Box sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                  zIndex: 0,
                  opacity: 0.6
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
                  background: 'linear-gradient(90deg, #ff5252, #ff8a80)',
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
          <Grid item xs={12} sm={6} lg={4}>
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
                width: '90px',
                height: '90px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255, 82, 82, 0.15), rgba(255, 138, 128, 0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                position: 'relative',
                transition: 'all 0.4s ease',
                
              }}>
                <Science sx={{
                  fontSize: 46,
                  color: '#ff1744',
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
                  width: '50px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff1744, #ff5252)',
                  margin: '15px auto 0',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center'
                },
                
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
      <Box sx={{ 
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 6, md: 8 },
            position: 'relative',
            zIndex: 1
          }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Chip 
                label="Champions in Academics" 
                color="primary" 
                sx={{ 
                  mb: 2, 
                  px: 2, 
                  py: 1, 
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(25, 118, 210, 0.2)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }} 
              />
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  fontWeight: 800, 
                  background: 'linear-gradient(90deg, #1a237e, #1976d2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2,
                  '&:after': {
                    content: '""',
                    display: 'block',
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                    margin: '1.5rem auto 0',
                    borderRadius: '2px'
                  }
                }}
              >
                Nurturing Academic Excellence
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#4a5568', 
                  maxWidth: '800px', 
                  mx: 'auto',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  px: { xs: 2, md: 4 },
                  mb: 4
                }}
              >
                At the heart of our mission is academic excellence. We provide a strong curriculum, dedicated teachers and modern learning approaches to ensure that every learner achieves their highest potential. By combining discipline with responsibility, our students are not just learners  they are champions in academics, capable of competing at the highest levels both nationally and globally.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {/* PP1 Kindergarten Program */}
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
                border: '1px solid rgba(25, 118, 210, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(25, 118, 210, 0.15)'
                }
              }}
            >
              <Box sx={{ height: '100%' }}>
                <Box
                  component="img"
                  src="/public/pp1.jpeg"
                  alt="PP1 Kindergarten Program"
                  sx={{
                    width: '100%',
                    height: { xs: '250px', sm: '300px' },
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '8px 8px 0 0'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/public/pp1.jpg';
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a237e' }}>
                    PP1 Kindergarten Program
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: '1.7' }}>
                    Our PP1 program provides a nurturing environment where young learners develop essential skills through play-based learning. Our curriculum focuses on holistic development, including language, numeracy and social-emotional growth.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Box>
                      <Chip 
                        label="Ages 4-5 Years" 
                        color="primary" 
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          background: 'rgba(211, 47, 47, 0.1)',
                          color: '#ff5252',
                          fontWeight: 600
                        }} 
                      />
                      <Chip 
                        label="Academic Excellence" 
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          background: 'rgba(25, 118, 210, 0.1)',
                          color: '#1976d2',
                          fontWeight: 600
                        }} 
                      />
                      <Chip 
                        label="Holistic Development" 
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          background: 'rgba(211, 47, 47, 0.1)',
                          color: '#ef6c00',
                          fontWeight: 600
                        }} 
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* CBC Group Discussions */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%', 
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
                border: '1px solid rgba(25, 118, 210, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(25, 118, 210, 0.15)'
                }
              }}
            >
              <Box sx={{ height: '100%' }}>
                <Box sx={{ 
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingBottom: '66.67%', // 3:2 aspect ratio
                  overflow: 'hidden',
                  borderRadius: '8px 8px 0 0'
                }}>
                  <Box
                    component="img"
                    src="/public/grade 4.jpeg"
                    alt="Students learning"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/public/grade 5.jpeg';
                    }}
                  />
                </Box>
                <Box sx={{ p: 3, position: 'relative' }}>
                  <Box sx={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                    borderRadius: '2px'
                  }} />
                  <Typography variant="h5" component="h3" sx={{ 
                    fontWeight: 800, 
                    color: '#1a237e',
                    mb: 2,
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    '&:after': {
                      content: '""',
                      display: 'block',
                      width: '40px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                      margin: '12px auto 0',
                      borderRadius: '2px'
                    }
                  }}>
                    Academic Brilliance
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#4a5568',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    textAlign: 'center'
                  }}>
                    We provide a dynamic learning atmosphere where every child is encouraged to ask questions, think creatively and explore knowledge beyond the classroom. Our learners gain both academic strength and practical skills to succeed in life.
                  </Typography>
                  <Box sx={{ 
                    mt: 3,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 1
                  }}>
                    <Box>
                      {['Science', 'Mathematics', 'Languages', 'Arts'].map((subject) => (
                        <Chip 
                          key={subject}
                          label={subject} 
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            background: 'rgba(255, 255, 255, 0.8)',
                            color: '#1a237e',
                            fontWeight: 600,
                            px: 1.5,
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            },
                            transition: 'all 0.3s ease'
                          }} 
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Spacer */}
      <Box sx={{ 
        height: { xs: '60px', md: '100px' },
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '3px',
          background: 'linear-gradient(90deg, rgba(25, 118, 210, 0.2) 0%, rgba(25, 118, 210, 0.8) 50%, rgba(25, 118, 210, 0.2) 100%)',
          borderRadius: '3px'
        }
      }} />

      {/* Statistics Section */}
      <Box sx={{ 
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(25, 118, 210, 0.1) 0%, rgba(25, 118, 210, 0) 70%)',
          top: '-100px',
          right: '-100px',
          zIndex: 0,
          animation: 'float 8s ease-in-out infinite'
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 181, 246, 0.1) 0%, rgba(100, 181, 246, 0) 70%)',
          bottom: '-150px',
          left: '-150px',
          zIndex: 0,
          animation: 'float 10s ease-in-out infinite 1s'
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' }
        }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: 'center',
            mb: { xs: 3, md: 5 },
            position: 'relative',
            zIndex: 1
          }}>
            <Typography variant="h4" component="h2" sx={{
              fontWeight: 700,
              color: '#1a237e',
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '3px'
              }
            }}>
              Our Impact in Numbers
            </Typography>
            <Typography variant="body1" sx={{
              color: '#555',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7
            }}>
              Years of excellence in education, nurturing minds and shaping futures
            </Typography>
          </Box>
          
          <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>

            {/* Staff Stat */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Paper elevation={0} sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(25, 118, 210, 0.1)',
                  transition: 'all 0.5s ease',
                  transform: 'translateX(0)'
                }}>
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 80,
                        damping: 12,
                        duration: 0.6
                      }
                    }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '0 8px 20px rgba(25, 118, 210, 0.2)'
                    }}
                  >
                    <Groups sx={{ fontSize: 40, color: 'white' }} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Typography variant="h3" sx={{
                      fontWeight: 700,
                      color: '#1a237e',
                      textAlign: 'center',
                      mb: 1,
                      fontSize: { xs: '2.2rem', md: '2.8rem' },
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent'
                    }}>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <CountUp 
                          end={15} 
                          duration={2} 
                          suffix="+"
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </motion.span>
                    </Typography>
                  </motion.div>
                  <Typography 
                    variant="h6" 
                    sx={{
                      textAlign: 'center',
                      color: '#444',
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.2rem' }
                    }}
                  >
                    Dedicated Staff
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Students Stat */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper elevation={0} sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(25, 118, 210, 0.1)',
                  transition: 'all 0.5s ease',
                  transform: 'translateX(0)'
                }}>
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 80,
                        damping: 12,
                        duration: 0.6
                      }
                    }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '0 8px 20px rgba(25, 118, 210, 0.2)'
                    }}
                  >
                    <School sx={{ fontSize: 40, color: 'white' }} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Typography variant="h3" sx={{
                      fontWeight: 700,
                      color: '#1a237e',
                      textAlign: 'center',
                      mb: 1,
                      fontSize: { xs: '2.2rem', md: '2.8rem' },
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent'
                    }}>
                          <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <CountUp 
                          end={600} 
                          duration={2} 
                          suffix="+"
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </motion.span>
                    </Typography>
                  </motion.div>
                  <Typography 
                    variant="h6" 
                    sx={{
                      textAlign: 'center',
                      color: '#444',
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.2rem' }
                    }}
                  >
                    Dedicated Students
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Alumni Stat */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper elevation={0} sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(25, 118, 210, 0.1)',
                  transition: 'all 0.5s ease',
                  transform: 'translateX(0)'
                }}>
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 80,
                        damping: 12,
                        duration: 0.6
                      }
                    }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '0 8px 20px rgba(25, 118, 210, 0.2)'
                    }}
                  >
                    <EmojiEvents sx={{ fontSize: 40, color: 'white' }} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Typography variant="h3" sx={{
                      fontWeight: 700,
                      color: '#1a237e',
                      textAlign: 'center',
                      mb: 1,
                      fontSize: { xs: '2.2rem', md: '2.8rem' },
                      background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent'
                    }}>
                      <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      <CountUp 
                        end={200} 
                        duration={2} 
                        suffix="+"
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </motion.span>
                  </Typography>
                  </motion.div>
                  <Typography variant="h6" sx={{
                    textAlign: 'center',
                    color: '#444',
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', md: '1.2rem' }
                  }}>
                    Successful Alumni
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
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
            overflow: 'hidden'
          }
        }}>
          {/* Testimonial 1 */}
          <Grid item>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ 
                x: 0, 
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  duration: 0.5,
                  delay: 0.1
                }
              }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <Paper 
                elevation={3} 
                component={motion.div}
                whileHover={{
                  y: -5,
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }}
                sx={{
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  p: { xs: 2, md: 4 },
                  mx: { xs: 2, sm: 0 },
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-5px)' },
                    boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.1)', md: '0 15px 50px rgba(0,0,0,0.1)' }
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
                  color: '#ff5252',
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
          </motion.div>
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
                  color: '#ff5252',
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
                The communication from the school is excellent and I appreciate how they involve parents in the learning journey. The teachers truly care about each child's success.
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
                  color: '#ff5252',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  SM
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: '600',
                    color: '#1a237e',
                    marginBottom: '4px'
                  }}>Sarah Mwazighe</Typography>
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
      <Box 
      sx={{
        position: 'relative',
        color: 'white',
        py: { xs: 10, md: 12 },
        px: 4,
        borderRadius: 4,
        textAlign: 'center',
        overflow: 'hidden',
        mb: 8,
        backgroundImage: 'linear-gradient(135deg, rgba(25, 118, 210, 0.9) 0%, rgba(13, 71, 161, 0.95) 100%)',
        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/classroom2.jpg") center/cover no-repeat',
          zIndex: -1,
          opacity: 0.15
        }
      }}>
        <Container maxWidth="md">
          <Box 
            position="relative" 
            zIndex={1}
            sx={{
              px: { xs: 2, sm: 4 },
              py: { xs: 4, md: 6 },
              backdropFilter: 'blur(2px)',
              borderRadius: 3
            }}
          >
            <Typography 
              variant="h3" 
              component="h2"
              gutterBottom 
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
                mb: 3,
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Ready to Transform Your Child's Future?
            </Typography>
            
            <Typography 
              variant="h6" 
              component="p"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
                opacity: 0.95
              }}
            >
              Join the TBJS community and give your child the best start in life.
              <Box 
                component="span" 
                sx={{ 
                  display: 'block',
                  mt: 1,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.9)'
                }}
              >
                Enrollment ongoing. Reserve your spot today.
              </Box>
            </Typography>
            
            <Box sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              mt: 2
            }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(25, 118, 210, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
                href="/admission"
              >
                Apply Now
              </Button>
              
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<School />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  borderRadius: 2,
                  borderWidth: '2px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderWidth: '2px'
                  }
                }}
                href="/about"
              >
                Learn More
              </Button>
            </Box>
            
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 3, alignItems: 'center' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} sx={{ color: '#ffd700', fontSize: '1.5rem' }} />
              ))}
              <Typography variant="body2" sx={{ ml: 1, opacity: 0.9 }}>
                Rated 5/5 by 100+ parents
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      </Container>
    </Box>
  );
};

export default Home;
