import { motion } from 'framer-motion';
import { BiCode, BiLibrary, BiWrench } from 'react-icons/bi';
import profilePic from '../assets/profile.jpg';
import WavyText from '../components/WavyText';

const Home = () => {
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
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        color: '#465778',
      }}
    >
      <img src={profilePic} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '2rem' }} />
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: '#1fb1d5',
          fontFamily: 'DM Serif Text'
        }}
      >
        Welcome to My Digital Space
      </motion.h1>

      

      <motion.p
        variants={itemVariants}
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginBottom: '2rem',
          color: '#465778'
        }}
      >
        Hi! <motion.span
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, -20, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{ display: "inline-block", transformOrigin: '60% 60%' }}
        >
          👋
        </motion.span> I am a first year <WavyText>Computer Engineering</WavyText> student at the <WavyText>Georgia Institute of Technology</WavyText> with strong leadership, communication, and creative skills. Experienced in developing large, <WavyText>graphics intensive web applications</WavyText>, <WavyText>embedded systems</WavyText>, and <WavyText>video games</WavyText>. Winner of several <WavyText>full stack</WavyText> and <WavyText>hardware-related</WavyText> hackathons.
      </motion.p>

      <motion.div
        variants={itemVariants}
        style={{
          marginBottom: '3rem'
        }}
      >
        <h2 style={{ 
          color: '#1fb1d5', 
          marginBottom: '1.5rem',
          fontSize: '2rem',
          fontFamily: 'DM Serif Text'
        }}>
          Technical Skills
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <BiCode style={{ fontSize: '2.5rem', color: '#1fb1d5', marginBottom: '0.5rem' }} />
            <h4 style={{ color: '#1fb1d5', marginBottom: '0.5rem' }}>Languages</h4>
            <p>C++, JavaScript (6+ years of experience), Java, Python, C, C#, TypeScript, SQL, Node.js, PHP, Bash, Dart, etc.</p>
          </div>

          <div style={{
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <BiLibrary style={{ fontSize: '2.5rem', color: '#1fb1d5', marginBottom: '0.5rem' }} />
            <h4 style={{ color: '#1fb1d5', marginBottom: '0.5rem' }}>Frameworks/APIs</h4>
            <p>ReactJS (proficient), SolidJS, Svelte, WebGL/OpenGL, Flutter, Django, Unity (especially proficient in VR), Godot, etc.</p>
          </div>

          <div style={{
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <BiWrench style={{ fontSize: '2.5rem', color: '#1fb1d5', marginBottom: '0.5rem' }} />
            <h4 style={{ color: '#1fb1d5', marginBottom: '0.5rem' }}>Software</h4>
            <p>Visual Studio, VS Code, VIM, IntelliJ Idea, Fusion 360, Git/GitHub/Gitlab, Davinci Resolve, Final Cut Pro, Logic Pro, Audacity, etc.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          textAlign: 'center',
          marginTop: '2rem'
        }}
      >
        <p style={{ 
          fontSize: '1.1rem',
          color: '#465778',
          fontStyle: 'italic'
        }}>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Home; 