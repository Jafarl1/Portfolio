import React, { useState } from 'react'
import { useSelector } from 'react-redux'


function Navbar() {

  const [openNav, setOpenNav] = useState(false);

  let { navbar } = useSelector(state => state);

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
          {
            navbar.map(a => (
              <a className='link_to_component' key={a.id}>
                {a.link}
              </a>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Navbar