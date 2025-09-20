const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Aryan Raj Silwal</h3>
            <p style={{ color: '#d1d5db' }}>Front-End Developer & UI/UX Designer</p>
          </div>
          <div className="footer-links">
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem' }}>
          <p>&copy; {currentYear} Aryan Raj Silwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;