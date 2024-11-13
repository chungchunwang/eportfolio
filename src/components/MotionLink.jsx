import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MotionLink = ({ href, children, style, onNavigate }) => {
  return (
    <motion.div
      style={{
        width: '100%',
        ...style
      }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ 
        scale: 1.05,
        transition: {
          rotate: {
            duration: 0.5,
            repeat: Infinity
          }
        }
      }}
      whileHoverEnd={{
        scale: 1,
        transition: {
          duration: 0.5,
          delay: 0
        }
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      onClick={onNavigate}
    >
      <Link
        to={href}
        style={{
          backgroundColor: '#ffffff22',
          padding: '1rem',
          borderRadius: '0.5rem',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: 'Caveat',
          fontSize: '1.2rem',
          width: '100%',
          textAlign: 'center',
          display: 'block',
          boxSizing: 'border-box'
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
};

MotionLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  onNavigate: PropTypes.func
};

export default MotionLink; 