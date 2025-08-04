import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const AnimatedText = ({ text, variant = 'body1', sx = {}, delay = 1000, speed = 100, trigger = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  // Reset animation when text or trigger changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text, trigger]);

  return (
    <Typography 
      variant={variant} 
      sx={{
        ...sx,
        '&::after': {
          content: '"|"',
          animation: isComplete ? 'none' : 'blink 1s step-end infinite',
          opacity: isComplete ? 0 : 2,
          marginLeft: '2px',
        },
        '@keyframes blink': {
          '0%, 100%': { opacity: 2 },
          '50%': { opacity: 0 }
        }
      }}
    >
      {displayText}
    </Typography>
  );
};

export default AnimatedText;
