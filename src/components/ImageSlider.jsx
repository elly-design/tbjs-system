import React, { useState, useEffect } from 'react';

import { Box, Typography, CircularProgress, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import './ImageSlider.css';



const ImageSlider = () => {

  const images = [
    '/public/swimming%20pool.jpeg',
    '/public/Assembly2.jpeg',
    '/public/Wildwaters%20tour.png',
    '/public/selfie.jpeg'
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
        height: 600,
        overflow: 'hidden',
        borderRadius: 4,
        mb: 4,
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)'
        }
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
      ) : isLoading ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 4,
            transition: 'all 0.3s ease'
          }}
        >
          <img
            src={images[currentIndex]}
            alt="School Activity"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
              opacity: 1,
              transition: 'all 0.3s ease-in-out'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              textAlign: 'center',
              px: 6,
              py: 10,
              backdropFilter: 'blur(4px)',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%)',
              borderRadius: 4,
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)',
              width: '80%',
              maxWidth: '800px',
              color: 'white'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 700,
                lineHeight: 1.2,
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
                letterSpacing: '0.02em',
                color: 'white',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 1.2s ease-out 0.4s forwards'
              }}
            >
              Welcome to Transformer Blessed Junior School
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                opacity: 0.9,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                color: 'white',
                maxWidth: '600px',
                mx: 'auto',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 1.2s ease-out 0.6s forwards'
              }}
            >
              Where Excellence Meets Opportunity. Discover a world of learning, growth and endless possibilities at our premier educational institution.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'primary.main',
                textTransform: 'none',
                px: 6,
                py: 3,
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                },
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 1.2s ease-out 0.8s forwards'
              }}
              endIcon={<ArrowForward sx={{ ml: 1 }} />}
            >
              Discover More
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
