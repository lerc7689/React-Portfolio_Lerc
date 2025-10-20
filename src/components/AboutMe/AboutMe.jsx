import "./AboutMe.css";
import aboutMeImg from "../../assets/img/imgAboutMe.jpeg";
import { useApp } from "../../context/AppContext";
import { AppText } from "../../utils/AppText";

const AboutMe = () => {

  const {language} = useApp()


  window.addEventListener("scroll", function () {
    var imgContainer = document.querySelector(".imgContainer");
    var AboutMeInfoContainer = document.querySelector(".AboutMeInfoContainer");
    var scrollPosition = window.scrollY;
    var threshold = window.innerHeight * 3; // 100vh

    if ((scrollPosition = threshold)) {
      imgContainer.classList.add("visible_imgContainer");
      AboutMeInfoContainer.classList.add("visible_AboutMeInfoContainer");
    } else {
      imgContainer.classList.remove("visible_imgContainer");
      AboutMeInfoContainer.classList.remove("visible_AboutMeInfoContainer");
    }
  });

  return (
    <div className="aboutMeContainer" id="aboutMe" >
      <a name="aboutMe"></a>
        <div className="titlesContainer">
            <h3 className="skillsTitle">
            <i className="fa-solid fa-minus minusIcon"></i>
              {AppText.AboutMe.title[language]}
            <i className="fa-solid fa-minus minusIcon"></i>
            </h3>
            <h2 className="questionsTitle">Luis E. Ramírez C.</h2>
          </div>
      <section className="aboutMeContainerinfo">
        <div className="imgContainer">
          <img src={aboutMeImg} alt="" />
        </div>
        <div className="AboutMeInfoContainer">

          <ul className="aboutMeList">
            {/* <!-- Degree --> */}
            <li>
              <span>
                <i className="fas fa-graduation-cap" aria-hidden="true"></i>
              </span>
              <span>
                <b>{AppText.AboutMe.degreeTitle[language]}:</b>{AppText.AboutMe.degreeContent[language]}
              </span>
            </li>
            {/* <!-- Experience --> */}
            <li>
              <span>
                <i className="fa-solid fa-laptop-code"></i>
              </span>
              <span>
                <b>{AppText.AboutMe.experienceTitle[language]}:</b> 
                {AppText.AboutMe.experienceContent[language]}
              </span>
            </li>
            {/* <!-- Languages --> */}
            <li>
              <span>
                <i className="fa-solid fa-language"></i>
              </span>
              <span>
                <b>{AppText.AboutMe.languagesTitle[language]}:</b>
                {AppText.AboutMe.languagesContent[language]}
              </span>
            </li>
            {/* <!-- interests --> */}
            <li>
              <span>
                <i className="fas fa-gamepad" aria-hidden="true"></i>
              </span>
              <span>
                <b>{AppText.AboutMe.hobbiesTitle[language]}:</b>
                  <table style={{
                  display:"flex",
                  flexDirection:"column",
                  gap:"0.3rem",
                  paddingTop:"0.5rem"
                }}>
                  <tbody>
                    <tr>
                      <td>
                      <span> 
                        <i className="fa-solid fa-motorcycle" aria-hidden="true" style={{
                            color:"darkRed"
                          }}></i> 
                      </span>
                      </td>
                      <td>
                        {AppText.AboutMe.hobbiesContent1[language]}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <i className="fa-solid fa-dumbbell" aria-hidden="true" style={{
                            color:"lightblue"
                          }}></i>
                        </span>
                      </td>
                      <td>
                        {AppText.AboutMe.hobbiesContent2[language]}
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <span>
                        <i className="fa-solid fa-tree" aria-hidden="true" style={{
                          color:"green"
                        }}></i>
                      </span>
                      </td>
                      <td>
                        {AppText.AboutMe.hobbiesContent3[language]}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>                          
                          <i className="fa-solid fa-paw" style={{
                            color:"purple"
                          }}></i>
                        </span>
                      </td>
                      <td>
                        {AppText.AboutMe.hobbiesContent4[language]}
                      </td>
                    </tr>
                    </tbody>
                  </table>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
