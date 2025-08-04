import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Link, useTheme, useMediaQuery, Divider, Snackbar, Alert, CircularProgress } from '@mui/material';
import AnimatedText from './AnimatedText';
import { Facebook, Twitter, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';
import { supabase } from '../config/supabase';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const currentYear = new Date().getFullYear();
  
  // Newsletter subscription state
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error',
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, created_at: new Date() }])
        .select();

      if (error) throw error;

      setSnackbar({
        open: true,
        message: 'Thank you for subscribing to our newsletter!',
        severity: 'success',
      });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setSnackbar({
        open: true,
        message: error.message.includes('duplicate key value')
          ? 'This email is already subscribed.'
          : 'Failed to subscribe. Please try again.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const quickLinks = [
    { text: 'About Us', href: '/about' },
    { text: 'Admission', href: '/admission' },
    { text: 'Clubs', href: '/clubs' }
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
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* School Info Column */}
          <Grid item xs={12} md={4} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: { xs: 4, md: 0 }
          }}>
            <Box 
              component="img" 
              src="/logo.png" 
              alt="Transformer Blessed Junior School Logo" 
              sx={{ 
                height: { xs: '80px', md: '100px' },
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
          <Grid item xs={12} sm={6} md={2} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }
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
          <Grid item xs={12} sm={6} md={3} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }
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

          {/* Newsletter Column */}
          <Grid item xs={12} md={3} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }
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
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 3, 
              opacity: 0.9,
              textAlign: { xs: 'center', md: 'left' },
              lineHeight: 1.7,
              fontSize: '0.95rem'
            }}>
              Subscribe to our newsletter for the latest updates, news and school announcements.
            </Typography>
            <Box 
              component="form" 
              onSubmit={handleSubscribe}
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: 2,
                maxWidth: '350px',
                mx: isMobile ? 'auto' : 'unset',
                '&:focus-within button': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }
              }}
            >
              <Box sx={{ 
                width: '100%',
                position: 'relative',
                mb: 2
              }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    '&:focus': {
                      borderColor: 'secondary.main',
                      boxShadow: '0 0 0 3px rgba(255,193,7,0.2)'
                    },
                    '&::placeholder': {
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.9em'
                    }
                  }}
                  required
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    bgcolor: 'secondary.main',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                    'input:focus ~ &': {
                      transform: 'scaleX(1)'
                    }
                  }}
                />
              </Box>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                  color: 'rgba(0, 0, 0, 0.9)',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  },
                  '&:disabled': {
                    opacity: 0.7,
                    cursor: 'not-allowed',
                    transform: 'none !important',
                    boxShadow: 'none !important'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255,255,255,0.2)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover::after': {
                    transform: 'translateX(100%)',
                  }
                }}
              >
                {loading ? (
                  <>
                    <CircularProgress size={16} color="inherit" thickness={5} />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ 
          my: 4, 
          bgcolor: 'rgba(255,255,255,0.1)',
          height: '1px',
          width: '100%'
        }} />

        {/* Copyright */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          width: '100%',
          pt: 2
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
