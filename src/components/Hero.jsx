import React from 'react';
import { motion } from 'framer-motion';
import HologramCanvas from './canvas/Hologram';
import { stats, socials } from '../constants';
import myImg from '../images/mi.png';

const Hero = () => {
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: '80px' }}>
      <div style={{ 
        maxWidth: '1280px', 
        width: '100%',
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column-reverse', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)', 
        zIndex: 10,
        gap: 'clamp(2rem, 5vw, 4rem)'
      }} className="sm:flex-row">
        
        <div style={{ flex: '1', width: '100%', maxWidth: '600px' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', marginTop: '1.25rem' }} className="sm:flex">
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--nebula-blue)', boxShadow: '0 0 20px var(--nebula-blue)' }} />
              <div style={{ width: '4px', height: '350px', background: 'linear-gradient(to bottom, var(--nebula-blue), transparent)' }} />
            </div>

            <div style={{ width: '100%' }}>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="head-text sm:text-left"
                style={{ 
                  fontSize: 'clamp(2rem, 8vw, 5.5rem)', 
                  lineHeight: '1.1', 
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}
              >
                CHAMARA<br /><span className="text-gradient">ABEYRATHNA</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ 
                  marginTop: '1rem', 
                  color: '#f3f3f3', 
                  maxWidth: '600px', 
                  lineHeight: '1.6', 
                  textTransform: 'none', 
                  fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                  textAlign: 'center'
                }}
                className="sm:text-left sub-text"
              >
                Navigating the universe of code, transforming complex challenges into elegant solutions across <span style={{ color: 'var(--nebula-blue)', fontWeight: 'bold' }}>mobile, web, and real-time applications</span>. SLIIT Software Engineering scholar exploring the infinite possibilities of tech.
              </motion.p>
              
              {/* Orbital Stats */}
              <div style={{ 
                display: 'flex', 
                gap: 'clamp(0.75rem, 2vw, 1.5rem)', 
                marginTop: 'clamp(1.5rem, 4vw, 2.5rem)', 
                flexWrap: 'wrap', 
                justifyContent: 'center' 
              }} className="sm:justify-start">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    className="glass-panel"
                    style={{ 
                      width: 'clamp(75px, 20vw, 90px)', 
                      height: 'clamp(75px, 20vw, 90px)', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      borderRadius: '50%',
                      border: '2px solid rgba(0, 191, 114, 0.2)',
                      boxShadow: '0 8px 16px rgba(0, 191, 114, 0.05)'
                    }}
                  >
                    <span style={{ fontSize: 'clamp(14px, 4vw, 18px)', fontWeight: '900', color: 'var(--nebula-blue)' }}>{stat.value}</span>
                    <span style={{ fontSize: 'clamp(8px, 2vw, 10px)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ 
                  marginTop: 'clamp(1.5rem, 4vw, 2.5rem)', 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center', 
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
                className="sm:justify-start"
              >
                <a href="#work" className="btn-primary" style={{ 
                  padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 30px)', 
                  borderRadius: '40px', 
                  textDecoration: 'none', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: 'clamp(13px, 2vw, 15px)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px' 
                }}>
                  Explore Universe <span style={{ fontSize: 'clamp(16px, 3vw, 18px)' }}>→</span>
                </a>
                
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="glass-panel"
                      style={{ 
                        width: 'clamp(35px, 8vw, 40px)', 
                        height: 'clamp(35px, 8vw, 40px)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        borderRadius: '50%', 
                        border: '1px solid rgba(255, 255, 255, 0.1)', 
                        cursor: 'pointer' 
                      }}
                    >
                      <span style={{ fontSize: 'clamp(16px, 3vw, 18px)' }}>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ 
            flex: '0.8', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            maxWidth: '400px'
          }}
        >
          {/* Hologram Profile Frame */}
          <div className="animate-float" style={{ position: 'relative', zIndex: 5, width: 'min(300px, 70vw)', height: 'min(300px, 70vw)' }}>
            <div style={{ 
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              padding: '6px',
              background: 'linear-gradient(135deg, rgba(0, 255, 157, 0.5), rgba(255, 204, 0, 0.5))',
              boxShadow: '0 0 40px rgba(0, 255, 157, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #fff'
              }}>
                <img 
                  src={myImg} 
                  alt="Chamara Abeyrathna" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#ccc' }}
                />
              </div>
            </div>
            
            {/* Hologram Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: i }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2px solid var(--nebula-blue)',
                  zIndex: -1
                }}
              />
            ))}
          </div>

          {/* Background Glow */}
          <div style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(0, 255, 157, 0.15) 0%, transparent 70%)',
            zIndex: 1
          }} />
        </motion.div>
      </div>

      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 1, opacity: 0.3 }}>
        <HologramCanvas />
      </div>

      <div style={{ position: 'absolute', bottom: '32px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
        <a href="#about">
          <div style={{ width: '30px', height: '54px', borderRadius: '24px', border: '2px solid rgba(255, 255, 255, 0.3)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '0.4rem', backdropFilter: 'blur(5px)' }}>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--nebula-blue)', marginBottom: '4px', boxShadow: '0 0 10px var(--nebula-blue)' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
