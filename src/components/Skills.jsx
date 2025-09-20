const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Cross-browser Compatibility"]
    },
    {
      title: "UI/UX Design",
      skills: ["User Interface Design", "User Experience", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Chrome DevTools", "npm"]
    },
    {
      title: "Research & Analysis",
      skills: ["Documentation Research", "Technical Writing", "Problem Solving", "Data Collection", "API Documentation"]
    },
    {
      title: "Communication",
      skills: ["Multilingual (Nepali, Hindi, English)", "Team Collaboration", "Client Communication", "Technical Presentation"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;