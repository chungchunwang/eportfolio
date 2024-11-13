import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Logo = ({ isMobile }) => {
  return (
    <motion.div
      style={{
        background: 'linear-gradient(135deg, #dee138, #efcf5c)',
        padding: isMobile ? '8px' : '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        alignItems: 'center',
        gap: isMobile ? '2px' : '0px'
      }}
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1
      }}
    >
      <p style={{
        fontSize: isMobile ? '2rem' : '5rem',
        color: '#3aaaf5',
        fontWeight: 'bold',
        fontFamily: 'Sriracha',
        margin: '0px'
      }}>\(._.)_</p>
      <p style={{
        fontSize: isMobile ? '1.5rem' : '3rem',
        color: '#347aa8',
        fontWeight: 'bold',
        fontFamily: 'DM Serif Text',
        margin: isMobile ? '0 0 0 1rem' : '0px'
      }}>Jason Wang</p>
      {!isMobile && (
        <p style={{
          fontSize: '1rem',
          color: '#5b9fff',
          fontWeight: 'bold',
          fontFamily: 'DM Serif Text',
          margin: '0px'
        }}>Legal Name: Chung-chun Wang</p>
      )}
    </motion.div>
  );
};

Logo.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Logo;