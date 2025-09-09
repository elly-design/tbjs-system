import React, { useState, useEffect } from 'react';
import { Modal, Card, CardContent, Avatar, IconButton, Box, Typography, Button } from '@mui/material';
import { Close as CloseIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

// Teacher testimonials data
const teacherTestimonials = [
  {
    id: 1,
    name: ' Bwire Charles',
    position: 'Headteacher',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Teaching at Transformer Blessed has been an incredibly rewarding experience. The school\'s commitment to academic excellence and character development creates the perfect environment for both students and teachers to thrive.',
    highlight: 'The most rewarding part is seeing students develop a genuine love for learning.'
  },
  {
    id: 2,
    name: 'Michael Omondi',
    position: 'Science Department Head',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The innovative teaching methods and supportive community at Transformer Blessed make it a wonderful place to teach. I\'m constantly inspired by my students\' curiosity and enthusiasm for science.',
    highlight: 'Our hands-on approach to science education helps students understand complex concepts through practical application.'
  },
  {
    id: 3,
    name: 'Dorcas Abiero',
    position: 'Senior Teacher',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    quote: 'What sets our school apart is our strong emphasis on discipline, hygiene and a conducive learning environment. We don’t just enforce rules; we cultivate responsible, respectful students in a clean and well-organized space where every student can thrive.',
    highlight: 'Watching students grow into disciplined and self-aware individuals in a safe, clean and supportive environment is truly rewarding.'
  },
  {
    id: 4,
    name: 'Evans Owino',
    position: 'Games Master',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: 'Our sports program goes beyond physical development. We teach teamwork, discipline, and resilience - skills that serve students both on and off the field.',
    highlight: 'The transformation in students\' confidence through sports is remarkable.'
  }
];

const TestimonialCard = ({ testimonial, onClose, onBack }) => (
  <Card sx={{ 
    maxWidth: 800, 
    width: '90%',
    mx: 'auto',
    my: 4,
    overflow: 'visible',
    position: 'relative',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    '&:hover': {
      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
      transform: 'translateY(-4px)',
      transition: 'all 0.3s ease-in-out'
    },
    transition: 'all 0.3s ease-in-out'
  }}>
    <Box sx={{ 
      position: 'absolute',
      top: 16,
      left: 16,
      zIndex: 2,
      display: 'flex',
      gap: 1
    }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        size="small"
        sx={{
          textTransform: 'none',
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.04)'
          }
        }}
      >
        Back to Team
      </Button>
    </Box>
    <IconButton 
      onClick={onClose}
      sx={{
        position: 'absolute',
        right: 16,
        top: 16,
        zIndex: 2,
        backgroundColor: 'rgba(255,255,255,0.9)',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.05)'
        },
        transition: 'all 0.2s ease-in-out'
      }}
      aria-label="Close testimonial"
    >
      <CloseIcon />
    </IconButton>
    <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        p: 4
      }}>
        <Avatar 
          src={testimonial.avatar} 
          alt={testimonial.name}
          sx={{ 
            width: 150, 
            height: 150,
            border: '4px solid #1976d2',
            mb: { xs: 3, md: 0 },
            mr: { md: 4 }
          }}
        />
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h5" component="h3" sx={{ 
            color: '#1976d2',
            mb: 1,
            fontWeight: 600
          }}>
            {testimonial.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ 
            mb: 2,
            fontStyle: 'italic'
          }}>
            {testimonial.position} • {testimonial.experience} experience
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.7,
            mb: 3
          }}>
            "{testimonial.quote}"
          </Typography>
          <Box sx={{
            p: 2,
            backgroundColor: 'rgba(25, 118, 210, 0.05)',
            borderRadius: 2,
            borderLeft: '4px solid #1976d2'
          }}>
            <Typography variant="body1" sx={{ 
              fontStyle: 'italic',
              fontWeight: 500
            }}>
              {testimonial.highlight}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const TeacherTestimonials = ({ open, onClose, initialIndex = 0 }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  // Handle browser back button
  useEffect(() => {
    if (open) {
      // Add a new entry to the history stack
      window.history.pushState({ modalOpen: true }, '');
      
      const handlePopState = (event) => {
        if (event.state?.modalOpen) {
          onClose();
        }
      };
      
      window.addEventListener('popstate', handlePopState);
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [open, onClose]);
  
  const handleClose = () => {
    // Close the modal and restore scrolling
    onClose();
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    
    // Small delay to ensure modal is fully closed
    setTimeout(() => {
      // Allow any pending state updates to complete
      requestAnimationFrame(() => {
        // Clean up any leftover styles
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.documentElement.style.overflow = '';
      });
    }, 50);
  };

  const handleBack = () => {
    // Simply close the modal and restore scrolling
    onClose();
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    
    // If not on the about page, navigate to about page
    if (location.pathname !== '/about') {
      navigate('/about#our-team');
    }
    
    // Small delay to ensure modal is fully closed
    setTimeout(() => {
      // Allow any pending state updates to complete
      requestAnimationFrame(() => {
        // Remove any leftover modal styles
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.documentElement.style.overflow = '';
        
        // If we're on the about page, just let the user continue reading
        if (location.pathname === '/about') {
          // Optional: Slight scroll up to ensure content is not hidden under header
          const currentScroll = window.scrollY;
          if (currentScroll > 100) {
            window.scrollTo({
              top: currentScroll - 80, // Adjust this value based on your header height
              behavior: 'smooth'
            });
          }
        }
      });
    }, 50);
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => 
      prev === teacherTestimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? teacherTestimonials.length - 1 : prev - 1
    );
  };
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="teacher-testimonial-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        padding: 2,
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        },
        '&:focus': {
          outline: 'none'
        }
      }}
    >
      <Box sx={{ width: '100%', outline: 'none' }}>
          <TestimonialCard 
            testimonial={teacherTestimonials[currentIndex]} 
            onClose={handleClose}
            onBack={handleBack}
          />
        
        {/* Navigation Arrows */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          sx={{
            position: 'fixed',
            left: { xs: 10, md: 30 },
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            width: 50,
            height: 50,
            '&:hover': {
              backgroundColor: '#f5f5f5'
            }
          }}
        >
          ←
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          sx={{
            position: 'fixed',
            right: { xs: 10, md: 30 },
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            width: 50,
            height: 50,
            '&:hover': {
              backgroundColor: '#f5f5f5'
            }
          }}
        >
          →
        </IconButton>
        
        {/* Dots Indicator */}
        <Box sx={{ 
          position: 'fixed',
          bottom: 20,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 1
        }}>
          {teacherTestimonials.map((_, index) => (
            <Box
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(index);
              }}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#1976d2' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)'
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default TeacherTestimonials;
