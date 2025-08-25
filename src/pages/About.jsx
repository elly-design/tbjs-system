import React from 'react';
import { Typography, Container, Grid, Box, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(\"/education.jpg\")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        borderRadius: '12px',
        margin: '20px 0 50px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        padding: '40px 20px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.2) 0%, rgba(13, 71, 161, 0.3) 100%)',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px',
          color: 'white'
        }}>
          <h1 style={{ 
            fontSize: '4rem',
            fontWeight: '800',
            margin: '0 0 20px',
            color: 'white',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            lineHeight: '1.2',
            letterSpacing: '1px'
          }}>
            About Us
          </h1>
          
          <div style={{
            position: 'relative',
            display: 'inline-block',
            margin: '40px 0'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '-60px',
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7))'
            }}></div>
            
            <div style={{
              background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              fontSize: '2.2rem',
              fontWeight: '700',
              boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '15px',
              transform: 'perspective(100px) rotateX(2deg)',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'perspective(100px) rotateX(2deg) translateY(-3px)',
                boxShadow: '0 12px 30px rgba(25, 118, 210, 0.5)'
              }
            }}>
              <span style={{ display: 'inline-block', transform: 'translateY(2px)' }}></span>
              <span>Transforming Lives</span>
              <span style={{ display: 'inline-block', transform: 'translateY(2px)' }}></span>
            </div>
            
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-60px',
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.7), transparent)'
            }}></div>
          </div>
          

        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Our History</h2>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div>
            <h3 style={{ color: '#1976d2' }}>A Journey of Excellence</h3>
            <p>Established in 2016, Transformer Blessed Junior School was founded on the principles of academic excellence, character development and holistic growth, all firmly rooted in the foundation of Christianity. Our commitment to nurturing young minds is guided by Christian values, fostering spiritual growth alongside intellectual and moral development. Our journey began with a vision to create an educational institution that would not only nurture academic prowess but also shape well-rounded individuals, spiritually grounded and ready to face the challenges of the modern world with wisdom and resilience.</p>
            
            <div style={{
              margin: '60px auto',
              maxWidth: '1000px',
              position: 'relative',
              padding: '0 20px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 50px rgba(25, 118, 210, 0.2)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 60px rgba(25, 118, 210, 0.3)'
                }
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '50%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/uniform.jpeg" 
                    alt="Our Dedicated Staff"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                      transition: 'all 0.8s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        filter: 'brightness(1.15) contrast(1.15) saturate(1.15)'
                      }
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    padding: { xs: '15px 20px', sm: '20px 30px', md: '25px 40px' },
                    color: 'white',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '50%',
                    boxSizing: 'border-box'
                  }}>
                    <h3 style={{
                      margin: '0 0 8px 0',
                      fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                      fontWeight: '700',
                      textShadow: '0 2px 6px rgba(0,0,0,0.6)',
                      lineHeight: 1.2,
                      letterSpacing: '0.5px'
                    }}>
                      Our Exceptional Team
                    </h3>
                    <div style={{
                      width: '60px',
                      height: '3px',
                      background: 'rgba(255,255,255,0.8)',
                      margin: '0 auto 10px',
                      borderRadius: '3px'
                    }} />
                    <p style={{
                      margin: '8px 0 0 0',
                      fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                      opacity: '0.95',
                      maxWidth: '700px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: '1.5',
                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                      fontWeight: '400',
                      fontFamily: '"Montserrat", sans-serif'
                    }}>
                      Nurturing talent in every student through quality education and character development
                    </p>
                  </div>
                </div>
                
                <div style={{
                  padding: '25px',
                  background: 'white',
                  textAlign: 'center',
                  borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <Button
                    variant="contained"
                    startIcon={<span>👥</span>}
                    endIcon={<span>→</span>}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #1976d2, #2196f3)',
                      color: 'white',
                      fontWeight: 500,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 15px rgba(25, 118, 210, 0.3)',
                        background: 'linear-gradient(135deg, #1565c0, #1976d2)'
                      },
                      '& .MuiButton-startIcon': {
                        marginRight: 1,
                        '& > *:nth-of-type(1)': {
                          fontSize: '1.2rem',
                          lineHeight: 1
                        }
                      },
                      '& .MuiButton-endIcon': {
                        marginLeft: 1,
                        '& > *:nth-of-type(1)': {
                          fontSize: '1.2rem',
                          lineHeight: 1
                        }
                      }
                    }}
                  >
                    Meet Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Early Years</h3>
            <p>In our formative years, we focused on building a strong foundation of quality education, modern teaching methodologies and a nurturing learning environment. We introduced innovative programs that combined traditional academic rigor with modern educational practices, emphasizing critical thinking, creativity, and problem-solving skills.</p>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Growth and Development</h3>
            <p>Over the years, we've seen remarkable growth in both our student body and our educational offerings. We've expanded our curriculum to include specialized programs in STEM, arts and sports while maintaining our commitment to academic excellence. Our dedicated faculty members, many of whom hold advanced degrees and professional certifications, have played a crucial role in our success.</p>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Community Impact</h3>
            <p>Our school has become an integral part of the local community, actively engaging in community service projects and fostering strong relationships with parents and local organizations. We believe in giving back to society and instilling this value in our students from a young age.</p>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Looking Forward</h3>
            <p>As we continue to grow and evolve, our commitment to providing exceptional education remains unwavering. We are constantly innovating and adapting to meet the changing needs of our students and the broader educational landscape. Our goal is to prepare each student for success in an ever-changing world while preserving our core values of excellence, integrity  and community service.</p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
          backgroundColor: '#f8faff',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(25, 118, 210, 0.1)',
          maxWidth: '1400px',
          mx: 'auto',
          '&:hover': {
            boxShadow: '0 6px 25px rgba(25, 118, 210, 0.15)'
          }
        }}>
          {/* Vision Content */}
          <Box sx={{ 
            px: { xs: 3, md: 4, lg: 5 },
            py: { xs: 4, md: 5 },
            order: { xs: 2, lg: 1 }
          }}>
            <Chip 
              label="Our Vision"
              sx={{
                background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
                color: 'white',
                fontWeight: 600,
                px: 2,
                py: 1,
                mb: 3,
                '& .MuiChip-label': {
                  px: 0.5
                }
              }}
            />
            
            <Typography variant="h3" sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              fontWeight: 700,
              color: 'primary.dark',
              mb: 3,
              lineHeight: 1.2,
              '& span': {
                color: 'primary.main',
                display: 'inline-block',
                ml: 0.5
              }
            }}>
              Unlocking Every Child's <span>Full Potential</span>
              <Box sx={{
                width: 60,
                height: 4,
                background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                mt: 2,
                borderRadius: 2
              }} />
            </Typography>
            
            <Typography variant="body1" sx={{
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 4
            }}>
              To develop the talent of every pupil to its maximum potential through innovative education and personalized learning experiences.
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[
                { 
                  icon: '🎯', 
                  title: 'Personalized Learning', 
                  subtitle: <span style={{ fontStyle: 'italic', color: '#E74C3C' }}>Tailored to each child</span>
                },
                { 
                  icon: '🌟', 
                  title: 'Holistic Growth', 
                  subtitle: <span style={{ fontStyle: 'italic', color: '#E74C3C' }}>Mind. Body. Spirit</span>
                }
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'rgba(25, 118, 210, 0.05)',
                    p: 2,
                    borderRadius: 2,
                    height: '100%',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      bgcolor: 'rgba(25, 118, 210, 0.08)'
                    }
                  }}>
                    <Box sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      flexShrink: 0,
                      fontSize: '1.2rem'
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ 
                        fontWeight: 600,
                        color: 'primary.dark',
                        lineHeight: 1.2,
                        mb: 0.25
                      }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                        lineHeight: 1.4,
                        display: 'block'
                      }}>
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Vision Image */}
          <Box sx={{
            position: 'relative',
            height: { xs: 300, sm: 350, md: 400, lg: '100%' },
            minHeight: { xs: 300, md: 400 },
            order: { xs: 1, lg: 2 }
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Box
                component="img"
                src="/public/cooking.jpeg"
                alt="School Vision"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.03)'
                  }
                }}
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                p: 3,
                color: 'white',
                textAlign: 'center',
                zIndex: 2
              }}>
                <Typography variant="h6" sx={{
                  fontWeight: 600,
                  mb: 1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Our Commitment
                </Typography>
                <Typography variant="body2" sx={{
                  opacity: 0.95,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  lineHeight: 1.5,
                  maxWidth: '90%',
                  mx: 'auto'
                }}>
                  Nurturing talent in every student through quality education and character development
                </Typography>
              </Box>
            </Box>
            
            {/* Decorative Element */}
            <Box sx={{
              position: 'absolute',
              top: { xs: 20, sm: 30 },
              right: { xs: 20, sm: 30 },
              width: 50,
              height: 50,
              borderRadius: '50%',
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              zIndex: 3,
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)'
                },
                '70%': {
                  boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)'
                },
                '100%': {
                  boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'
                }
              }
            }}>
             
            </Box>
          </Box>
        </Box>
      </Container>

      <div style={{ marginTop: '40px' }}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <Box sx={{ 
            py: { xs: 6, md: 10 },
            background: 'linear-gradient(135deg, #f8f9ff 0%, #f1f5ff 100%)',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              background: 'radial-gradient(circle at 10% 20%, rgba(25, 118, 210, 0.03) 0%, transparent 20%), radial-gradient(circle at 90% 90%, rgba(25, 118, 210, 0.03) 0%, transparent 20%)',
              zIndex: 1
            }
          }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
              <Box textAlign="center" mb={{ xs: 6, md: 8 }} data-aos="fade-up">
                <Chip 
                  label="Core Value" 
                  sx={{ 
                    mb: 2, 
                    px: 2, 
                    py: 1, 
                    fontWeight: 600, 
                    fontSize: '0.9rem',
                    background: 'rgba(66, 165, 245, 0.15)',
                    color: '#1565c0',
                    border: '1px solid rgba(66, 165, 245, 0.3)'
                  }} 
                />
                <Typography 
                  variant="h3" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 800,
                    color: 'text.primary',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.2
                  }}
                >
                  Core Values That Define Us
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: 'text.secondary', 
                    maxWidth: '700px', 
                    mx: 'auto',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.7
                  }}
                >
                  Our foundational principles guide every decision we make and reflect our unwavering commitment to excellence and integrity in everything we do.
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
                {[
                  { 
                    icon: '❤️', 
                    title: 'Love', 
                    description: 'Caring for each other and building a supportive community',
                    color: '#ff4081'
                  },
                  { 
                    icon: '🤝', 
                    title: 'Respect', 
                    description: 'Valuing diversity and treating everyone with dignity',
                    color: '#7b1fa2'
                  },
                  { 
                    icon: '✅', 
                    title: 'Honesty', 
                    description: 'Maintaining transparency and truthfulness in all actions',
                    color: '#1976d2'
                  },
                  { 
                    icon: '🛡️', 
                    title: 'Integrity', 
                    description: 'Upholding strong moral principles and ethical standards',
                    color: '#2e7d32'
                  }
                ].map((value, index) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={3} 
                    key={index} 
                    data-aos="fade-up" 
                    data-aos-delay={index * 100}
                    sx={{
                      px: { xs: 1, sm: 2 },
                      mb: { xs: 2, sm: 3, md: 0 },
                      '&:last-child': {
                        mb: 0
                      }
                    }}
                  >
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ 
                        x: [0, -5, 5, 0],
                        opacity: 1,
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 8,
                            ease: 'easeInOut',
                            times: [0, 0.2, 0.4, 0.6],
                            delay: index * 0.5
                          },
                          opacity: {
                            duration: 0.5,
                            delay: index * 0.1
                          }
                        }
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        boxShadow: '0 15px 30px rgba(25, 118, 210, 0.2)',
                        transition: { 
                          type: 'spring', 
                          stiffness: 300, 
                          damping: 10,
                          y: { duration: 0.3 }
                        }
                      }}
                    >
                      <Box 
                        sx={{
                          height: { xs: 'auto', sm: '100%' },
                          minHeight: { xs: '280px', sm: '320px', md: '340px' },
                          p: { xs: 2.5, sm: 3, md: 3.5 },
                          textAlign: 'center',
                          borderRadius: 3,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          bgcolor: 'background.paper',
                          border: '1px solid',
                          borderColor: 'divider',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                          
                          '@media (max-width: 600px)': {
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 20px rgba(25, 118, 210, 0.1)'
                            }
                          },
                          position: 'relative',
                          overflow: 'hidden',
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: `linear-gradient(90deg, ${value.color} 0%, ${value.color}80 100%)`,
                            transform: 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                          },
                          
                        }}
                      >
                        <Box
                          className="value-icon"
                          sx={{
                            width: { xs: 85, sm: 90, md: 100 },
                            height: { xs: 85, sm: 90, md: 100 },
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${value.color} 0%, ${value.color}cc 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            color: 'white',
                            fontSize: { xs: '36px', sm: '40px', md: '42px' },
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                          }}
                        >
                          {value.icon}
                        </Box>
                        <Typography 
                          variant="h5" 
                          component="h3" 
                          sx={{ 
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 2,
                            fontSize: '1.4rem',
                            position: 'relative',
                            display: 'inline-block',
                            '&:after': {
                              content: '""',
                              position: 'absolute',
                              bottom: -8,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '40px',
                              height: '3px',
                              background: `linear-gradient(90deg, ${value.color} 0%, ${value.color}80 100%)`,
                              borderRadius: '3px'
                            }
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'text.secondary',
                            lineHeight: 1.7,
                            fontSize: '1rem'
                          }}
                        >
                          {value.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

        </div>
      </div>

      {/* Mission Section */}
      <div style={{ marginTop: '40px' }}>
        <div style={{ 
          padding: '40px',
          background: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          borderLeft: '5px solid #1976d2',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
          }
        }}>
          <div style={{ 
            display: 'inline-block',
            background: '#1976d2',
            color: 'white',
            padding: '10px 25px',
            borderRadius: '30px',
            marginBottom: '20px',
            fontSize: '1.1rem',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)'
          }}>
            Our Mission
          </div>
          <h2 style={{ 
            color: '#2c3e50',
            marginBottom: '20px',
            fontSize: '2rem',
            fontWeight: '700',
            lineHeight: '1.3'
          }}>
            Be a Centre of Learning Excellence
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            To be a centre of learning that provides an ideal learning environment which enables learners to become responsible, active and self-reliant individuals. We are committed to fostering academic excellence, character development, and spiritual growth in a nurturing and supportive setting that prepares students to meet the challenges of an ever-changing world.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              maxWidth: '300px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#1976d2',
                marginBottom: '15px'
              }}>📚</div>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '10px'
              }}>Academic Excellence</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>Delivering quality education that challenges and inspires students to achieve their highest potential.</p>
            </div>
            
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              maxWidth: '300px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#1976d2',
                marginBottom: '15px'
              }}>🌱</div>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '10px'
              }}>Holistic Development</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>Nurturing the intellectual, emotional, social and physical growth of every student.</p>
            </div>
            
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              maxWidth: '300px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#1976d2',
                marginBottom: '15px'
              }}>🌍</div>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '10px'
              }}>Community Engagement</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>Building strong partnerships with families and the community to support student success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
