import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MotionLink from '../MotionLink';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import { AiOutlineFile, AiOutlineFolderOpen, AiOutlineHome, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiTargetLock } from 'react-icons/bi';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const sidebarVariants = {
    mobile: {
      width: '100%',
      height: isOpen ? '100vh' : '95px',
      position: 'fixed',
      bottom: 0,
      x: 0,
      zIndex: 1000,
    },
    desktop: {
      width: '400px',
      height: '100vh',
      position: 'fixed',
      y: 0,
      x: 0,
      backgroundColor: '#1fb1d5',
    }
  };

  const contentVariants = {
    mobile: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      gap: '1rem',
      justifyContent: isOpen ? 'start' : 'space-between',
      padding: isOpen ? '1rem' : '0.5rem',
      height: isOpen ? '100vh' : '80px',
      overflow: null,
    },
    desktop: {
      flexDirection: 'column',
      padding: '1rem',
      height: '100%',
      overflowY: 'auto',
    }
  };

  const linksContainerVariants = {
    open: {
      display: 'flex',
      opacity: 1,
      transition: {
        duration: 0.3
      },
      marginTop: isMobile ? '0' : '2rem',
      overflowY: 'auto',
    },
    closed: {
      opacity: 0,
      display: 'none',
      transition: {
        duration: 0.3
      },
      marginTop: isMobile ? '0' : '2rem'
    }
  };

  const handleNavigate = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <motion.div
      initial={false}
      animate={isMobile ? 'mobile' : 'desktop'}
      variants={sidebarVariants}
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <div style={{ height: '100%', backgroundColor: '#1fb1d5', position: 'absolute', width: '100%', top: 0, left: 0, zIndex: -1000 }}>
        </div>
        <motion.div
          style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'start' : 'start',
        }}
        animate={isMobile ? 'mobile' : 'desktop'}
        variants={contentVariants}
      >
        <Logo isMobile={isMobile} />
        
        {isMobile && (
          <HamburgerMenu isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
        )}

        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
            padding: '1rem'
          }}
          initial="closed"
          animate={isMobile && !isOpen ? 'closed' : 'open'}
          variants={linksContainerVariants}
        >
          <MotionLink href="/" onNavigate={handleNavigate}><AiOutlineHome /> Home</MotionLink>
          <MotionLink href="/about" onNavigate={handleNavigate}><AiOutlineUser /> About</MotionLink>
          <MotionLink href="/career-goals" onNavigate={handleNavigate}><BiTargetLock /> Career Goals</MotionLink>
          <MotionLink href="/resume" onNavigate={handleNavigate}><AiOutlineFile /> Resume</MotionLink>
          <MotionLink href="/projects" onNavigate={handleNavigate}><AiOutlineFolderOpen /> Projects</MotionLink>
          <MotionLink href="/contact" onNavigate={handleNavigate}><AiOutlineMail /> Contact</MotionLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar; 