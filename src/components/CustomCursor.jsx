import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for trailing effect
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.style.cursor === 'pointer') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Background Radial Mouse Glow (Static behind cursor) */}
      <motion.div 
        className="mouse-glow"
        style={{
          left: cursorX,
          top: cursorY,
          background: isHovering 
            ? 'radial-gradient(circle, rgba(255, 204, 0, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 255, 157, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          translateX: trailX,
          translateY: trailY,
          x: '-50%',
          y: '-50%',
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          border: `1px solid ${isHovering ? 'var(--nebula-purple)' : 'var(--nebula-blue)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.5,
          boxShadow: isHovering 
            ? '0 0 15px var(--nebula-purple)' 
            : '0 0 10px var(--nebula-blue)',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
      />

      {/* Core Precise Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
          width: isHovering ? 12 : 6,
          height: isHovering ? 12 : 6,
          backgroundColor: isHovering ? 'var(--nebula-purple)' : 'var(--nebula-blue)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: `0 0 10px ${isHovering ? 'var(--nebula-purple)' : 'var(--nebula-blue)'}`,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
        }}
      />

      {/* Subtle Liquid Trail Effect (Optional extra dot) */}
      {isHovering && (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 2 }}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                translateX: cursorX,
                translateY: cursorY,
                x: '-50%',
                y: '-50%',
                width: 30,
                height: 30,
                background: 'var(--nebula-purple)',
                borderRadius: '50%',
                filter: 'blur(10px)',
                pointerEvents: 'none',
                zIndex: 9998
            }}
        />
      )}
    </>
  );
};

export default CustomCursor;
