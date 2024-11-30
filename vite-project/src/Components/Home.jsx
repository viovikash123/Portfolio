import React , {useState} from 'react';
import vPic from "../assets/v.png";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';
import { FaBootstrap} from 'react-icons/fa';
import { FaShareSquare } from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa';
import toDo from "../assets/To-do.jpeg";
import ticTac from "../assets/Tic_tac_toe.png";
import textCon from "../assets/text_conv..png";
import portfolio from "../assets/Portfolio.jpg";
import ScrollToTopButton from '../Components/scrollToTop';

const Home = () => {
  const projectData = [
    {
      title: 'Portfolio',
      description: 'Developed a fully responsive, interactive portfolio website using Vite for rapid development and optimized build performance, combined with React for dynamic, component-based UI. The project leverages Bootstrap for a clean, mobile-first design and responsive layouts. The website showcases my skills, projects, and experience with smooth navigation, engaging animations, and a modern aesthetic.',
      imageUrl: portfolio,
      liveUrl: 'https://example.com/project1',
      codeUrl: 'https://github.com/your-username/project1'
    },
    {
      title: 'Project Two',
      description: 'A portfolio website built with React.js. It is fully responsive and includes sections like About Me, Projects, and Contact.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+Two',
      liveUrl: 'https://example.com/project2',
      codeUrl: 'https://github.com/your-username/project2'
    },
    {
      title: 'To-Do-List',
      description: 'Developed a dynamic to-do-list web application using HTML,CSS, and JavaScript, featuring task management with add/edit/delete functionality and localStorage for persistence, ensuring responsive design and a user-friendly interface.The application also implements a responsive design to ensure a smooth user experience across a variety of devices, including desktops, tablets, and smartphones.',
      imageUrl: toDo,
      liveUrl: 'https://example.com/project3',
      codeUrl: 'https://github.com/your-username/project3'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Developed an interactive Tic Tac Toe game entirely using HTML, CSS, and JavaScript, designed for two players to engage in a classic game on a responsive web interface. The game features a dynamic grid layout and allows users to alternate turns, track the game progress, and declare a winner or a tie.Tic Tac Toe game offers a polished and enjoyable experience for two players.  ',
      imageUrl: ticTac,
      liveUrl: 'https://example.com/project4',
      codeUrl: 'https://github.com/your-username/project4'
    },
    {
      title: 'Text-Converter',
      description: 'Developed a feature-rich Text Converter web app using React, offering users a simple way to convert text between various formats (e.g., uppercase, lowercase, title case) with real-time word and character count tracking. The app includes a user-friendly interface, supports a dark mode toggle, and provides a convenient copy to clipboard feature for easy text sharing.',
      imageUrl: textCon,
      liveUrl: 'https://example.com/project5',
      codeUrl: 'https://github.com/your-username/project5'
    },
    {
      title: 'Project Six',
      description: 'A real-time chat application built using WebSockets and Node.js. This app enables seamless communication between users in real time.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+Six',
      liveUrl: 'https://example.com/project6',
      codeUrl: 'https://github.com/your-username/project6'
    }
  ];
  /****Contact***/
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const [formStatus, setFormStatus] = useState('');
  
    // Handle form field changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // You can integrate an email API or backend here for form submission.
      // For now, we simulate a successful submission.
      
      if (formData.name && formData.email && formData.message) {
        setFormStatus('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Please fill out all fields.');
      }
    };

  return (
    <>
    <section className="hero-section" id="hero-section" style={{ padding: '100px' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <div className='name' style={{ fontSize: '36px', fontFamily: 'Roboto', color: 'whitesmoke', fontWeight: '600' }}>
              Vikash Singh
            </div>
            <div className='proff' style={{ fontSize: '30px', color: 'white' }}>
              I'm a <span style={{ color: 'greenyellow' }}>Web Developer</span>
            </div>
            <p style={{ color: 'lightgray', fontSize: '16px', lineHeight: '1.5' }}>
              A passionate and detail-oriented web developer with 8 months of hands-on experience in front-end and back-end development. Skilled in building dynamic, responsive websites and applications using HTML, CSS, JavaScript, React.js, and Bootstrap. Proficient in database management with SQL, including crafting optimized queries and integrating them into web applications. Eager to apply my expertise in React.js for building interactive user interfaces and leveraging Bootstrap for mobile-first, responsive designs. Looking to grow professionally and contribute to impactful web development projects with a focus on creating seamless user experiences.
            </p>
            <a href="/path-to-your-cv.pdf" download>
              <button style={{
                backgroundColor: 'greenyellow',
                border: 'none',
                color: 'black',
                padding: '10px 20px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
              }}>Download CV</button>
               <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: 'greenyellow', fontSize: '24px' }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: 'greenyellow', fontSize: '24px' }}>
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: 'greenyellow', fontSize: '24px' }}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: 'greenyellow', fontSize: '24px' }}>
            <FaTwitter />
          </a>
            </a>
            
          </div>
          <div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
            <div className='photo'>
              <div className="circle-border"></div>
              <img src={vPic} alt="vPic" className='circle-image' style={{
                width: '275px', height: 'auto', borderRadius: '50%',
                objectFit: 'cover', boxShadow: '0 0 20px 8px rgba(173, 255, 47, 0.8)'
              }} />
            </div>
          </div>
        </div>

      </div>
    </section>
    
    <section className="skill-section" id="skill-section" style={{ padding: '100px 0', background: 'linear-gradient(135deg, #5D5C61, #A8A7A7)', color: 'white' }}>
    
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: '36px', fontWeight: '600', fontFamily:"roboto", color:'#0dcaf0' }}>My Skills</h2>
          <p style={{ fontSize: '18px', color: '#dee2e6' }}>
            Here are the technologies and tools that I use regularly in my web development work.
          </p>
        </div>

        <div className="row">
          {/* Front-End Skills */}
          <div className="col-12 col-md-6 mb-4">
            <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#333' }}>Front-End Development</h3>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaHtml5 size={40} color="#E34F26" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '90%', backgroundColor: '#E34F26' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>HTML5</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaCss3Alt size={40} color="#1572B6" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '85%', backgroundColor: '#1572B6' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>CSS3</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaJsSquare size={40} color="#F7DF1E" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '80%', backgroundColor: '#F7DF1E' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>JavaScript</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaReact size={40} color="#61DBFB" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '75%', backgroundColor: '#61DBFB' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>React</p>
                </div>
              </div>
              {/* Added Skills */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaNodeJs size={40} color="#68A063" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '70%', backgroundColor: '#68A063' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>Next.js</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaBootstrap size={40} color="#563D7C" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '85%', backgroundColor: '#563D7C' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>Bootstrap</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaCss3Alt size={40} color="#06B6D4" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '80%', backgroundColor: '#06B6D4' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back-End Skills */}
          <div className="col-12 col-md-6 mb-4">
            <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#333' }}>Back-End Development</h3>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaNodeJs size={40} color="#68A063" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '70%', backgroundColor: '#68A063' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>Node.js</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaNodeJs size={40} color="#68A063" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '60%', backgroundColor: '#4F5B93' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>Express.js</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaDatabase size={40} color="#4F5B93" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '65%', backgroundColor: '#4F5B93' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#dee2e6' }}>Databases (MySQL, MongoDB)</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Tools & Other Skills */}
        <div className="row">
          <div className="col-12 text-center">
            <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#333' }}>Tools & Other Skills</h3>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ margin: '20px' }}>
                <DiGit size={60} color="#F1502F" />
                <p style={{ fontSize: '16px', color: '#dee2e6' }}>Git</p>
              </div>
              <div style={{ margin: '20px' }}>
                <FaReact size={60} color="#61DBFB" />
                <p style={{ fontSize: '16px', color: '#dee2e6' }}>React Native</p>
              </div>
              
              
              {/* Added Tools */}
              <div style={{ margin: '20px' }}>
                <FaShareSquare size={60} color="#F2C200" />
                <p style={{ fontSize: '16px', color: '#dee2e6' }}>SharePoint</p>
              </div>
             
              
              <div style={{ margin: '20px' }}>
                <FaMicrosoft size={60} color="#0078d4" />
                <p style={{ fontSize: '16px', color: '#dee2e6' }}>Microsoft Power Apps</p>
              </div>
              <div style={{ margin: '20px' }}>
                <FaMicrosoft size={60} color="0078d4" />
                <p style={{ fontSize: '16px', color: '#dee2e6' }}>Microsoft Power Automate</p>
              </div>
              <div style={{ margin: '20px' }}>
                <FaMicrosoft size={60} color="0078d4" />
                <p style={{ fontSize: '16px', color: '#dee2e6' }}>MS Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>

    <section className="projects-section" id='projects-section' style={sectionStyles}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={headerStyles}>My Projects</h2>
          <p style={subHeaderStyles}>
            These are some of the projects I’ve worked on. Feel free to explore them.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <div className="card shadow-lg" style={cardStyles}>
                {/* Project Badge */}
                {!project.liveUrl && (
                  <div className="badge bg-warning text-dark" style={badgeStyles}>
                    In Development
                  </div>
                )}
                {/* Card Image */}
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={`${project.title} screenshot`}
                  style={imageStyles}
                />
                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title" style={titleStyles}>
                    {project.title}
                  </h5>
                  <p className="card-text" style={descriptionStyles}>
                    {project.description}
                  </p>
                  <div className="d-flex justify-content-between">
                    {/* Live URL Button */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        style={liveButtonStyles}
                      >
                        View Live
                      </a>
                    ) : (
                      <span className="btn btn-warning btn-sm" style={comingSoonButtonStyles}>
                        Launch Soon
                      </span>
                    )}
                    {/* Code URL Button */}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={viewCodeButtonStyles}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="contact-container" id='contact-section' style={{backgroundColor:"black"}}>
    
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleInputChange}
            required 
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}

      <div className="contact-details">
        <h2 className='text-white'>Get In Touch</h2>
        <p>Email: <a href="mailto:viovikash@gmail.com">viovikash@gmail.com</a></p>
        <p>Phone: +91 9044102428</p>
      </div>
      <div className="footer-bottom">
          <p>&copy; 2024 Vikash Singh. All Rights Reserved.</p>
        </div>
        <ScrollToTopButton />
    </section>
    
    </>
  );
};

// Styles
const sectionStyles = {
  padding: '100px 0',
  background: 'linear-gradient(135deg, #5D5C61, #A8A7A7)',
  color: 'white',
};

const headerStyles = {
  fontSize: '40px',
  fontWeight: '700',
  fontFamily: 'Roboto, sans-serif',
  color: '#fff',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};

const subHeaderStyles = {
  fontSize: '20px',
  color: '#f1f1f1',
  marginBottom: '60px',
  fontWeight: '300',
};

const cardStyles = {
  width: '100%',
  borderRadius: '15px',
  overflow: 'hidden',
  position: 'relative',
  background: '#fff',
  boxShadow: '0 4px 25px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
};

const imageStyles = {
  width: '100%',
  height: '200px',
  
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px',
};

const badgeStyles = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  padding: '5px 15px',
  fontSize: '14px',
  fontWeight: 'bold',
  borderRadius: '25px',
  zIndex: '10',
};

const titleStyles = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#333',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

const descriptionStyles = {
  fontSize: '15px',
  color: '#555',
  marginBottom: '20px',
};

const liveButtonStyles = {
  backgroundColor: '#4CAF50',
  border: 'none',
  padding: '8px 15px',
  fontSize: '14px',
  textTransform: 'uppercase',
};

const comingSoonButtonStyles = {
  backgroundColor: '#FF9800', // Soft orange color for the "Coming Soon" button
  border: 'none',
  padding: '8px 15px',
  fontSize: '14px',
  textTransform: 'uppercase',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'not-allowed',
  opacity: 0.7, // Adds a slight transparency to indicate it's unavailable
  pointerEvents: 'none', // Disable click interaction
};

const viewCodeButtonStyles = {
  backgroundColor: '#FF5722',
  border: 'none',
  padding: '8px 15px',
  fontSize: '14px',
  textTransform: 'uppercase',
};

export default Home;
