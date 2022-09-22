import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Services({theme}) {

  AOS.init({
    duration: 1000,
    easing: 'ease'
  });

  let { services, inlineItems } = useSelector(state => state);

  const [whatIDo, setWhatIDo] = useState(false);
  const [lineView, setLineView] = useState(false);
  const top = useRef();
  const line = useRef();
  
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
      setLineView(true)
    }
    else {
      setLineView(false)
    };
  };
  const VisibleTop = () => {

    let targetPosition = {
      top: window.pageYOffset + top.current.getBoundingClientRect().top,
      left: window.pageXOffset + top.current.getBoundingClientRect().left,
      right: window.pageXOffset + top.current.getBoundingClientRect().right,
      bottom: window.pageYOffset + top.current.getBoundingClientRect().bottom
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
      setWhatIDo(true)
    }
    else {
      setWhatIDo(false)
    };
  };

  window.addEventListener('scroll', () => {
    Visible(line);
    VisibleTop();
  });

  let windowInnerWidth = window.innerWidth;

  return (
    <div className="services_page" id='services'>
      <div className="what_i_do">
        <span className={theme === 'light' ? 'line_span' : 'line_span dark_font'}>
          Services
        </span>
        <h1 ref={top} className={(whatIDo && theme === 'light') ? 'top_anim' : 'dark_top_anim dark_font'}>
          What I do
        </h1>
      </div>
      <div className="all_services">
        {
          services.map(e => (
            <div className="service" key={e.id} data-aos={windowInnerWidth > 1492 ? e.aos : "zoom-in"}>
              <i className={e.logo} style={{ color: e.color }}></i>
              <div className={theme === 'light' ? 'service_info' : 'service_info dark_font'}>
                <h2>
                  {e.name}
                </h2>
                <p>
                  {e.description}
                </p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="foot_line">
        <div className="in_line" ref={line}>
          {
            inlineItems.map(a => (
              <div key={a.id} className={theme === 'light' ? 'inline_item' : 'inline_item dark_font'}>
                <i className={a.logo}></i>
                  <CountUp start={0} end={lineView ? a.max : 0} duration={2.5} suffix={a.suffix ? a.suffix : ''} />
                <span >
                  {a.text}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services