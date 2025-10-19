import "./Portfolio.css";
import WeatherAppImg from "../../assets/img/imgProjects/WeatherApp.png";
import UserApi from "../../assets/img/imgProjects/UserApi.png";
import RickAndMortyApp from "../../assets/img/imgProjects/Rick&MortyApp.png";
import PokemonApp from "../../assets/img/imgProjects/PokemonApp.png";
import ECommerce from "../../assets/img/imgProjects/E-Commerce-React.png";
import country_app_angular from "../../assets/img/imgProjects/country_app_angular.png";
import pipes_angular from "../../assets/img/imgProjects/pipes_angular.png";
import { useApp } from "../../context/AppContext";
import { AppText } from "../../utils/AppText";
import Carousel from "../carrusel/Carousel";

const Portfolio = () => {
  const { language } = useApp();

  // Definimos los proyectos en un arreglo
  const projects = [
    {
      name: "WeatherApp",
      img: WeatherAppImg,
      github: "https://github.com/lerc7689/WeatherAPP",
      demo: "https://weather-app-lerc.netlify.app/",
      tech: "React"
    },
    // {
    //   name: "UserApi",
    //   img: UserApi,
    //   github: "https://github.com/lerc7689/user_API_Lerc",
    //   demo: "https://user-crud-app-lerc.netlify.app",
    // },
    {
      name: "CountryApp_Angular",
      img: country_app_angular,
      github: "https://github.com/lerc7689/Angular-Countries_App.git",
      demo: "https://country-app-angular-lerc.netlify.app/countries/by-capital",
      tech: "Angular"
    },
    {
      name: "PipesApp",
      img: pipes_angular,
      github: "https://github.com/lerc7689/Angular-PipesApp.git",
      demo: "https://pipes-app-angular-lerc.netlify.app/",
      tech: "Angular"
    },
    {
      name: "RickAndMortyApp",
      img: RickAndMortyApp,
      github: "https://github.com/lerc7689/Rick_and_Morty",
      demo: "https://rick-and-morty-app-lerc.netlify.app/",
      tech: "React"
    },
    {
      name: "PokemonApp",
      img: PokemonApp,
      github: "https://github.com/lerc7689/Poke_API",
      demo: "https://pokemon-app-lerc.netlify.app/pokedex",
      tech: "React"
    },
    // {
    //   name: "ECommerce",
    //   img: ECommerce,
    //   github: "https://github.com/lerc7689/E-Commerce_React",
    //   demo: "https://e-commerce-react-app-lerc.netlify.app/",
    // },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <a name="portfolio"></a>
      <div className="titlesContainer">
        <h3 className="portfolioTitle">
          <i className="fa-solid fa-minus minusIcon"></i>
          {AppText.Portfolio.title[language]}
          <i className="fa-solid fa-minus minusIcon"></i>
        </h3>
        <h2 className="questionsTitle">
          {AppText.Portfolio.subtitle[language]}
        </h2>
      </div>

      {/* Carrusel dinámico con hover */}
      <Carousel projects={projects} />
    </section>
  );
};

export default Portfolio;
