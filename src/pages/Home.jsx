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
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  School, 
  SportsBasketball, 
  MusicNote, 
  Science,
  GroupAdd,
  ArrowForward,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle,
  Star,
  EmojiEvents,
  Groups,
  Person,
  PersonOutline,
  PersonPin
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  // Carousel states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: right, 1: left
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Academic programs carousel state
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [isProgramHovered, setIsProgramHovered] = useState(false);
  
  // Academic programs data
  const academicPrograms = [
    {
      id: 1,
      title: 'PP1 Kindergarten Program',
      description: 'Our PP1 program provides a nurturing environment where young learners develop essential skills through play-based learning. Our curriculum focuses on holistic development, including language, numeracy and social-emotional growth.',
      image: '/public/pp1.jpeg',
      fallbackImage: '/public/pp1.jpg',
      tags: ['Ages 4-5 Years', 'Academic Excellence', 'Holistic Development']
    },
    {
      id: 2,
      title: 'Academic Brilliance',
      description: 'We provide a dynamic learning atmosphere where every child is encouraged to ask questions, think creatively and explore knowledge beyond the classroom. Our learners gain both academic strength and practical skills to succeed in life.',
      image: '/public/grade 4.jpeg',
      fallbackImage: '/public/grade 4.jpeg',
      tags: ['Science', 'Mathematics', 'Languages', 'Arts', 'French']
    }
  ];
  
  // Auto-advance academic programs carousel
  useEffect(() => {
    if (!isProgramHovered) {
      const timer = setInterval(() => {
        handleNextProgram();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isProgramHovered]);
  
  const handleNextProgram = () => {
    setCurrentProgramIndex((prevIndex) => 
      prevIndex === academicPrograms.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrevProgram = () => {
    setCurrentProgramIndex((prevIndex) => 
      prevIndex === 0 ? academicPrograms.length - 1 : prevIndex - 1
    );
  };
  
  const goToProgram = (index) => {
    setCurrentProgramIndex(index);
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Alice Mwangi',
      role: 'Parent of Grade 3 Student',
      quote: "The transformation I've seen in my child since joining Transformer Blessed Junior School has been remarkable. The teachers are dedicated, and the learning environment is nurturing and stimulating.",
      rating: 5,
      gradient: 'linear-gradient(90deg, #1976d2, #00bcd4)',
      avatar: '/path-to-avatar1.jpg',
      initials: 'AM'
    },
    {
      id: 2,
      name: 'Abubakar Rashid',
      role: 'Parent of PP2 Student',
      quote: "The school's focus on both academic excellence and character development is impressive. My child has grown not just academically but also in confidence and social skills.",
      rating: 4,
      gradient: 'linear-gradient(90deg, #00bcd4, #4caf50)',
      avatar: '/path-to-avatar2.jpg',
      initials: 'AR'
    },
    {
      id: 3,
      name: 'Sarah Mwazighe',
      role: 'Parent of Grade 5 Student',
      quote: "The communication from the school is excellent and I appreciate how they involve parents in the learning journey. The teachers truly care about each child's success.",
      rating: 4,
      gradient: 'linear-gradient(90deg, #4caf50, #ff9800)',
      avatar: '/path-to-avatar3.jpg',
      initials: 'SM'
    }
  ];

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, mb: 4, position: 'relative' }}>
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
            {/* Hero content will go here */}
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

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ 
          mt: { xs: 3, md: 5 },
          px: { xs: 1, sm: 2, md: 3 },
          justifyContent: 'center',
          '& > .MuiGrid-item': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: { xs: '8px !important', sm: '12px !important' }
          }
        }}>
          {/* Academic Excellence */}
          <Grid item xs={12} sm={6} lg={4}>
            <Paper elevation={0} sx={{
              p: { xs: 3, sm: 3.5, md: 4 },
              height: '100%',
              borderRadius: { xs: '12px', md: '16px' },
              background: 'white',
              border: '1px solid rgba(25, 118, 210, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(25, 118, 210, 0.12)',
                '& .strength-icon-container': {
                  transform: 'scale(1.08)'
                }
              },
              '@media (max-width: 600px)': {
                '&:hover': {
                  transform: 'none',
                  boxShadow: '0 5px 15px rgba(25, 118, 210, 0.1)'
                }
              }
            }}>
              <Box className="strength-icon-container" sx={{
                width: { xs: '70px', sm: '80px', md: '90px' },
                height: { xs: '70px', sm: '80px', md: '90px' },
                borderRadius: { xs: '18px', md: '25px' },
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(129, 199, 132, 0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                position: 'relative',
                transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                boxShadow: '0 8px 25px rgba(255, 152, 0, 0.12)',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: { xs: '22px', md: '30px' },
                  border: '2px dashed rgba(255, 82, 82, 0.4)',
                  animation: 'pulse 3s ease-in-out infinite',
                  '@media (max-width: 600px)': {
                    borderWidth: '1.5px',
                    animation: 'none'
                  }
                }
              }}>
                <School sx={{
                  fontSize: { xs: 36, sm: 44, md: 50 },
                  color: '#ff1744',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 3px 6px rgba(255, 23, 68, 0.25))'
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
                mb: { xs: 1.5, sm: 2 },
                textAlign: 'center',
                position: 'relative',
                fontSize: { xs: '1.25rem', sm: '1.35rem', md: '1.5rem' },
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: { xs: '30px', sm: '35px', md: '40px' },
                  height: { xs: '2px', sm: '2.5px', md: '3px' },
                  background: 'linear-gradient(90deg, #ff5252, #ff8a80)',
                  margin: { xs: '8px auto 0', sm: '10px auto 0', md: '12px auto 0' },
                  borderRadius: '3px'
                }
              }}>
                Academic Excellence
              </Typography>
              <Typography variant="body1" sx={{
                color: '#555',
                textAlign: 'center',
                lineHeight: { xs: 1.6, sm: 1.7 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                px: { xs: 0.5, sm: 1 }
              }}>
                Our dedicated faculty uses innovative teaching methods to ensure every student reaches their full potential through personalized learning experiences.
              </Typography>
            </Paper>
          </Grid>

          {/* Sports & Activities */}
          <Grid item xs={12} sm={6} lg={4}>
            <Paper elevation={0} sx={{
              p: { xs: 3, sm: 3.5, md: 4 },
              height: '100%',
              borderRadius: { xs: '12px', md: '16px' },
              background: 'white',
              border: '1px solid rgba(25, 118, 210, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(25, 118, 210, 0.12)',
                '& .strength-icon-container': {
                  transform: 'scale(1.08)'
                }
              },
              '@media (max-width: 600px)': {
                '&:hover': {
                  transform: 'none',
                  boxShadow: '0 5px 15px rgba(25, 118, 210, 0.1)'
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
                mb: { xs: 1.5, sm: 2 },
                textAlign: 'center',
                position: 'relative',
                fontSize: { xs: '1.25rem', sm: '1.35rem', md: '1.5rem' },
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: { xs: '30px', sm: '35px', md: '40px' },
                  height: { xs: '2px', sm: '2.5px', md: '3px' },
                  background: 'linear-gradient(90deg, #ff5252, #ff8a80)',
                  margin: { xs: '8px auto 0', sm: '10px auto 0', md: '12px auto 0' },
                  borderRadius: '3px'
                }
              }}>
                Sports & Activities
              </Typography>
              <Typography variant="body1" sx={{
                color: '#555',
                textAlign: 'center',
                lineHeight: { xs: 1.6, sm: 1.7 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                px: { xs: 0.5, sm: 1 }
              }}>
                Extensive sports program including volleyball, soccer, netball  and more to develop physical fitness, teamwork, and leadership skills in a fun environment.
              </Typography>
            </Paper>
          </Grid>

          {/* Modern Facilities */}
          <Grid item xs={12} sm={6} lg={4}>
            <Paper elevation={0} sx={{
              p: { xs: 3, sm: 3.5, md: 4 },
              height: '100%',
              borderRadius: { xs: '12px', md: '16px' },
              background: 'white',
              border: '1px solid rgba(25, 118, 210, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(25, 118, 210, 0.12)',
                '& .strength-icon-container': {
                  transform: 'scale(1.08)'
                }
              },
              '@media (max-width: 600px)': {
                '&:hover': {
                  transform: 'none',
                  boxShadow: '0 5px 15px rgba(25, 118, 210, 0.1)'
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
                lineHeight: { xs: 1.6, sm: 1.7 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                px: { xs: 0.5, sm: 1 }
              }}>
                Modern, well-equipped classrooms with the latest technology to support effective teaching and learning in today's world.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>

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

          {/* Academic Programs Carousel */}
          <Box 
            sx={{ 
              width: '100%',
              maxWidth: '900px',
              mx: 'auto',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              my: 6,
              '&:hover .carousel-arrow': {
                opacity: 1
              }
            }}
            onMouseEnter={() => setIsProgramHovered(true)}
            onMouseLeave={() => setIsProgramHovered(false)}
          >
            {/* Program Cards */}
            <Box sx={{ 
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentProgramIndex * 100}%)`
            }}>
              {academicPrograms.map((program, index) => (
                <Box 
                  key={program.id}
                  sx={{ 
                    minWidth: '100%',
                    px: { xs: 0, sm: 2 },
                    py: 1
                  }}
                >
                  <Paper 
                    elevation={3}
                    sx={{
                      p: { xs: 2, sm: 4 },
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
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: 4
                    }}>
                      {/* Program Image */}
                      <Box sx={{ 
                        width: { xs: '100%', md: '45%' },
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        position: 'relative',
                        height: { xs: '250px', sm: '350px', md: 'auto' }
                      }}>
                        <Box
                          component="img"
                          src={program.image}
                          alt={program.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                              transform: 'scale(1.05)'
                            }
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = program.fallbackImage;
                          }}
                        />
                      </Box>
                      
                      {/* Program Content */}
                      <Box sx={{ 
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        py: { xs: 2, md: 0 }
                      }}>
                        <Typography 
                          variant="h4" 
                          component="h3"
                          sx={{
                            fontWeight: 800,
                            color: '#1a237e',
                            mb: 2,
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            position: 'relative',
                            '&:after': {
                              content: '""',
                              display: 'block',
                              width: '60px',
                              height: '4px',
                              background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                              borderRadius: '2px',
                              mt: 2,
                              mb: 1
                            }
                          }}
                        >
                          {program.title}
                        </Typography>
                        
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#4a5568',
                            mb: 3,
                            lineHeight: 1.8,
                            fontSize: { xs: '1rem', md: '1.1rem' }
                          }}
                        >
                          {program.description}
                        </Typography>
                        
                        <Box sx={{ 
                          mt: 'auto',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1
                        }}>
                          {program.tags.map((tag, tagIndex) => (
                            <Chip 
                              key={tagIndex}
                              label={tag}
                              sx={{
                                background: 'rgba(25, 118, 210, 0.1)',
                                color: '#1a237e',
                                fontWeight: 600,
                                px: 1.5,
                                py: 1,
                                '& .MuiChip-label': {
                                  px: 1
                                },
                                '&:hover': {
                                  background: 'rgba(25, 118, 210, 0.2)'
                                }
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Box>
            
            {/* Navigation Dots */}
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              gap: 1
            }}>
              {academicPrograms.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => goToProgram(index)}
                  sx={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    bgcolor: index === currentProgramIndex ? 'primary.main' : 'action.disabled',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      bgcolor: 'primary.main'
                    }
                  }}
                />
              ))}
            </Box>
            
            {/* Navigation Arrows */}
            <Box 
              className="carousel-arrow"
              onClick={handlePrevProgram}
              sx={{
                position: 'absolute',
                left: { xs: '10px', sm: '20px' },
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                bgcolor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 2,
                opacity: { xs: 1, md: 0 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                '@media (max-width: 900px)': {
                  width: '36px',
                  height: '36px',
                  opacity: 0.8
                }
              }}
            >
              <ArrowBackIcon />
            </Box>
            
            <Box 
              className="carousel-arrow"
              onClick={handleNextProgram}
              sx={{
                position: 'absolute',
                right: { xs: '10px', sm: '20px' },
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                bgcolor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 2,
                opacity: { xs: 1, md: 0 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                '@media (max-width: 900px)': {
                  width: '36px',
                  height: '36px',
                  opacity: 0.8
                }
              }}
            >
              <ArrowForwardIcon />
            </Box>
          </Box>
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
                          end={500} 
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
                        end={100} 
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
        py: { xs: 6, md: 10 },
        px: { xs: 0, sm: 2 },
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ 
            textAlign: 'center',
            mb: { xs: 5, md: 7 },
            px: { xs: 2, sm: 0 }
          }}>
            <Chip 
              label="Testimonials"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: 600,
                px: 2,
                py: 1,
                mb: 2,
                '& .MuiChip-label': { px: 1 }
              }}
            />
            <Typography 
              variant="h3" 
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                lineHeight: 1.2,
                mb: 2,
                background: 'linear-gradient(90deg, #1a237e, #1976d2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                '& span': {
                  background: 'linear-gradient(90deg, #1976d2, #00bcd4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }
              }}
            >
              What Our <span>Parents Say</span>
            </Typography>
            <Typography 
              variant="h6" 
              component="p"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                px: { xs: 1, sm: 2 }
              }}
            >
              Hear from the families who have experienced the Transformer Blessed Junior School difference.
            </Typography>
          </Box>

          <Box 
            sx={{ 
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              py: 4,
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100, position: 'absolute' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 20px'
                }}
              >
                <Grid container justifyContent="center">
                  <Grid 
                    item 
                    xs={12}
                    md={8}
                    key={testimonials[currentIndex].id}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      position: 'relative'
                    }}
                  >
                      <Card 
                        elevation={0}
                        sx={{
                          width: '100%',
                          maxWidth: 400,
                          p: { xs: 2.5, md: 3 },
                          borderRadius: 3,
                          border: '1px solid rgba(145, 158, 171, 0.16)',
                          background: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 30px rgba(25, 118, 210, 0.12)',
                            borderColor: 'transparent'
                          },
                          position: 'relative',
                          overflow: 'hidden',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: testimonials[currentIndex].gradient
                          }
                        }}
                      >
                        <Box sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%'
                        }}>
                          <Box sx={{ 
                            position: 'relative',
                            mb: 3,
                            flex: 1
                          }}>
                            <Box sx={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              fontSize: '4.5rem',
                              lineHeight: 1,
                              color: 'rgba(25, 118, 210, 0.05)',
                              fontFamily: 'Georgia, serif',
                              fontStyle: 'italic',
                              transform: 'translateY(-15px)'
                            }}>"</Box>
                            
                            <Typography 
                              variant="body1" 
                              sx={{
                                color: 'text.secondary',
                                lineHeight: 1.8,
                                fontSize: { xs: '0.95rem', md: '1rem' },
                                mb: 0,
                                position: 'relative',
                                zIndex: 1
                              }}
                            >
                              {testimonials[currentIndex].quote}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            pt: 2.5,
                            mt: 'auto',
                            borderTop: '1px dashed rgba(145, 158, 171, 0.24)'
                          }}>
                            <Avatar 
                              alt={testimonials[currentIndex].name}
                              src={testimonials[currentIndex].avatar}
                              sx={{ 
                                width: 56, 
                                height: 56,
                                mr: 2,
                                bgcolor: 'primary.lighter',
                                color: 'primary.dark',
                                fontSize: '1.25rem',
                                fontWeight: 600
                              }}
                            >
                              {testimonials[currentIndex]?.initials || ''}
                            </Avatar>
                            <Box>
                              <Typography 
                                variant="subtitle1" 
                                sx={{ 
                                  fontWeight: 600,
                                  color: 'text.primary',
                                  mb: 0.5,
                                  lineHeight: 1.3
                                }}
                              >
                                {testimonials[currentIndex].name}
                              </Typography>
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  color: 'text.secondary',
                                  fontSize: '0.85rem',
                                  lineHeight: 1.4
                                }}
                              >
                                {testimonials[currentIndex].role}
                              </Typography>
                              <Box sx={{ display: 'flex', mt: 0.5 }}>
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    sx={{ 
                                      color: i < testimonials[currentIndex].rating ? '#ffc107' : 'action.disabled',
                                      fontSize: '1rem',
                                      mr: 0.25
                                    }} 
                                  />
                                ))}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                  </Grid>
                </Grid>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: { xs: 10, sm: 20 },
                right: { xs: 10, sm: 20 },
                transform: 'translateY(-50%)',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none',
                '& > *': {
                  pointerEvents: 'auto'
                }
              }}
            >
              <Button
                onClick={handlePrev}
                variant="contained"
                size="small"
                sx={{
                  minWidth: '40px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  p: 0,
                  bgcolor: 'background.paper',
                  color: 'primary.main',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isHovered ? 1 : 0.7
                }}
              >
                <ArrowBackIcon />
              </Button>
              <Button
                onClick={handleNext}
                variant="contained"
                size="small"
                sx={{
                  minWidth: '40px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  p: 0,
                  bgcolor: 'background.paper',
                  color: 'primary.main',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isHovered ? 1 : 0.7
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>

            {/* Dots Indicator */}
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
              '& > *': {
                mx: 0.75
              },
              position: 'absolute',
              bottom: '20px',
              left: 0,
              right: 0
            }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => goToSlide(index)}
                  sx={{
                    width: currentIndex === index ? '24px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    bgcolor: currentIndex === index ? 'primary.main' : 'action.disabled',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      transform: 'scale(1.2)'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
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
        }}
      >
        <Container maxWidth="md">
          <Box 
            position="relative" 
            zIndex={1}
            sx={{
              px: { xs: 3, sm: 4, md: 6 },
              py: { xs: 5, md: 8 },
              backdropFilter: 'blur(4px)',
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              maxWidth: '1200px',
              mx: 'auto',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h3" 
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { 
                    xs: '2rem', 
                    sm: '2.5rem', 
                    md: '3rem',
                    lg: '3.5rem' 
                  },
                  lineHeight: 1.1,
                  mb: { xs: 3, md: 4 },
                  textAlign: 'center',
                  background: 'linear-gradient(90deg, #ffffff, #e0f7fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    display: 'block',
                    width: { xs: '60px', md: '80px' },
                    height: '4px',
                    background: 'linear-gradient(90deg, #64b5f6, #00bcd4)',
                    margin: '20px auto 0',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Ready to Transform Your Child's Future?
              </Typography>
              
              <Box sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                mb: { xs: 4, md: 6 },
                textAlign: 'center'
              }}>
                <Typography 
                  component="p"
                  sx={{
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: { 
                      xs: '1.1rem', 
                      sm: '1.2rem', 
                      md: '1.3rem' 
                    },
                    lineHeight: 1.6,
                    mb: 3,
                    fontWeight: 400
                  }}
                >
                  Join the TBJS community and give your child the best start in life.
                </Typography>
                
                <Typography 
                  component="div"
                  sx={{ 
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: { 
                      xs: '1rem', 
                      md: '1.1rem' 
                    },
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 3,
                    py: 1.5,
                    borderRadius: 50,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  Enrollment ongoing. Limited spots available.
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 3 },
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 4, md: 6 },
                flexWrap: 'wrap'
              }}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.5, md: 1.75 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 50,
                      boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)',
                        backgroundColor: 'secondary.dark'
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    href="/admission"
                  >
                    Start Application
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    startIcon={<School />}
                    sx={{
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.5, md: 1.75 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 500,
                      textTransform: 'none',
                      borderRadius: 50,
                      borderWidth: '2px',
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.3)',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        borderColor: 'rgba(255,255,255,0.5)',
                        borderWidth: '2px'
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    href="/about"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                pt: { xs: 3, md: 4 },
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Star sx={{ 
                        color: '#ffd700', 
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                      }} />
                    </motion.div>
                  ))}
                </Box>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 500,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  textAlign: 'center'
                }}>
                  Trusted by 100+ parents for quality education
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
