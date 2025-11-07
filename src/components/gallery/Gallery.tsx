import sivanaImg from "../../assets/img/imgProjects/Sivana.png";
import EtreeLeafImg from "../../assets/img/imgProjects/EtreeLeaf.png";
import tomsLogin from "../../assets/img/imgProjects/Toms/login.png";
import networks from "../../assets/img/imgProjects/Toms/networks.png";
import overview from "../../assets/img/imgProjects/Toms/overview.png";
import taxFinder from "../../assets/img/imgProjects/Toms/taxFinder.png";
// import simplyfund1 from "../../assets/img/imgProjects/Simplyfund/Simplyfund1.png";
// import simplyfund2 from "../../assets/img/imgProjects/Simplyfund/Simplyfund2.png";
// import simplyfund3 from "../../assets/img/imgProjects/Simplyfund/Simplyfund3.png";
// Facturacion electrónica 1
import eBilling1 from "../../assets/img/imgProjects/Facturacion_electronica_1/login.png";
import eBilling2 from "../../assets/img/imgProjects/Facturacion_electronica_1/asociados.png";
import eBilling3 from "../../assets/img/imgProjects/Facturacion_electronica_1/asociados2.png";
import eBilling4 from "../../assets/img/imgProjects/Facturacion_electronica_1/consulta_factura.png";
import eBilling5 from "../../assets/img/imgProjects/Facturacion_electronica_1/filtros_avanzados.png";
// Facturacion electrónica 2
import eBilling6 from "../../assets/img/imgProjects/Facturacion_electronica_2/login.png";
import eBilling7 from "../../assets/img/imgProjects/Facturacion_electronica_2/inicio.png";
import eBilling8 from "../../assets/img/imgProjects/Facturacion_electronica_2/metricas.png";
import eBilling9 from "../../assets/img/imgProjects/Facturacion_electronica_2/asociados.png";
import eBilling10 from "../../assets/img/imgProjects/Facturacion_electronica_2/asociados_2.png";


import "./Gallery.css"
import { useState } from "react";
import { AppText } from "../../utils/AppText";
import { useApp } from "../../context/AppContext";
import ProjectGallery from '../projectGallery/ProjectGallery';


/* Ejemplo con 3 proyectos y 3 imágenes cada uno */
const projects = [
    {
    name: "E-Billing 1",
    images: [
      { src: eBilling1 },
      { src: eBilling2 },
      { src: eBilling3 },
      { src: eBilling4 },
      { src: eBilling5 },
    ],
  },
  {
    name: "E-Billing 2",
    images: [
      { src: eBilling6 },
      { src: eBilling7 },
      { src: eBilling8 },
      { src: eBilling9 },
      { src: eBilling10 },
    ],
  },
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
      { src: taxFinder },
    ],
  },
  // {
  //   name: "Simplyfund",
  //   images: [
  //     { src: simplyfund1 },
  //     { src: simplyfund2 },
  //     { src: simplyfund3 },
  //   ],
  // },
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
      <div className="titlesContainer" style={{
        marginBottom:"3rem"
      }}>
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
        <div className="img-wide-view" onClick={() => setisOpenModal(false)}>
          <div className="close-icon" onClick={()=> setisOpenModal(false)}>X</div>
          <img src={selectedImg} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
