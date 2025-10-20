import React, { useEffect, useState } from "react";
import "./ProjectGallery.css";
import { AppText } from "../../utils/AppText";
import { useApp } from "../../context/AppContext";

const ProjectGallery = ({ projects = [], toggle }) => {
  const [selectedProject, setSelectedProject] = useState("All");
  const [displayImages, setDisplayImages] = useState([]);
  const [isFading, setIsFading] = useState(false);
  const {language} = useApp()

  // Cuando cambie el projects o el filtro, actualizamos las imágenes a mostrar
  useEffect(() => {
    const applyFilter = () => {
      if (selectedProject === "All") {
        // concatenar todas las imágenes manteniendo info del proyecto
        const all = projects.flatMap((p) =>
          (p.images || []).map((img) => ({ ...img, project: p.name }))
        );
        setDisplayImages(all);
      } else {
        const proj = projects.find((p) => p.name === selectedProject);
        const imgs = (proj?.images || []).map((img) => ({ ...img, project: proj.name }));
        setDisplayImages(imgs);
      }
    };

    // fade out -> cambiar -> fade in
    setIsFading(true);
    const t = setTimeout(() => {
      applyFilter();
      setIsFading(false);
    }, 250); // 250ms fade

    return () => clearTimeout(t);
  }, [selectedProject, projects]);

  // Lista de botones (únicos nombres de proyectos)
  const projectNames = projects.map((p) => p.name);

  return (
    <div className="pg-container">
      <div className="pg-filters">
        <button
          className={`pg-filter-btn ${selectedProject === "All" ? "active" : ""}`}
          onClick={() => setSelectedProject("All")}
        >
          {AppText.otherProjects.allButtonTitle[language]}
        </button>

        {projectNames.map((name) => (
          <button
            key={name}
            className={`pg-filter-btn ${selectedProject === name ? "active" : ""}`}
            onClick={() => setSelectedProject(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className={`pg-grid ${isFading ? "fade-out" : "fade-in"}`}>
        {displayImages.map((imgObj, idx) => (
          <div key={idx} className="pg-item" onClick={ () => toggle(imgObj.src)}>
            <img src={imgObj.src} alt={`${imgObj.project} ${idx}`} className="pg-img" />
            <div className="pg-caption">{imgObj.project}</div>
          </div>
        ))}

        {/* Si no hay imágenes */}
        {displayImages.length === 0 && (
          <div className="pg-empty">No hay imágenes para este proyecto.</div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
