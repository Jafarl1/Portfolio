import React, { useState, useRef } from 'react'
import CountUp from 'react-countup'
import { useSelector } from 'react-redux'


function About() {

  let { me, mySkills, socials } = useSelector(state => state);

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
    }
    else {
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
            {me.who}
          </h1>
          <span className='line_span'>
          </span>
          <p>
            {me.more}
          </p>
          <div className="socials">
            {
              socials.map(a => (
                <a href={a.link} key={a.id} target='_blank'>
                  <i className={a.logo}></i>
                </a>
              ))
            }
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="my_skills">
          <span className='line_span'>
            My Skills
          </span>
          <div className="all_skills" ref={skills_box}>
            {
              mySkills.map(e => (
                <div className="my_skill" key={e.id}>
                  <div className="top">
                    <span>
                      {e.skill}
                    </span>
                    <span className="percent">
                      <CountUp start={0} end={skillsView ? e.max : 0} duration={2} suffix="%" />
                    </span>
                  </div>
                  <div className="skill_line" style={skillsView ? { width: `${e.max}%` } : { width: '0%' }}></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About