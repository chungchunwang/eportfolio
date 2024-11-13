import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import CareerGoals from './pages/CareerGoals';
import KeyboardShortcut from './components/KeyboardShortcut';
import './App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      padding: '0',
      margin: '0',
      minWidth: '100vw',
      top: '0',
      left: '0',
      position: 'absolute'
    }}>
      <KeyboardShortcut />
      <Sidebar />
      <motion.div
        animate={{
          left: isMobile ? 0 : 400,
          bottom: isMobile ? 95 : 0,
          right: 0,
          top: 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          backgroundColor: '#f8f9fa',
          overflowY: 'auto',
          height: isMobile ? 'calc(100vh - 95px)' : '100vh',
          padding: '2rem',
          boxSizing: 'border-box'
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/career-goals" element={<CareerGoals />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
