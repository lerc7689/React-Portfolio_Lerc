import "./Footer.css";
import { AppText } from "../../utils/AppText";
import { useApp } from "../../context/AppContext";

const Footer = () =>{
    const {language} = useApp();

    return(
    <>
        <div className="FooterContainer">
            <div>
                <h2>
                    <span className="l">L</span>
                    <span className="e">e</span>
                    <span className="r">r</span>
                    <span className="c">c</span>
                </h2>
                <p>{AppText.Footer.CopyRightTitle[language]}</p>
                <p>{AppText.Footer.AllRightsReserved[language]}</p>
            </div>
            
            <div className="socialMediaContainer">
                <h3>{AppText.Footer.SocialMediaTitle[language]}</h3>
                <div className="socialMediaIconsContainer"> 
                    <a className="icon-link" href="https://www.instagram.com/lerc7689/?next=%2F">
                        <i className="fa-brands fa-instagram"><div className="insideEffect"></div></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100082497974182">
                        <i className="fa-brands fa-facebook-f"><div className="insideEffect"></div></i>
                    </a>
                    <a href="https://wa.me/8297213784">
                        <i className="fa-brands fa-whatsapp"><div className="insideEffect"></div></i>
                    </a>  
                    <a href="https://www.linkedin.com/in/luis-ramirez-4a8b5a279/">
                        <i className="fa-brands fa-linkedin-in"><div className="insideEffect"></div></i>
                    </a>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;