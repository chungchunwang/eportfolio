import { motion } from 'framer-motion';
import { BiDownload } from 'react-icons/bi';

const Resume = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Replace this with your actual resume URL
  const resumeUrl = "/eportfolio/resume.pdf";
  const resumeFileName = "Jason_Wang_Resume.pdf";

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem'
      }}
    >
      <motion.div
        variants={itemVariants}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          color: '#1fb1d5',
          fontFamily: 'DM Serif Text'
        }}>
          Resume
        </h1>
        
        <motion.a
          href={resumeUrl}
          download={resumeFileName}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#1fb1d5',
            color: 'white',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontFamily: 'Caveat',
            fontSize: '1.2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#1a9ebf'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <BiDownload size={24} />
          Download Resume
        </motion.a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          width: '100%',
          height: 'calc(100vh - 200px)',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <iframe
          src={resumeUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          title="Resume Preview"
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: '#465778',
          fontSize: '0.9rem'
        }}
      >
        <p>Having trouble viewing the resume? You can download it using the button above.</p>
      </motion.div>
    </motion.div>
  );
};

export default Resume; 