import React from 'react';
import { FaLaptopCode, FaDatabase, FaMobileAlt, FaCloud, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <section id="services" style={{ padding: '80px 0', backgroundColor: '#121212' }}>
        <div className="container">
          <div className="row text-center">
            {/* Front-End Development Service */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="service-box"
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaLaptopCode size={50} style={{ color: 'greenyellow', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#fff' }}>Front-End Development</h3>
                <p style={{ fontSize: '16px', color: '#ddd', marginTop: '10px' }}>
                  Building beautiful and responsive websites using HTML, CSS, and JavaScript with modern frameworks like React.js.
                </p>
              </div>
            </div>

            {/* Back-End Development Service */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="service-box"
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaDatabase size={50} style={{ color: 'greenyellow', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#fff' }}>Back-End Development</h3>
                <p style={{ fontSize: '16px', color: '#ddd', marginTop: '10px' }}>
                  Developing robust back-end systems using Node.js, Express, and databases such as MongoDB, MySQL, and Firebase.
                </p>
              </div>
            </div>

            {/* Mobile-Responsive Design Service */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="service-box"
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaMobileAlt size={50} style={{ color: 'greenyellow', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#fff' }}>Mobile-Responsive Design</h3>
                <p style={{ fontSize: '16px', color: '#ddd', marginTop: '10px' }}>
                  Ensuring your website looks amazing on all devices by implementing responsive design principles and mobile-first strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="row text-center">
            {/* Cloud Integration Service */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="service-box"
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaCloud size={50} style={{ color: 'greenyellow', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#fff' }}>Cloud Integration</h3>
                <p style={{ fontSize: '16px', color: '#ddd', marginTop: '10px' }}>
                  Integrating your website with cloud services like AWS, Google Cloud, and Firebase for scalability and performance.
                </p>
              </div>
            </div>

            {/* SEO & Digital Marketing Service */}
            <div className="col-12 col-md-4 mb-4">
              <div
                className="service-box"
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaBullhorn size={50} style={{ color: 'greenyellow', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#fff' }}>SEO & Digital Marketing</h3>
                <p style={{ fontSize: '16px', color: '#ddd', marginTop: '10px' }}>
                  Boost your website’s visibility and rankings with SEO optimization and digital marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        style={{
          padding: '60px 0',
          backgroundColor: '#1e1e1e',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h3 style={{ fontSize: '30px', fontWeight: '600' }}>Ready to Get Started?</h3>
          <p style={{ fontSize: '18px', color: '#ddd', marginBottom: '20px' }}>
            Let’s work together to create something amazing. If you have a project in mind or need more information, feel free to get in touch.
          </p>
          <a href="mailto:your-email@example.com">
            <button
              style={{
                backgroundColor: 'greenyellow',
                border: 'none',
                color: 'black',
                padding: '12px 25px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
