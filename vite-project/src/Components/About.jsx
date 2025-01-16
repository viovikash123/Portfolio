import React from 'react';

const About = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Symbiosis Institute of Technology, Pune",
      year: "2019 - 2023",
      
    },
    {
      degree: "Class 12th (Higher Secondary School)",
      institution: "Career Point Gurukul School, Kota",
      year: "2017 - 2018",
      
    },
    {
        degree: "Class 10th (Secondary School)",
        institution: "A M COV School , Ballia(UP)",
        year: "2015 - 2016",
        
      },
  ];

  const experienceData = [
    {
      title: "Junior Web Developer",
      company: "WiseTrack Technologies, Noida",
      duration: "Sep 2024 - Nov 2024",
      description: "Developed a dynamic Web Application for Realsoft Technologies using MERN Stack and NEXT.JS",
    },
    {
      title: "IT Intern",
      company: "Century Enka Limited (Aditya Birla), Pune",
      duration: "Feb 2023 - June 2023",
      description: "Developed a custom Microsoft Power app integrated with Power Automate and Sharepoint & Developed a websites in React js for Requisition for New Requirement",
    },

    {
        title: "Web Developer Intern",
        company: "Akshaya Patra Foundation",
        duration: "Jan 2022 - May 2022",
        description: "Developed a dynamic portal website for the Akshaya Patra Foundation using HTML,CSS,JAVASCRIPT ,Bootstrap, The project featured a user-friendly interface with responsive design, interactive donation form, and real-time form validation",
      },
  ];

  // Inline CSS Styles
  const sectionStyle = {
    padding: '50px 15%',
    backgroundColor: '#f8f9fa',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'space-between',
  };

  const boxStyle = {
    flex: 1,
    minWidth: '300px',
    maxWidth: '48%',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const itemTitleStyle = {
    fontSize: '1.25rem',
    margin: '0',
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const mobileStyle = {
    '@media (max-width: 768px)': {
      containerStyle: {
        flexDirection: 'column',
        gap: '30px',
      },
      boxStyle: {
        maxWidth: '100%',
      },
    },
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Education & Experience</h2>
      <div style={containerStyle}>
        {/* Education Section */}
        <div style={boxStyle}>
          <h3 style={titleStyle}>Education</h3>
          {educationData.map((edu, index) => (
            <div key={index}>
              <h4 style={itemTitleStyle}>{edu.degree}</h4>
              <p style={textStyle}><strong>{edu.institution}</strong> - {edu.year}</p>
              <p style={textStyle}>{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div style={boxStyle}>
          <h3 style={titleStyle}>Experience</h3>
          {experienceData.map((exp, index) => (
            <div key={index}>
              <h4 style={itemTitleStyle}>{exp.title}</h4>
              <p style={textStyle}><strong>{exp.company}</strong> - {exp.duration}</p>
              <p style={textStyle}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
