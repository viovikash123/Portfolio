import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7vozctv', // Replace with your service ID
        'template_ee3uigc', // Replace with your template ID
        e.target,
        'Z2oq-GIpYsKgyCsD7' // Replace with your public key
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Error sending message. Please try again later.');
        }
      );
  };

  // Styles
  const styles = {
    formWrapper: {
      width: '100%',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: '20px',
      fontSize: '28px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '20px',
      minHeight: '120px',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      fontWeight: 'bold',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    status: {
      marginTop: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: 'black',
    },
  };

  return (
    <section
      className="contact-section"
      data-aos="zoom-in"
      data-aos-duration="1500"
      style={styles.formWrapper}
    >
      <h2 style={styles.heading}>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div>
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      {status && <p style={styles.status}>{status}</p>}
    </section>
  );
};

export default Contact;
