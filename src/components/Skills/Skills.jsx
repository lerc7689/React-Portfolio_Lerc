import "./Skills.css";
import htmlImg from "../../assets/img/html.png"
import { useApp } from "../../context/AppContext";
import { AppText } from "../../utils/AppText";
import LinearWithValueLabel from "../progressBar/ProgressBar";
import JobTimeline from "../jobExperiencetimeLine/JobTimeline";
 
  const Skills = () =>{
    const {language} = useApp()

    return(
    <>
      <a name="skills"></a>
        <section className="skillsGLobalContainer" id="skills">
          <div className="titlesContainer">
            <h3 className="skillsTitle">
            <i className="fa-solid fa-minus minusIcon"></i>
              {AppText.mySkills.title[language]}
            <i className="fa-solid fa-minus minusIcon"></i>
            </h3>
            <h2 className="questionsTitle">{AppText.mySkills.subtitle[language]}</h2>
          </div>
          

          <div className="skills-bars-full-container">

            <div className="skills-bars-single-container">
              <JobTimeline/>
            </div>
            <div className="skills-bars-single-container">

              <h2 className="skills-bars-single-title">{AppText.mySkills.frontendTitle[language]}</h2>

              <LinearWithValueLabel stopAt={95} titulo="Html"  iconSrc={htmlImg}/>
              <LinearWithValueLabel stopAt={95} titulo="Css"/>
              <LinearWithValueLabel stopAt={90} titulo="Javascript"/>
              <LinearWithValueLabel stopAt={90} titulo="Typescript"/>
              <LinearWithValueLabel stopAt={90} titulo="React"/>
              <LinearWithValueLabel stopAt={80} titulo="React Native"/>
              <LinearWithValueLabel stopAt={70} titulo="Angular"/>
              <LinearWithValueLabel stopAt={60} titulo="Vue"/>
              <LinearWithValueLabel stopAt={80} titulo="Git/Github"/>

            </div>

            <div className="skills-bars-single-container" >

               <h2 className="skills-bars-single-title">{AppText.mySkills.backendTitle[language]}</h2>

              <LinearWithValueLabel stopAt={50}  titulo=".Net"/>
              <LinearWithValueLabel stopAt={55} titulo="Node"/>
              <LinearWithValueLabel stopAt={70} titulo="SQL"/>
              <LinearWithValueLabel stopAt={60} titulo="Express"/>
              <LinearWithValueLabel stopAt={65} titulo="Mongo DB"/>
              <LinearWithValueLabel stopAt={65} titulo="Postgress DB"/>

            </div>
          </div>  
        </section>
    </>)
}

export default Skills;