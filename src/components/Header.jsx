const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">Aryan Raj Silwal</div>
        <ul className="nav-links">
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;