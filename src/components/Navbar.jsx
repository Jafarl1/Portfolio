import React, { useState } from 'react'

function Navbar() {

  const [openNav, setOpenNav] = useState(false);

  window.addEventListener('click', () => setOpenNav(false));

  let links = document.querySelectorAll('.link_to_component')

  links.forEach(e => {
    e.addEventListener('click', () => {
      document.getElementById(`${e.innerText.toLowerCase()}`).scrollIntoView();
      setOpenNav(false);
    })
  })



  return (
    <>
      <div className="nav" onClick={(e) => { setOpenNav(!openNav), e.stopPropagation() }}>
        <div className="nav_line"></div>
        <div className="nav_line"></div>
        <div className="nav_line"></div>
      </div>
      <div className={openNav ? 'open nav_menu' : 'nav_menu'} onClick={(e) => e.stopPropagation()}>
        <div className="x_menu">
          <i className="fa-solid fa-xmark" onClick={() => setOpenNav(!openNav)}></i>
        </div>
        <div className="links">
          <a className='link_to_component'>
            Home
          </a>
          <a className='link_to_component'>
            About
          </a>
          <a className='link_to_component'>
            Services
          </a>
          <a className='link_to_component'>
            Portfolio
          </a>
          <a className='link_to_component'>
            Testimonials
          </a>
          <a className='link_to_component'>
            Contact
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar