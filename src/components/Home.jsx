import React, { useState, useEffect, useRef } from 'react'
import myImg from '../assets/images/Me.jpg'

function Home({theme}) {

  const [view, setView] = useState(false);
  const dev = useRef();

  const Visible = (el) => {

    let targetPosition = {
      top: window.pageYOffset + el.current.getBoundingClientRect().top,
      left: window.pageXOffset + el.current.getBoundingClientRect().left,
      right: window.pageXOffset + el.current.getBoundingClientRect().right,
      bottom: window.pageYOffset + el.current.getBoundingClientRect().bottom
    },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right) {
      setView(true);
    } else {
      setView(false);
    };
  };

  window.addEventListener('scroll', () => {
    Visible(dev)
  });

  useEffect(() => {
    Visible(dev)
  }, [])

  return (
    <div className="home_page" id='home'>
      <div className="home">
        <div className="info">
          <span className='line_span'>
            Hello, I'm
          </span>
          <h1 className='name'>
            Zohrab Jafarli
          </h1>
          <h1 ref={dev} className={view ? 'dev typing_anim' : 'dev'}>
            Frontend Developer
          </h1>
          <a href="https://drive.google.com/file/d/1ThezB3tI7MGAMxu2_i9hosUKxcdESKxZ/view?usp=share_link"
            target='_blank' 
            className={theme === "light" ? 'CV' : 'CV dark_btn'}
          >
            Look at cv
          </a>
        </div>
        <div className="img">
          <img src={myImg} alt="My photo" />
        </div>
      </div>
    </div>
  )
}

export default Home