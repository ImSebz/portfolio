import { Link } from 'react-router-dom';
import { AnimatedLetters } from '../Animations';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './index.scss'
import CV from '../../assets/docs/JuanSebastianCamargo-CV.pdf'
import HDV from '../../assets/docs/JuanSebastianCamargo-HDV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

export const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const { language, t } = useLanguage();
  const nameArray = t('name').split("");
  const jobArray = t('job').split("");

  useEffect(() => {

    document.title = t('homeTitle');

    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [t])


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>{t('hi').charAt(0)}</span>
          <span className={`${letterClass} _12`}>{t('hi').slice(1)}</span>
          <br />
          <span className={`${letterClass} _13`}>{t('im').charAt(0)}</span>
          <span className={`${letterClass} _14`}>{t('im').slice(1)} <span /></span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={16}
          />
        </h1>
        <h2 className='home-tecs'>{t('techs')}</h2>
        <Link to="/contact" className="flat-button">{t('contactMe')}</Link>
        <a 
          className='flat-button' 
          id='button-cv' 
          rel='noreferrer' 
          target='_blank' 
          href={language === 'es' ? HDV : CV}
        > 
          {t('viewCV')}
        </a>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faHtml5} color='#E43C26'/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faCss3} color='#264DE4'/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faJsSquare} color='#F0DB4F'/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#7CC5D9'/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faNodeJs} color='#68A063'/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#F1502F'/>
          </div>
        </div>
      </div>

    </div>
    <Loader type='ball-pulse'/>
    </>
  )
}
