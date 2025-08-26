import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, TextField, Button, Snackbar, Alert } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { supabase } from '../config/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box 
        sx={{ 
          textAlign: 'center', 
          mb: 6,
          background: 'linear-gradient(135deg, #f5f9ff 0%, #e3f2fd 100%)',
          p: 4,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}
      >
        <Typography 
          variant="h3" 
          component="h1"
          sx={{
            fontWeight: 700,
            color: '#0d47a1',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontFamily: '"Poppins", "Roboto", sans-serif'
          }}
        >
          Need any help?
        </Typography>
        <Typography 
          variant="h4" 
          component="h2"
          sx={{
            fontWeight: 600,
            color: '#1976d2',
            mb: 3,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontFamily: '"Poppins", "Roboto", sans-serif'
          }}
        >
          Get in touch with us
        </Typography>
        <Typography 
          variant="h6" 
          component="p"
          sx={{
            color: '#455a64',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.7,
            fontSize: { xs: '1rem', md: '1.1rem' },
            mb: 3
          }}
        >
          At <strong style={{ color: '#0d47a1' }}>Transformer Blessed Junior School</strong>, we value communication and collaboration. 
          Whether you have questions, feedback or need assistance, we're here to help! 
          Feel free to reach out through any of the following channels:
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                color: '#0d47a1',
                fontWeight: 600,
                borderBottom: '2px solid #1976d2',
                display: 'inline-block',
                pb: 1,
                mb: 3
              }}
            >
              Send us a Message
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  mb: 3,
                  p: 2,
                  borderRadius: 1
                }}
              >
                <LocationOn sx={{ 
                  fontSize: 28, 
                  color: '#1976d2',
                  mr: 2,
                  mt: 0.5
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Our Location
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Mombasa, Kenya
                  </Typography>
                </Box>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  mb: 3,
                  p: 2,
                  borderRadius: 1
                }}
              >
                <Phone sx={{ 
                  fontSize: 28, 
                  color: '#1976d2',
                  mr: 2,
                  mt: 0.5
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Call Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Office: +254 722 983 388
                  </Typography>
                </Box>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  mb: 3,
                  p: 2,
                  borderRadius: 1
                }}
              >
                <Email sx={{ 
                  fontSize: 28, 
                  color: '#1976d2',
                  mr: 2,
                  mt: 0.5
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Email Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    transformerblessedjnr@gmail.com
                  </Typography>
                </Box>
              </Box>
              
              
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                color: '#0d47a1',
                fontWeight: 600,
                borderBottom: '2px solid #1976d2',
                display: 'inline-block',
                pb: 1,
                mb: 3
              }}
            >
              Send us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                variant="outlined"
                margin="normal"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                variant="outlined"
                margin="normal"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                name="subject"
                label="Subject"
                variant="outlined"
                margin="normal"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                name="message"
                label="Message"
                variant="outlined"
                margin="normal"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                fullWidth
                sx={{ 
                  mt: 2,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 1,
                  boxShadow: '0 4px 6px rgba(25, 118, 210, 0.2)',
                  '&:hover': {
                    boxShadow: '0 6px 10px rgba(25, 118, 210, 0.3)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
