const Projects = () => {
  const projects = [
    {
      title: "Inkvision OCR",
      description: "An advanced Optical Character Recognition system that converts handwritten and printed text into digital format. Built with modern technologies to provide accurate text extraction capabilities.",
      techStack: ["JavaScript", "Python", "Machine Learning", "Computer Vision", "API Integration"],
      githubLink: "https://github.com/aryanrajsilwal/inkvision-ocr"
    },
    {
      title: "Smart Home Heating System",
      description: "An intelligent heating control system that optimizes energy consumption while maintaining comfort. Features automated temperature control, scheduling, and energy usage analytics.",
      techStack: ["IoT", "JavaScript", "React", "Node.js", "Sensor Integration", "Data Analytics"],
      githubLink: "https://github.com/aryanrajsilwal/smart-home-heating"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;