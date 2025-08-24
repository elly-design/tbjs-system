import React from 'react';
import { 
  Box,
  Container, 
  Grid, 
  Paper, 
  Typography,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';
import { Person, Star } from '@mui/icons-material';

const TestimonialCard = ({ name, role, content, delay }) => {
  return (
    <Grid item xs={12} md={4}>
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.95 }}
      whileInView={{ 
        x: 0, 
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.8,
          delay: delay || 0.1,
          staggerChildren: 0.1
        }
      }}
      viewport={{ once: true, margin: '-50px' }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'reverse'
      }}
    >
      <Paper 
        component={motion.div}
        whileHover={{
          y: -5,
          transition: { type: 'spring', stiffness: 400, damping: 10 }
        }}
        sx={{
          borderRadius: '12px',
          p: 3,
          height: '100%',
          '&:hover': {
            boxShadow: '0 15px 50px rgba(0,0,0,0.1)'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: '#e3f2fd', mr: 2 }}>
            <Person color="primary" />
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a237e' }}>
              {name}
            </Typography>
            <Box sx={{ display: 'flex', mt: 0.5 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} sx={{ color: '#ffc107', fontSize: '1.1rem' }} />
              ))}
            </Box>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ color: '#555', mb: 2, lineHeight: 1.7 }}>
          {content}
        </Typography>
        <Typography variant="caption" sx={{ color: '#666', fontStyle: 'italic' }}>
          {role}
        </Typography>
      </Paper>
    </motion.div>
  </Grid>
  );
};

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Testimonials Section */}
      <Box sx={{ mb: 8, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a237e' }}>
            What Parents Say
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: '700px', mx: 'auto' }}>
            Hear from the families who have experienced the Transformer Blessed Junior School difference.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <TestimonialCard 
            name="Sarah M." 
            role="Parent of Grade 3 Student"
            content="Transformer Blessed Junior School has been a blessing for our family. The teachers are dedicated and truly care about each child's development. My daughter has grown so much since joining!"
            delay={0.1}
          />
          <TestimonialCard 
            name="James K." 
            role="Parent of Grade 5 Student"
            content="The school's focus on both academic excellence and character development is impressive. My son looks forward to school every day and has developed a real love for learning."
            delay={0.2}
          />
          <TestimonialCard 
            name="Amina J." 
            role="Parent of Grade 2 Student"
            content="The teachers at Transformer Blessed Junior School go above and beyond. They've created a nurturing environment where my child feels valued and encouraged to reach their full potential."
            delay={0.3}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
