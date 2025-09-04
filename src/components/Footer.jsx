import React from 'react';
import { Box, Typography, Container, Grid, Link, useTheme, useMediaQuery, Divider } from '@mui/material';
import AnimatedText from './AnimatedText';
import { Facebook, Twitter, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { text: 'About Us', href: '/about' },
    { text: 'Clubs', href: '/clubs' },
    { text: 'Admission', href: '/admission' }
  ];

  const contactInfo = [
    { icon: <LocationOn sx={{ mr: 1 }} />, text: 'Mombasa, Kenya' },
    { 
      icon: <Phone sx={{ mr: 1 }} />, 
      text: (
        <>
          <Box component="span" display="block">Admission:+254727492055</Box>
          <Box component="span" display="block">Office: +254722983388 </Box>
        </>
      ) 
    },
    { 
      icon: <Email sx={{ mr: 1 }} />, 
      text: 'transformerblessedjnr@gmail.com',
      href: 'mailto:transformerblessedjnr@gmail.com'
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
  ];

  return (
    <Box component="footer" sx={{ 
      bgcolor: 'primary.dark', 
      color: 'white',
      pt: { xs: 6, md: 8 },
      pb: { xs: 3, md: 4 },
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="space-between">
          {/* School Info Column */}
          <Grid item xs={12} md={4} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: { xs: 2, md: 0 },
            pr: { md: 4 }
          }}>
            <Box 
              component="img" 
              src="/logo.png" 
              alt="Transformer Blessed Junior School Logo" 
              sx={{ 
                height: { xs: '70px', md: '90px' },
                width: 'auto', 
                mb: 3,
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
                display: 'block',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                fontSize: { xs: '1.25rem', md: '1.4rem' },
                textAlign: { xs: 'center', md: 'left' },
                width: '100%',
                color: 'white',
                letterSpacing: '0.3px',
                lineHeight: 1.3
              }}
            >
              Transformer Blessed Junior School
            </Typography>
            <Box
              sx={{
                mb: 3,
                textAlign: { xs: 'center', md: 'left' },
                width: '100%',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '60px',
                  height: '3px',
                  bgcolor: '#ff0000',
                  mt: 2,
                  mx: { xs: 'auto', md: '0' },
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 10px rgba(255,0,0,0.5)'
                },
                '&:hover': {
                  '&:after': {
                    width: '80px',
                    boxShadow: '0 0 15px rgba(255,0,0,0.8)'
                  }
                }
              }}
            >
              <AnimatedText 
                text="Transforming Lives !"
                speed={100}
                style={{
                  color: '#ff0000',
                  fontWeight: 700,
                  fontSize: { xs: '1.4rem', md: '1.6rem' },
                  lineHeight: 1.2,
                  letterSpacing: '0.5px',
                  display: 'inline-block',
                  textShadow: '0 0 8px rgba(255,0,0,0.5)',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      textShadow: '0 0 8px rgba(255,0,0,0.5)',
                      transform: 'scale(1)'
                    },
                    '50%': {
                      textShadow: '0 0 15px rgba(255,0,0,0.8)',
                      transform: 'scale(1.03)'
                    },
                    '100%': {
                      textShadow: '0 0 8px rgba(255,0,0,0.5)',
                      transform: 'scale(1)'
                    }
                  }
                }}
                characterStyle={{
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    textShadow: '0 0 20px rgba(255,0,0,0.8)'
                  }
                }}
              />
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: 'auto',
              pt: 3,
              width: '100%',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {socialLinks.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                      color: 'primary.dark',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  {React.cloneElement(item.icon, { 
                    sx: { 
                      fontSize: 20,
                      transition: 'all 0.3s ease'
                    } 
                  })}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} sm={6} md={3} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            px: { md: 4 }
          }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 700, 
              mb: 3,
              fontSize: '1.1rem',
              position: 'relative',
              width: '100%',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: { xs: '50%', md: 0 },
                transform: { xs: 'translateX(-50%)', md: 'none' },
                width: 50,
                height: 3,
                bgcolor: 'secondary.main',
                display: 'block'
              },
              textAlign: { xs: 'center', md: 'left' }
            }}>
              Quick Links
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1.5,
              width: '100%',
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  color="inherit" 
                  underline="none"
                  sx={{
                    opacity: 0.9,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateX(5px)',
                      opacity: 1
                    },
                    textAlign: isMobile ? 'center' : 'left',
                    display: 'block',
                    py: 0.5
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info Column */}
          <Grid item xs={12} sm={6} md={4} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            pl: { md: 4 },
            mt: { xs: 2, md: 0 }
          }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 700, 
              mb: 3,
              fontSize: '1.1rem',
              position: 'relative',
              width: '100%',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: { xs: '50%', md: 0 },
                transform: { xs: 'translateX(-50%)', md: 'none' },
                width: 50,
                height: 3,
                bgcolor: 'secondary.main',
                display: 'block'
              },
              textAlign: { xs: 'center', md: 'left' }
            }}>
              Contact Us
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              width: '100%'
            }}>
              {contactInfo.map((item, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: 1.5,
                    maxWidth: '300px',
                    mx: { xs: 'auto', md: '0' },
                    textAlign: { xs: 'center', md: 'left' },
                    '&:hover': {
                      '& .MuiSvgIcon-root': {
                        transform: 'scale(1.1)'
                      }
                    }
                  }}
                >
                  <Box sx={{ 
                    color: 'secondary.main', 
                    mt: '2px',
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.3s ease',
                      fontSize: '1.2rem'
                    }
                  }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      opacity: 0.9, 
                      lineHeight: 1.6,
                      flex: 1
                    }}
                  >
                    {item.href ? (
                      <Link 
                        href={item.href} 
                        color="inherit" 
                        underline="hover"
                        sx={{
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: 'secondary.main'
                          }
                        }}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>


        {/* Copyright */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          width: '100%',
          pt: 2,
          mt: 2
        }}>
          <Typography variant="body2" sx={{ 
            opacity: 0.8,
            textAlign: 'center',
            order: { xs: 2, sm: 1 },
            fontSize: '0.9rem'
          }}>
            {currentYear} Transformer Blessed Junior School. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex',
            gap: 3,
            order: { xs: 1, sm: 2 },
            mb: { xs: 2, sm: 0 }
          }}>
            <Link 
              href="/privacy-policy" 
              color="inherit" 
              underline="hover"
              sx={{ 
                fontSize: '0.9rem', 
                opacity: 0.8, 
                transition: 'all 0.2s ease',
                '&:hover': { 
                  opacity: 1,
                  color: 'secondary.main'
                } 
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              color="inherit" 
              underline="hover"
              sx={{ 
                fontSize: '0.9rem', 
                opacity: 0.8, 
                transition: 'all 0.2s ease',
                '&:hover': { 
                  opacity: 1,
                  color: 'secondary.main'
                } 
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
