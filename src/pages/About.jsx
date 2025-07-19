import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{ marginBottom: '10px' }}>About Us</h1>
        <div style={{ 
          background: '#1976d2',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '25px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)'
        }}>
          Transforming Lives
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Our History</h2>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div>
            <h3 style={{ color: '#1976d2' }}>A Journey of Excellence</h3>
            <p>Established in 2015, Transformer Blessed Junior School was founded on the principles of academic excellence, character development, and holistic growth. Our journey began with a vision to create an educational institution that would not only nurture academic prowess but also shape well-rounded individuals ready to face the challenges of the modern world.</p>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Early Years</h3>
            <p>In our formative years, we focused on building a strong foundation of quality education, modern teaching methodologies, and a nurturing learning environment. We introduced innovative programs that combined traditional academic rigor with modern educational practices, emphasizing critical thinking, creativity, and problem-solving skills.</p>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Growth and Development</h3>
            <p>Over the years, we've seen remarkable growth in both our student body and our educational offerings. We've expanded our curriculum to include specialized programs in STEM, arts, and sports, while maintaining our commitment to academic excellence. Our dedicated faculty members, many of whom hold advanced degrees and professional certifications, have played a crucial role in our success.</p>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Community Impact</h3>
            <p>Our school has become an integral part of the local community, actively engaging in community service projects and fostering strong relationships with parents and local organizations. We believe in giving back to society and instilling this value in our students from a young age.</p>
          </div>

          <div>
            <h3 style={{ color: '#1976d2' }}>Looking Forward</h3>
            <p>As we continue to grow and evolve, our commitment to providing exceptional education remains unwavering. We are constantly innovating and adapting to meet the changing needs of our students and the broader educational landscape. Our goal is to prepare each student for success in an ever-changing world while preserving our core values of excellence, integrity, and community service.</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <div style={{ 
          display: 'flex',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ flex: 1 }}>
            <h2>Our Vision</h2>
            <p>To develop the talent of every pupil to its maximum potential.</p>
            <p>We are committed to nurturing excellence in every student, providing them with the tools and opportunities to reach their highest potential academically, personally, and socially.</p>
          </div>
          <div style={{ 
            flex: 1,
            position: 'relative'
          }}>
            <img 
              src="/public/selfie.jpeg" 
              alt="School Vision" 
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'rgba(0, 0, 0, 0.7)',
              padding: '20px',
              color: 'white',
              borderRadius: '0 0 8px 8px'
            }}>
              <h3>Our Commitment</h3>
              <p>Nurturing excellence in every student</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div>
            <h2 style={{ color: '#1976d2' }}>Core Values</h2>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginTop: '20px'
            }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#1976d2',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>❤️</div>
                <h3 style={{ color: '#1976d2' }}>Love</h3>
                <p style={{ color: '#666' }}>Caring for each other and our community</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#1976d2',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>🤝</div>
                <h3 style={{ color: '#1976d2' }}>Respect</h3>
                <p style={{ color: '#666' }}>Honor and value every individual</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#1976d2',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>✅</div>
                <h3 style={{ color: '#1976d2' }}>Honesty</h3>
                <p style={{ color: '#666' }}>Always truthful in our actions</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#1976d2',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>🛡️</div>
                <h3 style={{ color: '#1976d2' }}>Integrity</h3>
                <p style={{ color: '#666' }}>Upholding moral principles</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Mission</h2>
            <p>To provide a nurturing environment where students can develop their full potential academically, socially, and spiritually.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
