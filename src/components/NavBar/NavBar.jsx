import { useEffect, useState } from "react";
import spainFlag from "../../assets/img/webp/spainFlagIcon.webp";
import usaFlag from "../../assets/img/webp/usaFlagIcon.webp";
import "./NavBar.css";
import { useApp } from "../../context/AppContext";
import { AppText } from "../../utils/AppText";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {language, toggleLanguage} = useApp()
 
    
    
  const darkMode = () => {
    document.body.classList.toggle("darkMode");
    setIsDarkMode(!isDarkMode); 
  };

      // 👇 Manejo del scroll y del header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const headerList = document.getElementById("headerList");
      const barOptions = document.getElementsByClassName("visually");
      const links = document.getElementsByTagName("a");

      if (!header || !headerList) return;

      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.9; // 90% de la pantalla

      if (scrollPosition >= threshold) {
        header.classList.add("ShortHeaderContainer");
        headerList.classList.add("shortHeaderList");
        header.classList.add("hideSign");

        for (let index = 0; index < barOptions.length; index++) {
          barOptions[index]?.classList.add("hidden");
        }
      } else {
        header.classList.remove("ShortHeaderContainer");
        headerList.classList.remove("shortHeaderList");

        for (let index = 0; index < links.length; index++) {
          links[index].style.color = "white";
          barOptions[index]?.classList.remove("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 🧹 Limpieza del evento
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".homeContainer, .aboutMeContainer, .skillsGLobalContainer, .portfolio, .contactMeContainer"
    );
    const navLinks = document.querySelectorAll(".headerOption");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            const targetId = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${targetId}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  return (
    <>
      <div id="header" className="headerContainer">
        <div>
          <p className="navBar-myName visually">Lerc</p>
        </div>
        <ul className="headerList" id="headerList">
          <a href="#home" className="headerOption">
            <li>
              <i className="fa-solid fa-house-user"></i>{" "}
              <span id="span" className="visually">
                {AppText.Navbar.home[language]}
              </span>
            </li>
          </a>
          <a href="#aboutMe" className="headerOption">
            <li>
              <i className="fa-solid fa-address-card"></i>{" "}
              <span id="span" className="visually">
                {AppText.Navbar.aboutMe[language]}
              </span>
            </li>
          </a>
          <a href="#skills" className="headerOption">
            <li>
              <i className="fa-solid fa-code"></i>{" "}
              <span id="span" className="visually">
                {AppText.Navbar.skills[language]}
              </span>
            </li>
          </a>
          <a href="#portfolio" className="headerOption">
            <li>
              <i className="fa-solid fa-briefcase"></i>{" "}
              <span id="span" className="visually">
                {AppText.Navbar.projects[language]}
              </span>
            </li>
          </a>
          <a href="#contactMe" className="headerOption">
            <li>
              <i className="fa-solid fa-mobile-screen"></i>{" "}              
              <span id="span" className="visually">
                {AppText.Navbar.contactMe[language]}
              </span>
            </li>
          </a>

          <div className="headerOption">
            {language === 1 ? (
                <li>
                  <img src={spainFlag} alt="spain_flag" className="flagIcon" onClick={()=> toggleLanguage()}/>
                </li>
            ) : (
                <li>
                  <img src={usaFlag} alt="usa_flag" className="flagIcon" onClick={()=> toggleLanguage()}/>
                </li>
            )}
          </div>
          <div className="headerOption">

            {isDarkMode === true ? (
              <>
                <li>
                  <i
                    className="fa-solid fa-sun"
                    id="sun"
                    onClick={darkMode}
                  ></i>
                </li>
              </>
            ) : (
              <>
                <li>
                  <i
                    className="fa-solid fa-moon"
                    id="moon"
                    onClick={darkMode}
                  ></i>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
