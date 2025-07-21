import React, { useState, useEffect } from 'react';

import { Box, Typography, CircularProgress, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import './ImageSlider.css';

const ImageSlider = () => {

  const images = [
    '/public/swimming%20pool.jpeg',
    '/public/monday.jpeg',
    '/public/tuesday.jpeg',
    '/public/ppe.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Current index:', currentIndex);
    console.log('Image path:', images[currentIndex]);
    
    const loadImage = () => {
      const img = new Image();
      img.src = images[currentIndex];
      img.onload = () => {
        console.log('Image loaded successfully:', images[currentIndex]);
        setIsLoading(false);
        setError(null);
      };
      img.onerror = (error) => {
        console.error('Image load error:', error);
        console.error('Failed to load image:', images[currentIndex]);
        setIsLoading(false);
        setError(`Failed to load image: ${images[currentIndex]}`);
      };
    };

    setIsLoading(true);
    loadImage();
  }, [currentIndex]);

  useEffect(() => {
    // Preload all images on component mount
    const preloadImages = () => {
      images.forEach((imagePath) => {
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {
          console.log(`Image loaded successfully: ${imagePath}`);
          console.log('Image dimensions:', img.width, img.height);
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${imagePath}`);
          setError(`Failed to load image: ${imagePath}`);
          console.error('Image path attempted:', imagePath);
        };
      });
    };

    preloadImages();

    // Change image every 5 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '80vh', sm: 600 },
        minHeight: '400px',
        overflow: 'hidden',
        borderRadius: { xs: 0, sm: 4 },
        mb: 4,
        boxShadow: { xs: 'none', sm: '0 8px 24px rgba(0,0,0,0.15)' },
        width: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      {error ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'red'
          }}
        >
          <Typography>{error}</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: currentIndex === index ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${image})`,
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                willChange: 'opacity',
              }}
            />
          ))}
          
          {/* Subtle gradient overlay for better text visibility */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          
          {/* Content */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              textAlign: 'center',
              px: { xs: 3, sm: 6 },
              py: { xs: 4, sm: 10 },
              width: '100%',
              maxWidth: '1200px',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', sm: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Welcome to Transformer Blessed Junior School
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                mb: 4,
                fontWeight: 400,
              }}
            >
              Where Excellence Meets Opportunity. Discover a world of learning, growth and endless possibilities at our premier educational institution.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Discover More
            </Button>
          </Box>
          
          {/* Loading indicator */}
          {isLoading && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
              }}
            >
              <CircularProgress color="primary" />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
