import Loader from 'react-loaders';
import './index.scss';
import { AnimatedLetters } from '../Animations';
import { useEffect, useState } from 'react';
import projectsData from '../../data/projects.json'

export const Projects = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, []);

  const renderProjects = (projects) => {
    return (
      <div className='project-info-container'>
        {
          projects.map((proj, idx) => {
            return (
              <div className='img-box' key={idx}>
                <img
                  src={proj.cover}
                  className='project-img'
                  alt='Project Cover' />
                  <div className='project-content'>
                    <p className='project-title'>{proj.title}</p>
                    <h4 className='project-description'>{proj.description}</h4>
                    <button className='project-btn' onClick={() => window.open(proj.url)}>View</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    );
  }

  return (
    <>
      <div className='container projects-page'>
        <h1 className='projects-title'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Projects".split("")}
            idx={15}
          />
        </h1>
        <div>{renderProjects(projectsData.projects)}</div>
      </div>
      <Loader type='ball-pulse' />
    </>
  )
}



