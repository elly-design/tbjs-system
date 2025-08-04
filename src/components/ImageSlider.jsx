import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import './ImageSlider.css';
import AnimatedText from './AnimatedText';

const ImageSlider = () => {

  const images = [
    '/swimming pool.jpeg',
    '/monday.jpeg',
    '/tuesday.jpeg',
    '/ppe.jpeg',
  ].map(img => img.replace(' ', '%20'));  // URL encode spaces in filenames

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    
    console.log('Current index:', currentIndex);
    const imagePath = images[currentIndex];
    console.log('Trying to load image:', imagePath);
    
    const loadImage = () => {
      const img = new Image();
      img.src = imagePath;
      console.log('Image source set to:', img.src);
      
      img.onload = () => {
        console.log('Image loaded successfully:', imagePath);
        console.log('Image dimensions:', img.width, 'x', img.height);
        setCurrentImage(imagePath);
        setIsLoading(false);
        setError(null);
      };
      
      img.onerror = (error) => {
        console.error('Image load error:', error);
        console.error('Failed to load image:', imagePath);
        console.error('Full image URL:', new URL(imagePath, window.location.origin).href);
        setIsLoading(false);
        setError(`Failed to load image: ${imagePath}`);
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
        height: { xs: '90vh', sm: '90vh', md: '85vh' },
        maxHeight: '1200px',
        minHeight: '500px',
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
                backgroundPosition: 'center 30%',  // Adjust vertical position to show people
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${image})`,
                backgroundAttachment: 'fixed',
                backgroundColor: '#f5f5f5',
                objectFit: 'cover',
                objectPosition: 'center 30%',  // Match background position for better consistency
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                willChange: 'opacity',
                '@media (max-width: 900px)': {
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundAttachment: 'scroll',
                },
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
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
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
            <AnimatedText
              text="Welcome to Transformer Blessed Junior School"
              variant="h2"
              speed={100} // Standard typing speed (~50-100ms per character)
              trigger={currentIndex} // Reset animation when currentIndex changes
              sx={{
                fontSize: { xs: '2.2rem', sm: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
                minHeight: { xs: '6.6rem', sm: '8.4rem' }, // Prevent layout shift
                display: 'inline-block',
                textAlign: 'center',
                width: '100%'
              }}
            />
            <AnimatedText
              text="Raising Godly Leaders, Impacting Generations !"
              variant="h5"
              speed={40} // Slightly faster than heading but still readable
              delay={1000} // Shorter delay after heading starts
              trigger={currentIndex} // Reset animation when currentIndex changes
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                mb: 4,
                fontWeight: 400,
                minHeight: { xs: '4.8rem', sm: '6rem' }, // Prevent layout shift
                display: 'inline-block',
                textAlign: 'center',
                width: '100%'
              }}
            />
            
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
