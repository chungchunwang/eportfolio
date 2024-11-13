import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ isOpen, toggleOpen }) => {
  return (
    <motion.button
      onClick={toggleOpen}
      style={{
        background: '#465778',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        zIndex: 1000,
      }}
    >
      <motion.div
        style={{
          width: '30px',
          height: '3px',
          backgroundColor: 'white',
          margin: '6px 0',
          transition: '0.4s',
          transform: isOpen ? 'rotate(-45deg) translate(-6.5px, 6.5px)' : 'none'
        }}
      />
      <motion.div
        style={{
          width: '30px',
          height: '3px',
          backgroundColor: 'white',
          margin: '6px 0',
          transition: '0.4s',
          opacity: isOpen ? 0 : 1
        }}
      />
      <motion.div
        style={{
          width: '30px',
          height: '3px',
          backgroundColor: 'white',
          margin: '6px 0',
          transition: '0.4s',
          transform: isOpen ? 'rotate(45deg) translate(-6.5px, -6.5px)' : 'none'
        }}
      />
    </motion.button>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

export default HamburgerMenu; 