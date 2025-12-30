import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav style={{
      padding: '1.5rem 2rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(5, 8, 22, 0.4)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--nebula-blue), var(--nebula-purple))', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 'bold', 
            boxShadow: '0 5px 15px rgba(0, 166, 100, 0.2)', 
            color: 'white',
            flexShrink: 0
          }}
        >
          CA
        </motion.div>
        <p style={{ 
          fontWeight: 'bold', 
          fontSize: 'clamp(14px, 3vw, 18px)', 
          cursor: 'pointer', 
          color: "white",
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          Chamara<span style={{ display: 'none' }} className="sm:inline">&nbsp;| Full-Stack Dev</span>
        </p>
      </div>

      {/* Desktop Navigation */}
      <ul className="list-none hidden sm:flex" style={{ listStyle: 'none', gap: '2rem', display: 'flex' }}>
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

      {/* Mobile Toggle */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <div
          onClick={() => setToggle(!toggle)}
          style={{ 
            width: '28px', 
            height: '28px', 
            cursor: 'pointer', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-around',
            zIndex: 100
          }}
        >
          <motion.span 
            animate={{ rotate: toggle ? 45 : 0, y: toggle ? 10 : 0 }}
            style={{ width: '100%', height: '2px', background: 'white' }} 
          />
          <motion.span 
            animate={{ opacity: toggle ? 0 : 1 }}
            style={{ width: '100%', height: '2px', background: 'white' }} 
          />
          <motion.span 
            animate={{ rotate: toggle ? -45 : 0, y: toggle ? -10 : 0 }}
            style={{ width: '100%', height: '2px', background: 'white' }} 
          />
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className='glass-panel'
              style={{
                position: 'absolute',
                top: '70px',
                right: '20px',
                padding: '2rem',
                minWidth: '200px',
                zIndex: 20,
              }}
            >
              <ul className='list-none flex justify-end items-start flex-col gap-4' style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a 
                      href={`#${link.id}`}
                      style={{ 
                        color: active === link.title ? "var(--nebula-blue)" : "white",
                        fontSize: "18px",
                        fontWeight: "600",
                        textDecoration: "none"
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
