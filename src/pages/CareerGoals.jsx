import { motion } from 'framer-motion';
import { BiTargetLock, BiRocket, BiBook, BiWorld } from 'react-icons/bi';
import WavyText from '../components/WavyText';

const CareerGoals = () => {
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

  const goals = [
    {
      icon: BiTargetLock,
      title: "Short-term Goals (1-2 Years)",
      timeframe: "2024-2025",
      points: [
        "Build a strong network of friends and connections at Georgia Tech",
        "Participate actively in hackathons and competitions to build my portfolio",
        "Take on substantial roles in engineering clubs like HyTech Racing",
        "Explore different fields of ECE through mini-projects to find my interests",
        "Secure internships at music tech companies like SunoAI (Done! 😄)"
      ]
    },
    {
      icon: BiRocket,
      title: "Mid-term Goals (3-4 Years)",
      timeframe: "2026-2027",
      points: [
        "Complete internships at large tech firms through career fair opportunities",
        "Master 'adulting' skills while maintaining academic excellence",
        "Develop expertise in Signal & Information Processing for music applications",
        "Work on meaningful personal projects in areas I'm passionate about",
        "Secure a full-time job offer at an ECE firm before graduation"
      ]
    },
    {
      icon: BiWorld,
      title: "Long-term Vision (5-10 Years)",
      timeframe: "2028+",
      points: [
        "Work on innovative projects in music technology",
        "Join a new project development team (like Google's moonshots)",
        "Potentially work at or found a startup building something new",
        "Apply Signal & Information Processing expertise to musical applications",
        "Contribute to cutting-edge developments in Cybersecurity"
      ]
    },
    {
      icon: BiBook,
      title: "Professional Development",
      timeframe: "Ongoing",
      points: [
        "Gain practical experience through company internships",
        "Improve interviewing and team collaboration skills",
        "Build a diverse portfolio of ECE projects",
        "Network with professionals in the music tech industry",
        "Stay updated with developments in Signal Processing and Cybersecurity"
      ]
    }
  ];

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
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#1fb1d5',
          fontFamily: 'DM Serif Text'
        }}
      >
        Career Goals
      </motion.h1>

      <motion.p
        variants={itemVariants}
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginBottom: '3rem',
          color: '#465778'
        }}
      >
        As a <WavyText>Computer Engineering</WavyText> student passionate about <WavyText>web development</WavyText>, <WavyText>graphics programming</WavyText> and <WavyText>embedded systems</WavyText>, 
        I am building a career path that combines technical excellence with innovative problem-solving.
      </motion.p>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}
      >
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <Icon style={{ fontSize: '2rem', color: '#1fb1d5' }} />
                <div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    color: '#1fb1d5',
                    fontFamily: 'DM Serif Text',
                    margin: 0
                  }}>
                    {goal.title}
                  </h2>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#465778',
                    margin: 0
                  }}>
                    {goal.timeframe}
                  </p>
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {goal.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * pointIndex }}
                    style={{
                      marginBottom: '0.8rem',
                      color: '#465778',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem'
                    }}
                  >
                    <span style={{ color: '#1fb1d5' }}>•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CareerGoals; 