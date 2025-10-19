import React from "react";
import "./JobTimeline.css";

const JobTimeline = () => {
  const experiences = [
    {
      company: "E-treeleaf",
      role: "Frontend Developer",
      period: "Oct 2023 - Presente",
      description: "Desarrollo de interfaces con React y optimización de UI/UX.",
    },
    {
      company: "Freelance",
      role: "Frontend Developer",
      period: "2023 - 2025",
      description: "Desarrollo de interfaces con React, React Native y mantenimiento de módulos en Angular.",
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Job Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-company">{exp.company}</h3>
              <p className="timeline-role">{exp.role}</p>
              <span className="timeline-period">{exp.period}</span>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobTimeline;
