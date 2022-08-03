import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]; //ogject destructtion -- obje parçalama// 
  console.log(value)

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
        <div className="btn-container">
          {jobs.map((job, index) => {  //0,1,2
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}>
                {job.company}
              </button>
            )
          })}
        </div>
      </div>
      <div className="jobs-center">
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight
                  className='job-icon' ></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}
export default App;
