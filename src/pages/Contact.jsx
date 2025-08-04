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
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Contact Us
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ fontSize: 24, mr: 1 }} />
                <Typography>
                  Mombasa, Kenya
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ fontSize: 24, mr: 1 }} />
                <Typography>
                  Admission:+254727492055<br />Office: +254722983388
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ fontSize: 24, mr: 1 }} />
                <Typography>
                  transformerblessedjnr@gmail.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
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
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
                type="submit"
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
