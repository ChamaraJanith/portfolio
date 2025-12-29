import React from 'react';
import { Navbar, Hero, About, Tech, Experience, Works, Contact, CosmicGridCanvas, Footer } from './components';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div style={{ position: 'relative', zIndex: 0, backgroundColor: 'var(--deep-space)', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <CosmicGridCanvas />
      </div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
