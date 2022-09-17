import React from 'react'
import myImg from '../assets/images/Me.jpg'

function Home() {
  return (
    <div className="home_page" id='home'>
      <div className="home">
        <div className="info">
          <span>
            Hello, I'm
          </span>
          <h1 className='name'>
            Zohrab Jafarli
          </h1>
          <h1 className='dev'>
            Frontend Developer
          </h1>
          <button className='CV'>
            Download cv
          </button>
        </div>
        <div className="img">
          <img src={myImg} alt="My photo" />
        </div>
      </div>
    </div>
  )
}

export default Home