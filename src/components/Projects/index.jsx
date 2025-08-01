import Loader from 'react-loaders';
import './index.scss';
import { AnimatedLetters } from '../Animations';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import projectsData from '../../data/projects.json'

export const Projects = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const { language, t } = useLanguage();

  useEffect(() => {

    document.title = t('projectsTitle');
    
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [t]);

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
                    <p className='project-title'>{typeof proj.title === 'object' ? proj.title[language] : proj.title}</p>
                    <h4 className='project-description'>{typeof proj.description === 'object' ? proj.description[language] : proj.description}</h4>
                    <button className='project-btn' onClick={() => window.open(proj.url)}>{t('view')}</button>
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
            strArray={t('projects').split("")}
            idx={15}
          />
        </h1>
        <div>{renderProjects(projectsData.projects)}</div>
      </div>
      <Loader type='ball-pulse' />
    </>
  )
}



