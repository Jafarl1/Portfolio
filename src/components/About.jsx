import React, { useState, useRef } from 'react'
import CountUp from 'react-countup';


function About() {

  const [skillsView, setSkillsView] = useState(false);
  const skills_box = useRef();

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
      setSkillsView(true)
    } else {
      setSkillsView(false)
    };
  };

  window.addEventListener('scroll', () => {
    Visible(skills_box);
  });




  return (
    <div className="about_page" id='about'>
      <div className="about_me">
        <div className="about_info">
          <span className='line_span'>
            About Me
          </span>
          <h1 className='more_about'>
            I'm a Frontend web developer working remote
          </h1>
          <span className='line_span'>
          </span>
          <p>
            I'm frontend developer with strong basic knowledges. At the moment I am working in this sphere and also
            studying new technologies. I love my profession and I'm set for great success. My english is intermediate level now, but I'm working on it to bring it to perfection. You can find my projects on my Github page.
          </p>
          <div className="socials">
            <a href="https://github.com/Jafarl1" target='_blank'>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/zohrab-jafarli-bb10aa208/" target='_blank'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/z_jafarli/" target='_blank'>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/zjafarli" target='_blank'>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="my_skills">
          <span className='line_span'>
            My Skills
          </span>
          <div className="all_skills" ref={skills_box}>
            <div className="html_skill">
              <div className="top">
                <span>HTML</span>
                <span className="percent">
                  <CountUp start={0} end={skillsView ? 95 : 0} duration={2} suffix="%" />
                </span>
              </div>
              <div className="skill_line" style={skillsView ? { width: '95%' } : { width: '0%' }}></div>
            </div>
            <div className="css_skill">
              <div className="top">
                <span>CSS</span>
                <span className="percent">
                  <CountUp start={0} end={skillsView ? 90 : 0} duration={2} suffix="%" />
                </span>
              </div>
              <div className="skill_line" style={skillsView ? { width: '90%' } : { width: '0%' }}></div>
            </div>
            <div className="js_skill">
              <div className="top">
                <span>JavaScript</span>
                <span className="percent">
                  <CountUp start={0} end={skillsView ? 70 : 0} duration={2} suffix="%" />
                </span>
              </div>
              <div className="skill_line" style={skillsView ? { width: '70%' } : { width: '0%' }}></div>
            </div>
            <div className="react_skill">
              <div className="top">
                <span>React JS</span>
                <span className="percent">
                  <CountUp start={0} end={skillsView ? 80 : 0} duration={2} suffix="%" />
                </span>
              </div>
              <div className="skill_line" style={skillsView ? { width: '80%' } : { width: '0%' }}></div>
            </div>
            <div className="bootstrap_skill">
              <div className="top">
                <span>Bootstrap</span>
                <span className="percent">
                  <CountUp start={0} end={skillsView ? 60 : 0} duration={2} suffix="%" />
                </span>
              </div>
              <div className="skill_line" style={skillsView ? { width: '60%' } : { width: '0%' }}></div>
            </div>
            <div className="jquery_skill">
              <div className="top">
                <span>JQuery</span>
                <span className="percent">
                  <CountUp start={0} end={skillsView ? 50 : 0} duration={2} suffix="%" />
                </span>
              </div>
              <div className="skill_line" style={skillsView ? { width: '50%' } : { width: '0%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About