import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaYoutube, FaSoundcloud, FaSpotify } from 'react-icons/fa';

const Contact = () => {
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

  const contactLinks = [
    {
      platform: 'Email',
      link: 'mailto:cwang967@gatech.edu',
      icon: MdEmail,
      color: '#EA4335',
      bgColor: '#fce8e6'
    },
    {
      platform: 'GitHub',
      link: 'https://github.com/chungchunwang/',
      icon: FaGithub,
      color: '#24292e',
      bgColor: '#f6f8fa'
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/chungchunwang',
      icon: FaLinkedin,
      color: '#0a66c2',
      bgColor: '#e8f4f9'
    },
    {
      platform: 'YouTube',
      link: 'https://youtube.com/@jasonwangyt',
      icon: FaYoutube,
      color: '#FF0000',
      bgColor: '#fee2e2'
    },
    {
      platform: 'SoundCloud',
      link: 'https://soundcloud.com/jason-wang-370059833',
      icon: FaSoundcloud,
      color: '#ff5500',
      bgColor: '#fff0eb'
    },
    {
      platform: 'Spotify',
      link: 'https://open.spotify.com/playlist/2ydWL4o9oh96TD6BkY3vUe?si=6ZcqfI3ZRGqGk-FXD5SEsA',
      icon: FaSpotify,
      color: '#1DB954',
      bgColor: '#e6f6eb'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}
    >
      <motion.div
        variants={itemVariants}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}
      >
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0
          }}
          style={{
            fontSize: '5rem',
            color: '#1fb1d5',
            transformOrigin: '60% 60%'
          }}
        >
          👋
        </motion.div>
      </motion.div>
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: '#1fb1d5',
          fontFamily: 'DM Serif Text'
        }}
      >
        Let&apos;s Connect!
      </motion.h1>

      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}
      >
        {contactLinks.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.5rem',
                backgroundColor: contact.bgColor,
                borderRadius: '8px',
                textDecoration: 'none',
                color: contact.color,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: `0 2px 4px ${contact.color}20`
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 4px 12px ${contact.color}30`
              }}
            >
              <Icon style={{ fontSize: '1.75rem' }} />
              <span style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600',
                color: contact.color
              }}>
                {contact.platform}
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Contact;