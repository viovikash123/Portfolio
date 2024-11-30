import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., sending data to your email or backend server)
    alert('Form submitted!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-section" style={{ padding: '80px 0', backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <h2 style={{ color: 'whitesmoke', textAlign: 'center' }}>Contact Us</h2>
            <p style={{ color: 'lightgray', textAlign: 'center', marginBottom: '40px' }}>
              Feel free to reach out for any inquiries, collaboration opportunities, or just to say hello!
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" style={{ color: 'white' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ color: 'white' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ color: 'white' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ display: 'block', margin: '0 auto' }}>
                Send Message
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
