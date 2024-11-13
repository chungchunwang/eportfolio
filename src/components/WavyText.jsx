import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const WavyText = ({ children }) => {
  return (
    <motion.span
      style={{
        display: 'inline-block',
        position: 'relative',
        cursor: 'default',
        fontWeight: 'bold',
        transition: { duration: 0.2 },
        color: '#75e4d1',
      }}
      whileHover={{
        
      }}
    >
      {children}
      <motion.div
        style={{
          position: 'absolute',
          bottom: -2,
          left: 0,
          right: 0,
          height: 2,
          background: `url("data:image/svg+xml,%3Csvg width='100' height='8' viewBox='0 0 100 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 4C25 4 25 7 50 7C75 7 75 0 100 0' stroke='%231fb1d5' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '25px 100%',
          backgroundRepeat: 'repeat-x',
        }}
        initial={{ backgroundPosition: '0px' }}
        whileHover={{
          backgroundPosition: '25px',
          transition: {
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
    </motion.span>
  );
};

WavyText.propTypes = {
  children: PropTypes.node.isRequired
};

export default WavyText;