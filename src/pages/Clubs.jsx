import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardActionArea, 
  CardContent, 
  Chip,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack, Nature, Public, Pool, School, SportsMartialArts as SportsMartialArtsIcon } from '@mui/icons-material';

const Clubs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const clubs = [
    {
      title: 'Taekwondo Club',
      description: 'Master the Korean martial art of Taekwondo with our expert instructors. Students learn self-defense techniques, develop discipline and improve physical fitness through structured training. Our program focuses on the five tenets of Taekwondo: courtesy, integrity, perseverance, self-control and indomitable spirit. Students have opportunities to progress through belt ranks and participate in local competitions.',
      image: '/taekwondo4.jpg',
      fallbackImage: 'https://source.unsplash.com/random/800x600/?taekwondo',
      tags: ['Self-Defense', 'Discipline', 'Fitness', 'Martial Arts']
    },
    {
      title: 'Scouts Club',
      description: 'Join our Scouts program to develop leadership, survival skills and community service values. Our Scouts engage in exciting outdoor adventures, learn essential life skills and participate in community projects that make a real difference.',
      image: '/scouts.jpg',
      fallbackImage: 'https://source.unsplash.com/random/800x600/?scouts',
      tags: ['Leadership', 'Outdoor Skills', 'Community Service', 'Teamwork']
    },
    {
      title: 'Swimming Club',
      description: 'Dive into excellence with our Swimming Club, where students of all skill levels can improve their swimming techniques, build endurance and learn water safety. Our program focuses on both competitive swimming and recreational enjoyment of the water.',
      image: '/swimming pool.jpeg',
      fallbackImage: 'https://source.unsplash.com/random/800x600/?swimming',
      tags: ['Competition', 'Fitness', 'Water Safety', 'Technique']
    },
    {
      title: 'Wildlife Club',
      description: 'Explore the wonders of nature and wildlife conservation with our Wildlife Club. Students learn about local ecosystems, participate in conservation projects and develop a deep appreciation for biodiversity through hands-on activities and field trips.',
      image: '/wildlife.jpeg',
      fallbackImage: 'https://source.unsplash.com/random/800x600/?wildlife',
      tags: ['Conservation', 'Outdoor Learning', 'Eco-Awareness']
    },
    {
      title: 'Debate Club',
      description: 'Hone your public speaking and critical thinking skills in our dynamic Debate Club. Students learn to construct persuasive arguments, think on their feet and engage in respectful discourse on a variety of topics.',
      image: '/debate.jpeg',
      fallbackImage: 'https://source.unsplash.com/random/800x600/?debate',
      tags: ['Public Speaking', 'Critical Thinking', 'Research', 'Teamwork']
    }
  ];
  
  const getIcon = (title) => {
    switch(title) {
      case 'Scouts Club':
        return <Nature sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />;
      case 'Swimming Club':
        return <Pool sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />;
      case 'Wildlife Club':
        return <Public sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />;
      case 'Debate Club':
        return <School sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />;
      case 'Taekwondo Club':
        return <SportsMartialArtsIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />;
      default:
        return null;
    }
  };
  
  const getTagColor = (index) => {
    const colors = [
      { bg: 'rgba(76, 175, 80, 0.1)', text: '#2e7d32' },
      { bg: 'rgba(0, 150, 136, 0.1)', text: '#00796b' },
      { bg: 'rgba(255, 152, 0, 0.1)', text: '#ef6c00' },
      { bg: 'rgba(233, 30, 99, 0.1)', text: '#c2185b' },
      { bg: 'rgba(156, 39, 176, 0.1)', text: '#7b1fa2' }
    ];
    return colors[index % colors.length];
  };
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip 
          label="Extracurricular" 
          color="primary" 
          sx={{ 
            mb: 2, 
            px: 2, 
            py: 1, 
            fontSize: '0.9rem',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
            color: 'white'
          }} 
        />
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            color: '#1a237e',
            fontSize: { xs: '2rem', sm: '2.5rem' },
            lineHeight: 1.2,
            mb: 2
          }}
        >
          Our School Clubs
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#555', 
            maxWidth: '700px',
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}
        >
          Fostering talents, skills and passions beyond the classroom
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {clubs.map((club, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card 
              elevation={3}
              sx={{ 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                },
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box
                  component="div"
                  sx={{
                    width: '100%',
                    height: { xs: '250px', sm: '300px', md: '350px' },
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component="img"
                    src={club.image}
                    alt={club.title}
                    onError={(e) => {
                      if (e.target.src !== club.fallbackImage) {
                        e.target.src = club.fallbackImage;
                      }
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
                    }}
                  />
                  <Box sx={{ 
                    position: 'absolute', 
                    bottom: 20, 
                    left: 20, 
                    zIndex: 2,
                    textAlign: 'left'
                  }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 700,
                        fontSize: isMobile ? '1.75rem' : '2.125rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        mb: 1
                      }}
                    >
                      {club.title}
                    </Typography>
                    <Box sx={{ 
                      height: '4px', 
                      width: '60px', 
                      background: theme.palette.primary.main,
                      mb: 2
                    }} />
                  </Box>
                </Box>
                
                <CardContent sx={{ 
                  p: 4, 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {getIcon(club.title)}
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 3, 
                      lineHeight: 1.7, 
                      fontSize: '1.05rem',
                      flexGrow: 1
                    }}
                  >
                    {club.description}
                  </Typography>
                  
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontWeight: 600,
                        mb: 2,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Key Focus Areas:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {club.tags.map((tag, tagIndex) => {
                        const color = getTagColor(tagIndex);
                        return (
                          <Chip 
                            key={tagIndex}
                            label={tag} 
                            sx={{ 
                              bgcolor: color.bg,
                              color: color.text,
                              fontWeight: 600,
                              fontSize: '0.8rem',
                              px: 1.5,
                              py: 0.5,
                              height: 'auto',
                              '& .MuiChip-label': {
                                py: 0.5
                              }
                            }} 
                          />
                        );
                      })}
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clubs;
