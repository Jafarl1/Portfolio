import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


function Portfolio({theme}) {

  const checkFilter = (e) => {
    setChosen(e.target.id);
  }

  const [chosen, setChosen] = useState('all');
  const [data, setData] = useState([]);

  let { filters, projects } = useSelector(state => state);

  useEffect(() => {
    if (chosen !== 'all') {
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
        <h1 className={theme === 'dark' ? 'dark_font' : ''}>
          Portfolio
        </h1>
      </div>
      <div className="my_portfolio">
        <div className="filter">
          {
            filters.map(e => (
              <div key={e.id} className={theme === 'dark' ? 'dark_font' : ''}>
                <input type="radio" name="name" id={e.id} onClick={(a) => checkFilter(a)} defaultChecked={e.id === 'all'} />
                <label htmlFor={e.id}> {e.text} </label>
              </div>
            ))
          }
        </div>
        <div className={theme === 'light' ? "items" : "items_dark"}>
          {
            data.map(e => (
              <a href={e.link} target='_blank' className="project" key={e.id}>
                <div className="overlay"></div>
                <h1>
                  {e.heading}
                </h1>
                <img src={e.image} alt='My project' />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio