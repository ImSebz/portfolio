import './index.scss';
import { AnimatedLetters } from '../Animations';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import profileP from '../../assets/images/profileP.jpg'
import Loader from 'react-loaders';


export const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const { t } = useLanguage();

  useEffect(() => {

    document.title = t('aboutTitle');

    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [t])

  return (
    <>
    <div className='container about-page'>

      <div className='text-zone'>

        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t('aboutMe').split("")}
            idx={15}
          />
        </h1>
        <p>{t('aboutDescription1')}</p>
        <p>{t('aboutDescription2')}</p>
        <p>{t('aboutDescription3')} <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/juan-sebastian-camargo-3643551a3/'>{t('linkedin')}</a> {t('and')} <a target='_blank' rel='noreferrer' href='https://github.com/ImSebz'>{t('github')}</a>!</p>

      </div>

      <div className='profile-picture-cont'>
        <div className='picture'>
          <img src={ profileP } alt='me'/>
        </div>
      </div>
    </div>
    <Loader type='ball-pulse'/>
    </>
  )
}
