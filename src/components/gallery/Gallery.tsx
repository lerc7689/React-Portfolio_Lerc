import sivanaImg from "../../assets/img/imgProjects/Sivana.png";
import EtreeLeafImg from "../../assets/img/imgProjects/EtreeLeaf.png";
import tomsLogin from "../../assets/img/imgProjects/Toms/login.png";
import networks from "../../assets/img/imgProjects/Toms/networks.png";
import overview from "../../assets/img/imgProjects/Toms/overview.png";
import simplyfund1 from "../../assets/img/imgProjects/Simplyfund/Simplyfund1.png";
import simplyfund2 from "../../assets/img/imgProjects/Simplyfund/Simplyfund2.png";
import simplyfund3 from "../../assets/img/imgProjects/Simplyfund/Simplyfund3.png";

import "./Gallery.css"
import { useState } from "react";
import { AppText } from "../../utils/AppText";
import { useApp } from "../../context/AppContext";
import ProjectGallery from '../projectGallery/ProjectGallery';


/* Ejemplo con 3 proyectos y 3 imágenes cada uno */
const projects = [
  {
    name: "Sivana",
    images: [
      { src: sivanaImg },
    ],
  },
  {
    name: "E-treeLeaf",
    images: [
      { src: EtreeLeafImg },
    ],
  },
  {
    name: "Toms",
    images: [
      { src: tomsLogin },
      { src: networks },
      { src: overview },
    ],
  },
  {
    name: "Simplyfund",
    images: [
      { src: simplyfund1 },
      { src: simplyfund2 },
      { src: simplyfund3 },
    ],
  },
];

// Uso dentro de Portfolio.jsx (ejemplo)
const Portfolio = () => {
  const [isOpenModal, setisOpenModal] = useState<boolean>(false)
  const [selectedImg, setSelectedImg] = useState<string>()
  const {language} = useApp()
  

  const modalToggle = (imagen: string) => {
    setisOpenModal(true);
    setSelectedImg(imagen)

  }

  return (
    <section id="gallery-container">
      {/* <h2 style={{ color: "#fff", textAlign: "center", marginTop: "1rem" }}>Portfolio</h2>*/}
      <div className="titlesContainer">
        <h3 className="portfolioTitle">
          <i className="fa-solid fa-minus minusIcon"></i>
            {AppText.otherProjects.title[language]}
          <i className="fa-solid fa-minus minusIcon"></i>
        </h3>
        <h2 className="questionsTitle">
          {AppText.otherProjects.subtitle[language]}
        </h2>
      </div>

      <ProjectGallery projects={projects}  toggle={modalToggle} />

      {isOpenModal && (
        <div className="img-wide-view">
          <div className="close-icon" onClick={()=> setisOpenModal(false)}>X</div>
          <img src={selectedImg} alt="" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
