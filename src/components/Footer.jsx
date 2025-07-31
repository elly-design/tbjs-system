import React from 'react';
import { useState } from 'react';
import { Box, Typography, Container, Grid, Link, useTheme, useMediaQuery, Divider, Snackbar, Alert, CircularProgress } from '@mui/material';
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
          <Box component="span" display="block">Admission: +254722983388</Box>
          <Box component="span" display="block">Office: +254722362974</Box>
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
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', pt: 6, pb: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* School Info Column */}
          <Grid item xs={12} md={4} sx={{ mb: { xs: 3, md: 0 } }}>
            <Box 
              component="img" 
              src="/logo.png" 
              alt="Transformer Blessed Junior School Logo" 
              sx={{ 
                height: isMobile ? '70px' : '90px',
                width: 'auto', 
                mb: 2,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                display: 'block',
                mx: isMobile ? 'auto' : 'flex-start'
              }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 2,
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Transformer Blessed Junior School
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 3,
              textAlign: isMobile ? 'center' : 'left',
              maxWidth: '350px',
              mx: isMobile ? 'auto' : 'unset',
              opacity: 0.9
            }}>
              <Typography 
                variant="h5" 
                component="div"
                sx={{ 
                  fontFamily: '"Yu Gothic UI Semibold", sans-serif',
                  color: 'white',
                  fontWeight: 600,
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1.5rem', sm: '1.7rem' },
                  lineHeight: 1.3,
                  letterSpacing: '0.5px'
                }}
              >
                Transforming Lives
              </Typography>
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: isMobile ? 'center' : 'flex-start',
              mt: 3
            }}>
              {socialLinks.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  color="inherit"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {React.cloneElement(item.icon, { sx: { fontSize: 20 } })}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 50,
                height: 3,
                bgcolor: 'secondary.main',
                display: isMobile ? 'none' : 'block'
              },
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
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
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 50,
                height: 3,
                bgcolor: 'secondary.main',
                display: isMobile ? 'none' : 'block'
              },
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((item, index) => (
                <Box key={index} sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  maxWidth: '300px',
                  mx: isMobile ? 'auto' : 'unset',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <Box sx={{ color: 'secondary.main', mt: '2px' }}>
                    {item.icon}
                  </Box>
                  <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Newsletter Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 50,
                height: 3,
                bgcolor: 'secondary.main',
                display: isMobile ? 'none' : 'block'
              },
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 2, 
              opacity: 0.9,
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Subscribe to our newsletter for the latest updates and news.
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
              <Box sx={{ position: 'relative' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '4px',
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    '&:focus': {
                      borderColor: theme.palette.secondary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.secondary.main}40`
                    },
                    '&::placeholder': {
                      color: 'rgba(255,255,255,0.5)'
                    },
                    '&:disabled': {
                      opacity: 0.7,
                      cursor: 'not-allowed'
                    }
                  }}
                  required
                />
              </Box>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '12px 20px',
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.getContrastText(theme.palette.secondary.main),
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.8 : 1,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  '&:hover:not(:disabled)': {
                    backgroundColor: theme.palette.secondary.dark,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  },
                  '&:active:not(:disabled)': {
                    transform: 'translateY(0)',
                    boxShadow: 'none'
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
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          pt: 2
        }}>
          <Typography variant="body2" sx={{ opacity: 0.8, textAlign: 'center' }}>
            © {currentYear} Transformer Blessed Junior School. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ fontSize: '0.8rem', opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Privacy Policy
            </Link>
            <Link href="/terms" color="inherit" underline="hover" sx={{ fontSize: '0.8rem', opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
