import { motion } from 'framer-motion';
import { BiTime } from 'react-icons/bi';
import searchmateImage from '../assets/searchmate.png';
import lightsword1 from '../assets/lightswordvr1.jpg';
import lightsword2 from '../assets/lightswordvr2.jpg';
import mitilogo from '../assets/mitilogo.png';
import miti from '../assets/miti.png';
import morse1 from '../assets/morse1.jpg';
import morse2 from '../assets/morse2.png';
import morse3 from '../assets/morse3.png';
import smartsortImage from '../assets/smartsort.jpg';
import StyledLink from '../components/StyledLink';

const Projects = () => {
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
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem'
      }}
    >
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#1fb1d5',
          fontFamily: 'DM Serif Text',
          textAlign: 'center'
        }}
      >
        Projects
      </motion.h1>

      {/* Table of Contents */}
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}
      >
        <motion.a
          href="#searchmate"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            height: '100%'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img 
              src={searchmateImage}
              alt="SearchMate: Intelligent AI File Search"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1rem', flex: 1 }}>
              <h3 style={{ color: '#1fb1d5', fontFamily: 'DM Serif Text' }}>SearchMate: Intelligent AI File Search</h3>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="#lightswordvr"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            height: '100%'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img 
              src={lightsword1}
              alt="Light Sword VR: Beat Saber Clone With Custom Map Support"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1rem', flex: 1 }}>
              <h3 style={{ color: '#1fb1d5', fontFamily: 'DM Serif Text' }}>Light Sword VR: Beat Saber Clone With Custom Map Support</h3>
            </div>
          </div>
        </motion.a>

        <motion.a
          href="#mitimusicstudio"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            height: '100%'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img 
              src={mitilogo}
              alt="MITI Music Studio: Real-time collaborative & generative music making."
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1rem', flex: 1 }}>
              <h3 style={{ color: '#1fb1d5', fontFamily: 'DM Serif Text' }}>MITI Music Studio: Real-time collaborative & generative music making.
              </h3>
            </div>
          </div>
        </motion.a>
        <motion.a
          href="#morsecodegenerator"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            height: '100%'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img 
              src={morse1}
              alt="Morse Code Generator"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1rem', flex: 1 }}>
              <h3 style={{ color: '#1fb1d5', fontFamily: 'DM Serif Text' }}>Morse Code Generator
              </h3>
            </div>
          </div>
        </motion.a>
        <motion.a
          href="#smartsort"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            height: '100%'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img 
              src={smartsortImage}
              alt="Smartsort: AI-enabled, self-sorting trash can"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1rem', flex: 1 }}>
              <h3 style={{ color: '#1fb1d5', fontFamily: 'DM Serif Text' }}>Smartsort: AI-enabled, self-sorting trash can</h3>
            </div>
          </div>
        </motion.a>
      </motion.div>

      <motion.section
        id="searchmate"
        variants={itemVariants}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}
      >
        <h2 style={{
          color: '#465778',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontFamily: 'DM Serif Text',
          textAlign: 'center'
        }}>
          SearchMate: Intelligent AI File Search
        </h2>
          
          <img 
            src={searchmateImage}
            alt="SearchMate: Intelligent AI File Search"
            style={{
              width: '100%',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          
          <p style={{ 
            color: '#465778', 
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Inspiration</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              SearchMate was inspired by our own struggles with technology and inconveniences we have experienced firsthand as consumers. As students with hundreds of files on our computers, it&apos;s near impossible to find my notes on one specific topic from two weeks ago without manually opening and scanning multiple files in my explorer. Studying for a test involves finding relevant notes across multiple documents and copy-pasting them into a study guide, and finding that one screenshot I saved as the default &quot;IMG_808720DI&quot; is a nightmare.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>What It Does</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              To save users time and increase convenience, we developed a desktop extension that runs locally as a smart-search assistant. Users can make a query for information they want from their computer without needing to know the name of the file(s), such as &quot;find me my biology notes from a few weeks ago on mitosis cell division&quot;. It also works with images, so users can find &quot;photo of me and my family in front of statue in Italy&quot; without having to scour their folders and click through each photo to identify it. SearchMate can also consolidate information on the same topic across files and browser history to save you the time it takes to do it manually- so you can automatically create those study guides straight from your notes, find the most relevant photos for your infographic, or get a high-level summary of a project from multiple meeting notes.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>How We Built It</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We built the backend using Python, specifically working with CLIPModel for embeddings. The frontend was built using JavaScript, utilizing the Electron framework to bring a native experience to users.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Challenges We Ran Into</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              One of the challenges we faced was how to integrate the UI in a way that felt natural in the context of the OS, given our background in web-development. To address this, we brought in the Electron framework, which allowed us to tailor the user interface more intuitively. Another challenge we faced was figuring out how to deploy the embeddings model within the Intel framework. We went through many trials and referenced example code to learn how to do it and apply the knowledge to our use case.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Accomplishments That We&apos;re Proud Of</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We were able to integrate a fully working embedding model that runs locally, as well as devise a dynamic indexing model to search for files.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>What We Learned</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Throughout the development process, we learned how to be resourceful in utilizing open source code within our own frameworks and adapting usage of external models to our needs. We also learned the importance of communication and effective teamwork.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>What&apos;s Next For SearchMate</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We hope to see SearchMate in the hands of users across Intel&apos;s customer base, changing the way people study, work, and access files. Your information, your way.
            </p>
            <StyledLink to="https://devpost.com/software/searchmate-zyamof">
              View Project and Original Article on Devpost →
            </StyledLink>
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem',
              flex: '1'
            }}>
              {["React", "Electron", "Python", "CLIP", "RAG", "AI"].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: '#e8f7fa',
                    color: '#1fb1d5',
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid #1fb1d5'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#465778',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              <BiTime size={20} />
              October 2024
            </div>
          </div>
      </motion.section>
      <motion.section
        id="lightswordvr"
        variants={itemVariants}
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem'
        }}
      >
          <h2 style={{
          color: '#465778',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontFamily: 'DM Serif Text',
          textAlign: 'center'
        }}>
            Light Sword VR
          </h2>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            flexWrap: 'wrap'
          }}>
            <img 
              src={lightsword1}
              alt="Light Sword VR Gameplay Screenshot 1"
              style={{
                width: '48%',
                minWidth: '300px',
                borderRadius: '0.5rem',
                flexGrow: 1,
                objectFit: 'cover'
              }}
            />
            <img
              src={lightsword2} 
              alt="Light Sword VR Gameplay Screenshot 2"
              style={{
                width: '48%',
                minWidth: '300px',
                borderRadius: '0.5rem',
                flexGrow: 1,
                objectFit: 'cover'
              }}
            />
          </div>
          <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '1rem' }}>
            Light Sword VR is a VR clone of Beat Saber made in Unity. It can play custom community Beat Saber maps. Detailed documentation for how to install and configure the game can be found <StyledLink to="https://chungchunwang.github.io/Light-Sword-VR/docs/index.html">here.</StyledLink>
            <br />
            <StyledLink to="https://github.com/chungchunwang/Light-Sword-VR">
              View Project on GitHub →
            </StyledLink>
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem',
              flex: '1'
            }}>
              {["Unity", "C#", "VR", "Oculus SDK", "Physics", "Rhythm Games"].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: '#e8f7fa',
                    color: '#1fb1d5',
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid #1fb1d5'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#465778',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              <BiTime size={20} />
              August 2022
            </div>
          </div>
      </motion.section>
      <motion.section
        id="mitimusicstudio"
        variants={itemVariants}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}
      >
        <h2 style={{
          color: '#465778',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontFamily: 'DM Serif Text',
          textAlign: 'center'
        }}>
          MITI Music Studio: Real-time collaborative & generative music making
        </h2>
          
        <img 
          src={mitilogo}
          alt="MITI Music Studio"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
        />

        <img 
          src={miti}
          alt="MITI Music Studio"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
        />

        <div style={{ marginBottom: '2rem' }}>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/4EyjRASrDUM"
            title="MITI Music Studio Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginBottom: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Inspiration</h3>
          <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem' }}>
            All our team members have been very passionate about music generation, far before starting our coding journey. We jointly noticed the lack of innovation within the music production space, while we watched the recent rise in developer tools for improving the programming workflow. Popular MIDI editors like FL Studio and Ableton have a monopoly over the market and thus have been resistant to change and modernization. We wanted to modernize music generation and become the copilot for music production.
          </p>
          <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem' }}>
            Furthermore, we believe that getting started in music production is very gate kept and thus hard to get into. Our project can help beginners understand music production and give them a taste for what makes a song "good" or "bad". This all inspired us to create the Miti Music Studio!
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Key Features</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Real-time collaboration environment
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Streamlined music production process with AI-powered suggestions
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Natural language commands for common edits (e.g., &quot;add a beat every 5 seconds&quot;)
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              AI-powered song inspiration and suggestions
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              User authentication and song storage
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Technical Implementation</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Full Stack Javascript Application with React and Vite
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Convex for scalable backend and real-time collaboration
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Canvas for UI
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Clerk for authentication
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              Baseten for Meta Llama LLM integration
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465778' }}>
              <span style={{ color: '#1fb1d5' }}>•</span>
              SunoAI for instrumental loop generation
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Links</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/chungchunwang/piano-roll" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#1fb1d5',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: '1px solid #1fb1d5',
                transition: 'all 0.2s ease'
              }}
            >
              View on GitHub →
            </a>
            <a 
              href="https://docs.google.com/presentation/d/1n9tqtStKmhJfhqONy0jm_GRNQ9Sew2cDjPfmBoiD58s/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#1fb1d5',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: '1px solid #1fb1d5',
                transition: 'all 0.2s ease'
              }}
            >
              View Presentation →
            </a>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem',
            flex: '1'
          }}>
            {["React", "Vite", "Canvas", "Clerk", "SunoAI", "Convex", "Baseten", "LLM"].map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#e8f7fa',
                  color: '#1fb1d5',
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  border: '1px solid #1fb1d5'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#465778',
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}>
            <BiTime size={20} />
            September 2024
          </div>
        </div>
      </motion.section>
      <motion.section
        id="morsecodegenerator"
        variants={itemVariants}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}
      >
        <h2 style={{
          color: '#465778',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontFamily: 'DM Serif Text',
          textAlign: 'center'
        }}>
          Morse Code Generator: ECE 1100 Discovery Project
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ZU7qP8MhsTU"
            title="Morse Code Generator Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginBottom: '1rem'
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <img 
            src={morse2}
            alt="Morse Code Generator Circuit"
            style={{
              width: '48%',
              minWidth: '300px',
              borderRadius: '8px',
              flexGrow: 1,
              objectFit: 'cover',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src={morse3} 
            alt="Morse Code Generator Implementation"
            style={{
              width: '48%',
              minWidth: '300px',
              borderRadius: '8px',
              flexGrow: 1,
              objectFit: 'cover',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Discovery Project Idea</h3>
        </div>
        <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem' }}>
            My initial pitch for the ECE 1100 Discovery Project was something entirely different (a keyboard switch that has variable force feedback). However, I soon realized that I overestimated the scale of the project and that it was not feasible within the time frame of this assignment. Then, one day, I was thinking about the Titanic, and how they sent out SOS messages in Morse Code (just a random thought). I realized that I didn&apos;t know how to send Morse Code messages, except for the famous SOS one. I thought it would be a fun project to make a Morse Code signal generator, and a great way to learn about Morse Code, as well as, more importantly, electronics and programming.
          </p>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Project Progress</h3>
        </div>
        <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem' }}>
        I started off playing around with an Arduino, but quickly realized that it would be easier to do this with an OS where I could create a UI to input the messages. Thus, I switched to a fake Raspberry Pi I had lying around. Unfortunately, the documentation for the fake Raspberry Pi was not very good, and after spending ages reflashing the OS, I still couldn&apos;t get the SDK to work. So, I ended up borrowing a real Raspberry Pi from my friend. I flashed the system with Raspian, and after looking up the documentation for the Raspberry Pi, I was able to control the GPIO pins. I then wired up a circuit with a diode and a resistor to that GPIO pin and the ground pin, and tested that I could get the LED to blink. After that, I wrote a Python script that converted each character in a string into a series of dots and dashes, and then sequentially outputted the Morse Code message to the LED. Finally, I used Tkinter to create a simple UI for the project that allowed me to input messages and then trigger a corresponding Morse Code message.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Project Successes and Failures</h3>
        </div>
        <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem'}}>
            <strong>Successes:</strong>
            <ul style={{ marginLeft: '2rem', marginTop: '0.5rem', textAlign: 'left'  }}>
              <li>I was able to get the LED to blink and successfully output Morse Code messages. Thus, the project was able to function as intended.</li>
              <li>My code is, as far as I know, bug free and stable. I have tested it multiple times and it worked for all of my test cases.</li>
            </ul>
          </p>
          <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem'}}>
            <strong>Failures:</strong>
            <ul style={{ marginLeft: '2rem', marginTop: '0.5rem', textAlign: 'left'  }}>
              <li>I did not get to do it with an Arduino, and I had to borrow a Raspberry Pi.</li>
              <li>I could not get the fake Raspberry Pi SDK to work, so I had to use a real one.</li>
              <li>The GUI has a really basic design.</li>
              <li>I was not able to do my original idea of making a keyboard switch.</li>
            </ul>
          </p>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>ECE Skills Gained</h3>
        </div>
        <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem'}}>
          Through this project, I learned how to control the GPIO pins on a Raspberry Pi, how to wire the circuit for a diode, and how to use Tkinter to create a UI.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Final Thoughts</h3>
        </div>
        <p style={{ lineHeight: '1.6', color: '#465778', marginBottom: '1.5rem'}}>
          Overall, I am happy with the outcome of this project. I learned a lot about electronics and programming, and I am proud of what I was able to accomplish in such a short time frame.
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem',
            flex: '1'
          }}>
            {["Raspberry Pi", "Python", "Electronics", "Circuit Design", "Tkinter"].map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#e8f7fa',
                  color: '#1fb1d5',
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  border: '1px solid #1fb1d5'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#465778',
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}>
            <BiTime size={20} />
            November 2024
          </div>
        </div>
      </motion.section>
      <motion.section
        id="smartsort"
        variants={itemVariants}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}
      >
        <h2 style={{
          color: '#465778',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontFamily: 'DM Serif Text',
          textAlign: 'center'
        }}>
          Smartsort: AI-enabled, self-sorting trash can
        </h2>

          <img 
            src={smartsortImage}
            alt="Smartsort: AI-enabled, self-sorting trash can"
            style={{
              width: '100%',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          
          <p style={{ 
            color: '#465778', 
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Overview</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Happy New Year! 2020 has been a hectic year, and it is a wakeup call for us to pay attention to the issues that trouble our world. Out of these problems, the most longstanding and the most urgent is the environment. In just a couple of years, we have seen temperatures rise, and the world rapidly being filled up with nondegradable trash. This is especially poignant right now, as during the New Year the amount of trash produced in the US increases by a whopping 25%. Tis the season to be smarter about trash, and as such, I built the Smartsort: a smart, AI-enabled trash can that automatically sorts your trash for you, whilst gathering data on your trash use that provides data to help you be more ecofriendly.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Inspiration</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Smartsort came out of a frustration with how tedious the trash sorting process is. How can we get people to be more ecofriendly if it is such a pain to do so? On a recent trip to the junkyard, the manager there told us that it has become increasingly unprofitable for him to recycle the trash there. With additional sorting required to check that everything has been done correctly, he would barely be earning a profit. This stunned me, and seeing the developments in artificial intelligence and object detection, I decided to develop better way.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>What It Does</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The Smartsort is a dynamic trash can that automatically sorts your trash into non-recyclable and recyclable trash using a smart AI backend. It also collects data analytics on your daily trash production and presents them in an easy to read, insightful format, giving helpful tips that change based on your data.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>How I Built It</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The Smartsort began as two trash bins attached together by a simple wooden connector. A &quot;sorting tray&quot; was then assembled in the center of the two bins, which has two servo-powered paddles atop it that swept trash into their respective places. It also contained a scale below it that measured the weight of the trash atop the tray. As such, the tray had to be design in a way so that it was separate from the paddles, allowing it to freely more up and down. A frame was then built around the device with a hole atop, as though the whole contraption was just one trash bin.
              <br /><br />
              For the front and back panels of the trash bin I opted to use clear plastic material. As a self-sorting trash can is not something people often see, I thought having a clear view of what was happening would further entice people to use it. Inside the frame, I stuck a simple camera that could take photos of the trash, and a couple of led lights that would illuminate it.
              <br /><br />
              The Smartsort API uses a machine learning object detection model from the PyTorch library, which was trained on the ImageNet dataset. This parses the image sent by the Smartsort trash can, and determines what the trash is. Using this data, the API then determines whether the object is recyclable or not, and it sends this back to the Smartsort trash can as a response. It also sends data (what the trash is, whether it was recycled, weight, time etc.) to a Google Cloud Firebase database, which stores data about a user&apos;s trash usage.
              <br /><br />
              Using the Smartsort web app, you can login to your account and browse your data, whilst receiving dynamically allocated tips based on your information. This web app was built using the React framework, and used the Bootstrap library for styling. Authentication was implemented through &quot;Log in With Google&quot;, safeguarding user information.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Challenges I Ran Into</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The development of the Smartsort came with some challenges, especially surrounding HTTP requests. As I was previously unfamiliar with sending data though the internet, creating and sending data to the API proved to be a problem for me, as I was often riddled with a bunch of invalid or incomplete data responses.
              <br /><br />
              In addition, I also faced problems with assembling the hardware, as this was my first project of this scale (hardware-wise). Therefore, I was not careful with my cable management, which lead to a GPIO slipping from one pin to another, leading to the Raspberry Pi I was using to short circuit. Fortunately, I had a spare one on hand, however this experience taught me to be more careful and precise in my builds.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>Accomplishments That I&apos;m Proud Of</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              I am most proud of the hardware that work behind the scenes in the Smartsort trash can, as I have never worked with such a large project with so many moving parts. The paddles which move the trash around worked better than I expected, and I was glad to see that it was able to move trash that was in weird and uncommon orientations and directions.
              <br /><br />
              I am also very proud of the backend built on a Google Compute Engine instance. Though it was very frustrating at first, after learning more about the topic creating the API was extremely satisfying, and I was amazed to see how seamlessly the trash can was able to work with the AI on the API.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>What I Learned</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              As mentioned above, this project faced many challenges, however it is these challenges above anything else that have taught me the most during this hackathon. In my opinion, I believe that I have now garnered a better understanding of HTTP requests, and have learned to be more orderly and organized in my builds.
              <br /><br />
              In addition, I have also learning a lot about the services Google Cloud provides, as Smartsort uses a Google Compute Engine instance to host its API and a Google Firestore instance for authentication and as a database. I think that learning to use these services was valuable as they are industry leading tools which will be of use in almost any tech job.
            </p>

            <h3 style={{ color: '#465778', marginBottom: '1rem' }}>What&apos;s Next For Smartsort</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              • Expand the range of recyclable trash that the Smartsort trash can is able to identify<br />
              • Make the Smartsort trash can be able to sort more categories (e.g., compost)<br />
              • Design more graphs and visual representations for the Smartsort Web App
            </p>
          </p>


        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem',
            flex: '1'
          }}>
            {["Python", "React", "PyTorch", "FastAPI", "Google Cloud", "Raspberry Pi"].map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#e8f7fa',
                  color: '#1fb1d5',
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  border: '1px solid #1fb1d5'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#465778',
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}>
            <BiTime size={20} />
            January 2021
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Projects;