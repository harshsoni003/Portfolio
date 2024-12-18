import React from 'react';
import experienceData from './data';
import './services.css';

const ExperienceItem = ({ experience }) => (
  <div className="experience-card">
    <div className="experience-item">
      <div className="company-logo">
        <img 
          src={experience.companyLogo} 
          alt={`${experience.company} logo`}
          className="logo-image"
        />
      </div>
      <div className="experience-details">
        <h3>{experience.title}</h3>
        <p className="company">{experience.company} {experience.employmentType && `· ${experience.employmentType}`}</p>
        <p className="duration">{experience.startDate} - {experience.endDate} · {experience.duration}</p>
        <p className="location">{experience.location} {experience.workType && `· ${experience.workType}`}</p>
        
        {experience.description.length > 0 && experience.description.map((item, index) => (
          <p key={index} className="description-item">{item}</p>
        ))}
        {experience.skills.length > 0 && (
          <div className="skills">
            {experience.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        )}
        <br />
        <a 
          href="https://www.linkedin.com/in/harsh-soni-hs/details/certifications/" 
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View 
        </a>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <p>Here is my experience that highlights my skills and expertise across various areas.</p>
      <div className="experience-container">
        {experienceData.map(exp => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Services;