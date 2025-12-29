import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav style={{
      padding: '1.5rem 2rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(5, 8, 22, 0.4)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--nebula-blue), var(--nebula-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0, 166, 100, 0.2)', color: 'white' }}
        >
          CA
        </motion.div>
        <p style={{ fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', display: 'flex' }}>
          Chamara &nbsp;
          <span className="sm:inline hidden"> | Full-Stack Dev</span>
        </p>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem' }}>
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => setActive(link.title)}
            style={{ position: 'relative' }}
          >
            <a 
              href={`#${link.id}`} 
              style={{ 
                textDecoration: 'none', 
                color: active === link.title ? '#fff' : '#aaa',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => {
                 if(active !== link.title) e.target.style.color = '#aaa'
              }}
            >
              {link.title}
            </a>
            {active === link.title && (
              <motion.div
                layoutId="underline"
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'var(--nebula-blue)',
                  boxShadow: '0 0 5px var(--nebula-blue)'
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
