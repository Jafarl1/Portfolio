import React, { useState, useRef } from 'react'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Services() {

  AOS.init({
    duration: 1000,
    easing: 'ease'
  });

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




  return (
    <div className="services_page" id='services'>
      <div className="what_i_do">
        <span className='line_span'>
          Services
        </span>
        <h1 ref={top} className={whatIDo ? 'top_anim' : ''}>
          What I do
        </h1>
      </div>
      <div className="all_services">
        <div className="service" data-aos="fade-right">
          <i className="fa-brands fa-react" style={{ color: '#00D5F7' }}></i>
          <div className="service_info">
            <h2>
              Frontend React JS
            </h2>
            <p>
              One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features.
            </p>
          </div>
        </div>
        <div className="service" data-aos="fade-down">
          <i className="fa-brands fa-angular" style={{ color: '#D6002F' }}></i>
          <div className="service_info">
            <h2>
              Angular Web App
            </h2>
            <p>
              Angular allows developers to focus on the core functionalities of the application without worrying about little things. Angular is backed by Google and well established.
            </p>
          </div>
        </div>
        <div className="service" data-aos="fade-left">
          <i className="fa-brands fa-vuejs" style={{ color: '#3FB27F' }}></i>
          <div className="service_info">
            <h2>
              Vue JS App
            </h2>
            <p>
              Vue provides a structure for projects and a set of tools to help teams of developers create and maintain websites and web apps quickly and easily.
            </p>
          </div>
        </div>
        <div className="service" data-aos="fade-right">
          <i className="fa-brands fa-aws" style={{ color: '#F79400' }}></i>
          <div className="service_info">
            <h2>
              AWS Management
            </h2>
            <p>
              Through the console, a customer can manage their cloud computing, cloud storage and other resources running on the Amazon Web Services infrastructure
            </p>
          </div>
        </div>
        <div className="service" data-aos="fade-up">
          <i className="fa-solid fa-server" style={{ color: '#E093F7' }}></i>
          <div className="service_info">
            <h2>
              Server Management
            </h2>
            <p>
              Service Management provides a framework to structure IT-related activities and the interactions of IT technical personnel with customers and clients.
            </p>
          </div>
        </div>
        <div className="service" data-aos="fade-left">
          <i className="fa-solid fa-robot" style={{ color: '#00BCAD' }}></i>
          <div className="service_info">
            <h2>
              Artifical Intelligence
            </h2>
            <p>
              Artificial intelligence is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment
            </p>
          </div>
        </div>
      </div>
      <div className="foot_line">
        <div className="in_line" ref={line}>
          <div className="inline_item">
            <i className="fa-solid fa-face-smile"></i>
            <CountUp start={0} end={lineView ? 100 : 0} duration={2.5} suffix="<sup>+</sup>" />
            <span>Happy Clients</span>
          </div>
          <div className="inline_item">
            <i className="fa-solid fa-pizza-slice"></i>
            <CountUp start={0} end={lineView ? 1000 : 0} duration={2.5} suffix="<sup>+</sup>" />
            <span>Pizzas ordered</span>
          </div>
          <div className="inline_item">
            <i className="fa-solid fa-quote-right"></i>
            <CountUp start={0} end={lineView ? 500 : 0} duration={2.5} suffix="<sup>+</sup>" />
            <span>Reviews</span>
          </div>
          <div className="inline_item">
            <i className="fa-solid fa-code"></i>
            <CountUp start={0} end={lineView ? 50000 : 0} duration={2.5} />
            <span>Lines of code</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services