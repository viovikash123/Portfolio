import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Send email function using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Replace 'service_id', 'template_id', and 'user_id' with your actual credentials from EmailJS
    emailjs
      .sendForm(
        'service_7vozctv',  // Service ID from EmailJS
        'template_ee3uigc',  // Template ID from EmailJS
        e.target,             // Form data
        'Z2oq-GIpYsKgyCsD7'       // User ID from EmailJS
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        },
        (error) => {
          setStatus('Error sending message, please try again later.');
        }
      );
  };

  // Inline CSS styles
  const formStyles = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  };

  const headingStyles = {
    textAlign: 'center',
    fontWeight: '600',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
  };

  const textareaStyles = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
    height: '120px',
  };

  const buttonStyles = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '1rem',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  const statusStyles = {
    textAlign: 'center',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  return (
    <div style={formStyles}>
      <h2 style={headingStyles}>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={inputStyles}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyles}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={textareaStyles}
            required
          />
        </div>
        <button
          type="submit"
          style={buttonStyles}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Send Message
        </button>
      </form>

      {status && <p style={statusStyles}>{status}</p>} {/* Display the status message */}
    </div>
  );
};

export default Contact;
