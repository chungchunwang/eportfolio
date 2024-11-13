import { motion } from 'framer-motion';
import WavyText from '../components/WavyText';
import MotionLink from '../components/MotionLink';
import StyledLink from '../components/StyledLink';
import { AiFillInfoCircle } from 'react-icons/ai';

const About = () => {
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
      <AiFillInfoCircle style={{ fontSize: '6rem', marginBottom: '0', color: '#ffcc24' }} />
      <motion.h1
        variants={itemVariants}
        style={{
          marginTop: '0rem',
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: '#1fb1d5',
          fontFamily: 'DM Serif Text'
        }}
      >
        About Me
      </motion.h1>

      <motion.section
        variants={itemVariants}
        style={{
          marginBottom: '3rem'
        }}
      >
        <h2 style={{ color: '#465778', marginBottom: '1rem' }}>My Journey</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#465778', fontSize: '1.2rem', textAlign: 'left' }}>
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
        </motion.span> I am Jason (Chung-chun Wang), a <WavyText>computer engineering</WavyText> student at Georgia Tech with experience in <WavyText>full-stack web development</WavyText>, <WavyText>game development</WavyText>, <WavyText>electronics</WavyText>, and <WavyText>music</WavyText>.

          <br />
          
          Since middle school, programming has fascinated me. Living in a city apartment, I had no access to physical tools to tinker with, but the computer offered me a canvas to make whatever I wanted. So, I fell in love with it.

          <br />
          
          Most coding, in my opinion, is an art that is best taught through <WavyText>self-learning</WavyText> and <WavyText>project experience</WavyText>. Having no curricular computer science classes, I garnered everything I know from online documentation and tutorials. This, I believe, is an asset, because in the process I learned how to study independently, and how to approach learning monolithic topics you know nothing about.
          
          <br />
          
          I started out building simple personal websites, but from there, the sky was the limit. During a summer internship, I independently built a <WavyText>medical signal annotation editor</WavyText> using WebGL. Over another summer, I made <WavyText>VR video games</WavyText> in Unity, including a Beat Saber clone that could play custom maps!
          
          <br />
          
          In my first semester of college, I have eagerly been putting my programming skills to the test and have attended quite a few hackathons. At <WavyText>HackMIT</WavyText>, I won the Suno Track for making a collaborative (like Figma) MIDI editor. At <WavyText>DubHacks</WavyText>, I won first prize in title sponsor Intel&apos;s track with an AI &quot;Spotlight Search&quot; that could get your files semantically.
          
          <br />
          
          I am eager to make more! If you would like to collaborate, please feel free to contact me. You can find all my information by <StyledLink to="/contact">clicking here</StyledLink>.
        </p>

      </motion.section>
    </motion.div>
  );
};

export default About; 