import React from "react";
import "./JobTimeline.css";
import { AppText } from "../../utils/AppText";
import { useApp } from "../../context/AppContext";


const JobTimeline = () => {
  const {language} = useApp()

  const experiences = [
    {
      company: "E-treeleaf",
      role: "Frontend Developer",
      period: AppText.JobExpirience.etreeleaf.period[language],
      description: AppText.JobExpirience.etreeleaf.description[language],
    },
    {
      company: "Freelance",
      role: "Frontend Developer",
      period: "2023 - 2025",
      description: AppText.JobExpirience.freelance.description[language],
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">{AppText.JobExpirience.title[language]}</h2>
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

