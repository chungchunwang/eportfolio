import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const StyledLink = ({ to, children }) => {
  return (
    <motion.div
      style={{
        display: 'inline-block',
        position: 'relative'
      }}
      whileHover={{
        fontWeight: 'bolder',
        padding: '0rem 0.4rem 0 0.4rem',
        backgroundColor: '#1fb1d522',
        borderRadius: '0.25rem',
        margin: '0'
      }}
      transition={{
        duration: 0.2
      }}
    >
      <Link
        to={to}
        style={{
          color: '#1fb1d5',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '0.25rem',
          transition: 'all 0.2s ease'
        }}
      >
        {children}
        <motion.div
          style={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            right: 0,
            height: '100%',
            backgroundColor: '#1fb1d522',
            borderRadius: '0.25rem',
            zIndex: -1,
            opacity: 0
          }}
          whileHover={{
            opacity: 1
          }}
          transition={{
            duration: 0.2
          }}
        />
      </Link>
    </motion.div>
  );
};

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default StyledLink; 