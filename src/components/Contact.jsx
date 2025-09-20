import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:aryanrajsilwal183@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                aryanrajsilwal183@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              Pepsicola, Kathmandu, Nepal
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/aryanrajsilwal" style={{ color: '#2563eb', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/aryanrajsilwal
              </a>
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong>
              <a href="https://github.com/aryanrajsilwal" style={{ color: '#2563eb', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                github.com/aryanrajsilwal
              </a>
            </div>
            <p style={{ marginTop: '2rem', color: '#666' }}>
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to work together or just want to connect!
            </p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;