import React from "react"
import './assets/css/style.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonnials from './components/Testimonnials'
import Contact from './components/Contact'




function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonnials />
      <Contact />
    </div>
  )
}

export default App
