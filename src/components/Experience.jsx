const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Front-End Developer",
      company: "Deerwalk",
      period: "2021 - 2023",
      description: "Developed responsive web interfaces and worked on various front-end projects. Gained hands-on experience with modern web development practices and collaborative development workflows."
    },
    {
      type: "work",
      title: "Freelance Web Developer",
      company: "Independent",
      period: "2023",
      location: "Nepal",
      description: "Worked on various client projects, creating custom web solutions and maintaining existing websites. Enhanced skills in client communication and project management."
    },
    {
      type: "education",
      title: "BSc Hons with AI",
      company: "University",
      period: "2024 - Present",
      description: "Currently pursuing Bachelor's degree with specialization in Artificial Intelligence. Learning advanced programming concepts and AI technologies."
    },
    {
      type: "education",
      title: "High School",
      company: "Deerwalk Sifal School",
      period: "2021 - 2023",
      description: "Completed high school education with focus on science and technology subjects. Participated in various tech competitions and programming contests."
    }
  ];

  const awards = [
    "Best Web Project – School Tech Fest 2024",
    "Creative Coder Award – Hack Club"
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience & Education</h2>
        <div className="timeline">
          {experiences.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.company} • {item.period}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '2rem', color: '#333' }}>Awards & Recognition</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {awards.map((award, index) => (
              <div key={index} style={{
                padding: '1rem 2rem',
                background: '#f1f5f9',
                borderRadius: '25px',
                border: '2px solid #2563eb',
                color: '#2563eb',
                fontWeight: '500'
              }}>
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;