import React, { useState, useEffect } from 'react';
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
  Container,
  Hidden,
  Divider
} from '@mui/material';
import { 
  Link as RouterLink,
  useNavigate,
  useLocation
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIcon } from '@mui/material';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { text: 'Home', path: '/',  },
    { text: 'About Us', path: '/about', },
    { text: 'Clubs', path: '/clubs',  },
    { text: 'Admission', path: '/admission',  },
    { text: 'Contact', path: '/contact', }
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
    <AppBar 
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)',
        py: scrolled ? 0.5 : 1,
      }}
    >
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
        
        <Hidden mdUp>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              ml: 2,
              color: '#1976d2',
              '&:hover': {
                bgcolor: 'rgba(25, 118, 210, 0.08)',
              }
            }}
          >
            {mobileMenuOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 0.5, sm: 1, lg: 2 },
            ml: { sm: 2, md: 3 },
            alignItems: 'center'
          }}>
            {menuItems.map((item) => (
              <Button 
                key={item.path}
                variant="text"
                component={RouterLink} 
                to={item.path}
                sx={{
                  color: '#1976d2',
                  position: 'relative',
                  minWidth: 'auto',
                  px: { xs: 1.5, sm: 2, md: 2.5 },
                  py: 1.5,
                  fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  textTransform: 'none',
                  borderRadius: 2,
                  transition: 'all 0.2s ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: location.pathname === item.path ? '70%' : '0',
                    height: '3px',
                    bottom: '8px',
                    left: '50%',
                    backgroundColor: '#1976d2',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateX(-50%)',
                    borderRadius: '3px',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    transform: 'translateY(-1px)',
                    '&::after': {
                      width: '70%',
                      backgroundColor: '#1565c0',
                    }
                  },
                  '&.Mui-selected, &.Mui-focusVisible': {
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '70%',
                      backgroundColor: '#1565c0',
                    }
                  }
                }}
              >
                <Box component="span" sx={{ 
                  mr: 1,
                  display: { xs: 'none', lg: 'inline-block' },
                  fontSize: '1.1em'
                }}>
                  {item.icon}
                </Box>
                {item.text}
              </Button>
            ))}
          </Box>
        </Hidden>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        transitionDuration={250}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          },
          '& .MuiDrawer-paper': {
            width: { xs: '85%', sm: '320px' },
            maxWidth: '100%',
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            p: 2,
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
            overflow: 'hidden',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
        }}>
          <Typography variant="h6" component="div" sx={{ 
            fontWeight: 700,
            color: '#1976d2',
            fontSize: '1.25rem'
          }}>
            Menu
          </Typography>
          <IconButton 
            onClick={handleDrawerToggle}
            size="large"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              button
              component={RouterLink}
              to={item.path}
              onClick={() => handleMenuItemClick(item.path)}
              sx={{
                mb: 1,
                borderRadius: 2,
                px: 2,
                py: 1.5,
                color: location.pathname === item.path ? '#1976d2' : 'text.primary',
                backgroundColor: location.pathname === item.path ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  transform: 'translateX(4px)',
                  '& .MuiListItemText-primary': {
                    color: '#1976d2',
                  },
                  '& .menu-icon': {
                    transform: 'scale(1.2)',
                  }
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                  '& .MuiListItemText-primary': {
                    color: '#1976d2',
                    fontWeight: 600,
                  },
                }
              }}
            >
              <Box component="span" className="menu-icon" sx={{
                mr: 2,
                fontSize: '1.4rem',
                transition: 'transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
              }}>
                {item.icon}
              </Box>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontSize: '1rem',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    transition: 'all 0.2s ease',
                  }
                }}
              />
              {location.pathname === item.path && (
                <Box 
                  component="span" 
                  sx={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#1976d2',
                    ml: 1,
                    opacity: 0.8
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
