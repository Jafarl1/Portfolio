import React, { useState } from 'react'

function Navbar() {

  const [openNav, setOpenNav] = useState(false)




  return (
    <>
      <div className="nav" onClick={() => setOpenNav(!openNav)}>
        <div className="nav_line"></div>
        <div className="nav_line"></div>
        <div className="nav_line"></div>
      </div>
      <div className={openNav ? 'open nav_menu' : 'nav_menu'}>
        <div className="x_menu">
          <i className="fa-solid fa-xmark" onClick={() => setOpenNav(!openNav)}></i>
        </div>
        <div className="links">
          <a href="#home" onClick={() => setOpenNav(!openNav)}>
            Home
          </a>
          <a href='#about' onClick={() => setOpenNav(!openNav)}>
            About
          </a>
          <a href='#services' onClick={() => setOpenNav(!openNav)}>
            Services
          </a>
          <a href='#portfolio' onClick={() => setOpenNav(!openNav)}>
            Portfolio
          </a>
          <a href='#testimonnials' onClick={() => setOpenNav(!openNav)}>
            Testimonials
          </a>
          <a href='#contact' onClick={() => setOpenNav(!openNav)}>
            Contact
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar