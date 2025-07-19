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

      {/* Vision Section */}
      <div style={{ margin: '60px 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          backgroundColor: '#f8faff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(25, 118, 210, 0.1)'
        }}>
          {/* Vision Content */}
          <div style={{ 
            padding: '50px',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #1976d2, #64b5f6)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '20px',
              boxShadow: '0 4px 15px rgba(25, 118, 210, 0.2)'
            }}>
              Our Vision
            </div>
            
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#1a237e',
              margin: '15px 0 25px',
              lineHeight: '1.3',
              position: 'relative',
              paddingBottom: '15px'
            }}>
              Unlocking Every Child's <span style={{ color: '#1976d2' }}>Full Potential</span>
              <span style={{
                display: 'block',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
                marginTop: '15px',
                borderRadius: '2px'
              }}></span>
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#444',
              lineHeight: '1.8',
              marginBottom: '25px'
            }}>
              To develop the talent of every pupil to its maximum potential through innovative education and personalized learning experiences.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '15px',
              marginTop: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(25, 118, 210, 0.1)',
                padding: '10px 15px',
                borderRadius: '8px',
                minWidth: '200px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(25, 118, 210, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  color: '#1976d2',
                  fontSize: '1.2rem'
                }}>
                  🎯
                </div>
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1a237e',
                    fontSize: '0.9rem'
                  }}>Personalized Learning</div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#555'
                  }}>Tailored to each child</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(25, 118, 210, 0.1)',
                padding: '10px 15px',
                borderRadius: '8px',
                minWidth: '200px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(25, 118, 210, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  color: '#1976d2',
                  fontSize: '1.2rem'
                }}>
                  🌟
                </div>
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1a237e',
                    fontSize: '0.9rem'
                  }}>Holistic Growth</div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#555'
                  }}>Mind, body & spirit</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision Image */}
          <div style={{
            position: 'relative',
            height: '100%',
            minHeight: '500px',
            overflow: 'hidden'
          }}>
            <img 
              src="/public/selfie.jpeg" 
              alt="School Vision" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.97)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(to top, rgba(25, 118, 210, 0.8), transparent)',
              padding: '30px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '10px',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>Our Commitment</div>
              <p style={{
                fontSize: '1rem',
                opacity: '0.9',
                margin: '0',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}>Nurturing excellence in every student through quality education and character development</p>
            </div>
            
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(5px)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <span style={{ fontSize: '1.5rem' }}>✨</span>
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

        </div>
      </div>

      {/* Mission Section */}
      <div style={{ marginTop: '40px' }}>
        <div style={{ 
          padding: '40px',
          background: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          borderLeft: '5px solid #1976d2',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
          }
        }}>
          <div style={{ 
            display: 'inline-block',
            background: '#1976d2',
            color: 'white',
            padding: '10px 25px',
            borderRadius: '30px',
            marginBottom: '20px',
            fontSize: '1.1rem',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)'
          }}>
            Our Mission
          </div>
          <h2 style={{ 
            color: '#2c3e50',
            marginBottom: '20px',
            fontSize: '2rem',
            fontWeight: '700',
            lineHeight: '1.3'
          }}>
            Nurturing Potential, Building Futures
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            At Transformer Blessed Junior School, we are committed to providing a nurturing and inclusive environment where every student can develop their full potential academically, socially and spiritually. We foster a love for learning, encourage personal growth, and prepare our students to become responsible global citizens who contribute positively to their communities.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              maxWidth: '300px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#1976d2',
                marginBottom: '15px'
              }}>📚</div>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '10px'
              }}>Academic Excellence</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>Delivering quality education that challenges and inspires students to achieve their highest potential.</p>
            </div>
            
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              maxWidth: '300px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#1976d2',
                marginBottom: '15px'
              }}>🌱</div>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '10px'
              }}>Holistic Development</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>Nurturing the intellectual, emotional, social and physical growth of every student.</p>
            </div>
            
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              flex: '1',
              minWidth: '200px',
              maxWidth: '300px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#1976d2',
                marginBottom: '15px'
              }}>🌍</div>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '10px'
              }}>Community Engagement</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>Building strong partnerships with families and the community to support student success.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
