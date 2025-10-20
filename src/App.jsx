import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Gallery from './components/gallery/Gallery'
import LoadingComponent from './components/loading/LoadingComponent'
import { useState, useEffect } from 'react'
import { useApp } from "../src/context/AppContext";

function App() {

const [isLoading, setIsLoading] = useState(false)
const {language} = useApp()

useEffect(() => {

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100); // dura 1.5 segundos, puedes ajustarlo

    // limpiar el timeout cuando cambie language o se desmonte
    return () => clearTimeout(timer);
  }, [language]);


  return (
    <div style={{
      position:"relative",
    }}>
      {isLoading && (
        <LoadingComponent/>
      )}
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      {/* <Gallery/> */}
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
