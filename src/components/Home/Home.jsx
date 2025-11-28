import "./Home.css";
import homeImgContainer from "../../assets/img/homeImg.webp";
import { AppText } from "../../utils/AppText";
import { useApp } from "../../context/AppContext";

const Home = () => {
   const {language} = useApp()
  return (
    <>
      <a name="home"></a>
      <div className="homeContainer" id="home">
        <div className="downloadCV">
          <a href="./src/assets/LuisRamirezCV.pdf" download="Luis Ramirez CV" className="">
            {AppText.Home.downloadCVTitle[language]} <br />
            <br />
            <i className="fa-solid fa-angles-down"></i>
          </a>
        </div>

        <div className="typeWriter ">
          <div className="homeImgContainer">
            <img src={homeImgContainer} alt="" />
          </div>
          <h1>
            HEY, <span>{AppText.Home.salutation[language]} LUIS RAMIREZ</span>
          </h1>
          <p className="homeAnimation">
            {AppText.Home.message[language]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
