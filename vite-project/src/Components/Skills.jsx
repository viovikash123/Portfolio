import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';
import { FaBootstrap, FaGithub } from 'react-icons/fa';
import { FaShareSquare } from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa';

const Skills = () => {
  return (
    <div style={{ padding: '80px 0', backgroundColor: '#f4f4f4' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: '36px', fontWeight: '600' }}>My Skills</h2>
          <p style={{ fontSize: '18px', color: '#777' }}>
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
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>HTML5</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaCss3Alt size={40} color="#1572B6" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '85%', backgroundColor: '#1572B6' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>CSS3</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaJsSquare size={40} color="#F7DF1E" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '80%', backgroundColor: '#F7DF1E' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>JavaScript</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaReact size={40} color="#61DBFB" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '75%', backgroundColor: '#61DBFB' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>React</p>
                </div>
              </div>
              {/* Added Skills */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaNodeJs size={40} color="#68A063" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '70%', backgroundColor: '#68A063' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>Next.js</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaBootstrap size={40} color="#563D7C" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '85%', backgroundColor: '#563D7C' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>Bootstrap</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaCss3Alt size={40} color="#06B6D4" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '80%', backgroundColor: '#06B6D4' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>Tailwind CSS</p>
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
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>Node.js</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaNodeJs size={40} color="#68A063" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '60%', backgroundColor: '#4F5B93' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>Express.js</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaDatabase size={40} color="#4F5B93" />
                <div style={{ width: '100%', marginLeft: '15px' }}>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#ddd' }}>
                    <div className="progress-bar" style={{ width: '65%', backgroundColor: '#4F5B93' }}></div>
                  </div>
                  <p style={{ marginTop: '5px', fontSize: '14px', color: '#777' }}>Databases (MySQL, MongoDB)</p>
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
                <p style={{ fontSize: '16px', color: '#777' }}>Git</p>
              </div>
              <div style={{ margin: '20px' }}>
                <FaReact size={60} color="#61DBFB" />
                <p style={{ fontSize: '16px', color: '#777' }}>React Native</p>
              </div>
              
              
              {/* Added Tools */}
              <div style={{ margin: '20px' }}>
                <FaShareSquare size={60} color="#F2C200" />
                <p style={{ fontSize: '16px', color: '#777' }}>SharePoint</p>
              </div>
             
              
              <div style={{ margin: '20px' }}>
                <FaMicrosoft size={60} color="#0078d4" />
                <p style={{ fontSize: '16px', color: '#777' }}>Microsoft Power Apps</p>
              </div>
              <div style={{ margin: '20px' }}>
                <FaMicrosoft size={60} color="0078d4" />
                <p style={{ fontSize: '16px', color: '#777' }}>Microsoft Power Automate</p>
              </div>
              <div style={{ margin: '20px' }}>
                <FaMicrosoft size={60} color="0078d4" />
                <p style={{ fontSize: '16px', color: '#777' }}>MS Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
