import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function Portfolio() {

  const checkFilter = (e) => {
    setChosen(e.target.id);
  }

  const [chosen, setChosen] = useState('all');
  const [data, setData] = useState([]);

  let { projects } = useSelector(state => state);

  useEffect(() => {
    if(chosen !== 'all'){
      let filtered = projects.filter(e => e.type === chosen);
      setData(filtered);
    }
    else {
      setData(projects);
    }
  }, [chosen])




  return (
    <div className="portfolio_page" id='portfolio'>
      <div className="vertical_head">
        <h1>
          Portfolio
        </h1>
      </div>
      <div className="my_portfolio">
        <div className="filter">
          <input type="radio" name="name" id="all" defaultChecked onClick={(e) => checkFilter(e)} />
          <label htmlFor="all"> All </label>

          <input type="radio" name="name" id="js" onClick={(e) => checkFilter(e)} />
          <label htmlFor="js"> JavaScript </label>

          <input type="radio" name="name" id="react" onClick={(e) => checkFilter(e)} />
          <label htmlFor="react"> React Js </label>

          <input type="radio" name="name" id="angular" onClick={(e) => checkFilter(e)} />
          <label htmlFor="angular"> Angular Js </label>

          <input type="radio" name="name" id="vue" onClick={(e) => checkFilter(e)} />
          <label htmlFor="vue"> Vue Js </label>
        </div>
        <div className="items">
          {
            data.map(e => (
              <a href={e.link} target='_blank' className="project" key={e.id}>
                <div className="overlay"></div>
                <h1>
                  {e.heading}
                </h1> 
                  <img src={e.image} alt='' />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio