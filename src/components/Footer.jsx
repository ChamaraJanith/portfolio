import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      background: 'rgba(5, 8, 22, 0.8)', 
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(0, 212, 255, 0.2)',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ 
            fontFamily: 'Michroma, sans-serif', 
            fontSize: '24px', 
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #fff, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            CHAMARA ABEYRATHNA
          </h2>
          <p style={{ color: '#aaa', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>
            Exploring the Infinite Possibilities of Code
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            {['About', 'Work', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                style={{ color: '#f3f3f3', textDecoration: 'none', fontSize: '14px', fontWeight: '600', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.target.style.color = '#00d4ff'}
                onMouseOut={(e) => e.target.style.color = '#f3f3f3'}
              >
                {item}
              </a>
            ))}
          </div>
          
          <p style={{ color: '#555', fontSize: '12px' }}>
            © 2025 • Built with React, Three.js & Passion • Journeying from Biology to Technology
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
