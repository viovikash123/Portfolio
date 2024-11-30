import toDo from "../assets/To-do.jpeg";
import ticTac from "../assets/Tic_tac_toe.png";
import textCon from "../assets/text_conv..png";
import portfolio from "../assets/Portfolio.jpg";

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio',
      description: 'A dynamic web application built using React and Node.js. This project integrates with APIs and displays data in a clean and responsive manner.',
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
      description: 'An e-commerce web application built using React and Redux. It includes features like shopping cart, user authentication, and product management.',
      imageUrl: toDo,
      liveUrl: 'https://example.com/project3',
      codeUrl: 'https://github.com/your-username/project3'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'A mobile app built with React Native. This app offers an intuitive user interface and performs smooth animations on both iOS and Android.',
      imageUrl: ticTac,
      liveUrl: 'https://example.com/project4',
      codeUrl: 'https://github.com/your-username/project4'
    },
    {
      title: 'Project Five',
      description: 'A personal blog built with Gatsby and GraphQL. The blog features a custom theme and a powerful content management system.',
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

  return (
    <section className="projects-section" style={sectionStyles}>
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
  objectFit: 'cover',
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

export default Projects;
