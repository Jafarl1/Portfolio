import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './assets/css/style.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonnials from './components/Testimonnials'
import Contact from './components/Contact'


function App() {

  const [theme, setTheme] = useState('');
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('mode')) {
      setTheme(localStorage.getItem('mode'));
    }
    else {
      localStorage.setItem('mode', 'light');
      setTheme('light')
    }

    const onPageLoad = () => {
      setPlayAnimation(true);
      };
      if (document.readyState === "complete") {
      onPageLoad();
      }
      else {
        window.addEventListener("load", onPageLoad);
        return () => window.removeEventListener("load", onPageLoad);
      }
  }, [])

  const changeTheme = () => {
    if (localStorage.getItem('mode') === 'light') {
      localStorage.setItem('mode', 'dark');
    }
    else {
      localStorage.setItem('mode', 'light');
    }
    setTheme(localStorage.getItem('mode'));
  }

  return (
    <>
      {
        !playAnimation ?
          <div className="main_loader">
            <ClipLoader
              color="#ffb100"
              size={100}
            />
          </div>
          :
          <div className={theme === "light" ? "App" : "App dark_bg"}>
            <div className="theme">
              <div className="theme_btn" onClick={() => changeTheme()}>
                <div className={theme === 'light' ? "bounce" : "bounce b_dark"}>
                  <i className={theme === 'light' ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                </div>
              </div>
            </div>
            <Navbar />
            <Home theme={theme} />
            <About theme={theme} />
            <Services theme={theme} />
            <Portfolio theme={theme} />
            <Testimonnials theme={theme} />
            <Contact theme={theme} />
          </div>
      }
    </>
  )
}

export default App
