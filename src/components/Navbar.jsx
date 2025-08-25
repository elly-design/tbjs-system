import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
  Container
} from '@mui/material';
import { 
  Link as RouterLink,
  useNavigate
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { SvgIcon } from '@mui/material';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Clubs', path: '/clubs' },
    { text: 'Admission', path: '/admission' },
    { text: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    if (path === '/#clubs') {
      // If on home page, scroll to section
      if (window.location.pathname === '/') {
        const element = document.getElementById('clubs');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on home page, navigate to home first
        navigate('/');
        // Use a small timeout to ensure the page has loaded before scrolling
        setTimeout(() => {
          const element = document.getElementById('clubs');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{
      bgcolor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            mr: 2
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'white'
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt=""
              sx={{
                height: { xs: 48, sm: 64 },
                width: 'auto',
                mr: 2,
                display: 'block',
                objectFit: 'contain',
                filter: 'brightness(1)',
                transition: 'none'
              }}
            />
            <Typography 
              variant="h6" 
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
            </Typography>
          </Box>
        </Box>
        
        {isMobile ? (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              ml: 2,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            {mobileMenuOpen ? (
              <CloseIcon sx={{ color: 'white' }} />
            ) : (
              <SvgIcon sx={{
                color: 'white',
                '& path': {
                  transition: 'all 0.3s ease'
                }
              }}>
                <path
                  d="M3 18h18v-2H3"
                  stroke="#004d99"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.9"
                />
                <path
                  d="M3 12h18v-2H3"
                  stroke="#004d99"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                <path
                  d="M3 6h18v-2H3"
                  stroke="#004d99"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.7"
                />
              </SvgIcon>
            )}
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button 
                key={item.path}
                variant="text"
                component={RouterLink} 
                to={item.path}
                sx={{
                  color: '#1976d2',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    bottom: '8px',
                    left: '50%',
                    backgroundColor: '#1976d2',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '60%',
                    }
                  },
                  textTransform: 'none',
                  fontSize: '1rem',
                  px: 3,
                  py: 1.5,
                  '&.MuiButton-root.Mui-selected': {
                    '&::after': {
                      width: '60%',
                    }
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '280px',
            boxSizing: 'border-box',
            bgcolor: 'white',
            color: '#1976d2',
            p: 3,
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              button
              onClick={() => handleMenuItemClick(item.path)}
              sx={{
                mb: 1,
                borderRadius: 2,
                color: '#1976d2',
                position: 'relative',
                '&:hover': {
                  backgroundColor: 'transparent',
                  transform: 'translateX(5px)',
                  '&::after': {
                    width: '60%',
                  }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '8px',
                  left: '50%',
                  backgroundColor: '#1976d2',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  '&::after': {
                    width: '60%',
                  }
                }
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: 'inherit',
                  textAlign: 'center',
                  width: '100%',
                  '&.Mui-selected': {
                    color: 'inherit',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
