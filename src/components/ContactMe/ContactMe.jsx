import "./ContactMe.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useApp } from "../../context/AppContext";
import { AppText } from "../../utils/AppText";


const ContactMe = () =>{
        const {language} = useApp()
    const notify = () => toast("email sent, thanks..!");
    return(
    <>
        <a name="contactMe"></a>
        <section className="contactMeContainer" id="contactMe">
            <div className="titlesContainer">
                <h3 className="contactMeTitle"><i className="fa-solid fa-minus minusIcon"></i>  {AppText.ContactMe.title[language]} <i className="fa-solid fa-minus minusIcon"></i>  </h3>
                <h2 className="questionsTitle">{AppText.ContactMe.questionsTitle[language]}</h2>
            </div>
            <div className="contactFormAndInfoContainer">
                <form action="https://formsubmit.co/luiseduardo7689@gmail.com" method="POST">
                        <div className="nameAndPhoneContainer">
                            <input type="text" className="form-control" name='name' id="name" placeholder={AppText.ContactMe.inputName[language]}/>
                            <input type="text" className="form-control" name='phone' id="phone" placeholder={AppText.ContactMe.inputPhone[language]}/>
                        </div>
                        <div>
                            <input type="email" className="form-control" name='email' id="email" placeholder={AppText.ContactMe.inputEmail[language]}/>
                        </div>
                        <div>
                            <textarea className="form-control" name='message' id="message" rows="3" placeholder={AppText.ContactMe.inputMessage[language]}></textarea>
                        </div>
                    <button  type="submit" onClick={notify}>{AppText.ContactMe.btnSendTitle[language]}</button>

                    <ToastContainer />

                    {/* Estos inputs son de formsubmit.co */}
                    <input type="hidden" name="_next" value="http://localhost:5173/" />
                    <input type="hidden" name="_captcha" value="false"/>

                </form>
                
                <div className="contactInfoContainer">
                    <div className="contactInfo">
                        <div className="contactInfo-icon" >
                            <i className="fa fa-location-dot"></i>
                        </div>
                        <div className="contactInfo-icons-text">
                            <p>{AppText.ContactMe.locationTown[language]}</p>
                            <p>{AppText.ContactMe.locationCountry[language]}</p>
                        </div>
                    </div>                    
                    <div className="contactInfo">
                        <div className="contactInfo-icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="contactInfo-icons-text">
                            <p>{AppText.ContactMe.phoneTitle[language]}</p>
                            <p>829-721-3784</p>
                        </div>
                    </div>                    
                    <div className="contactInfo">
                        <div className="contactInfo-icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="contactInfo-icons-text">
                            <p>{AppText.ContactMe.emailTitle[language]}</p>
                            <p>lerc7689@hotmail.com</p>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default ContactMe;