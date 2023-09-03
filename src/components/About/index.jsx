import './index.scss';
import { AnimatedLetters } from '../Animations';
import { useEffect, useState } from 'react';
import profileP from '../../assets/images/profileP.jpg'
import Loader from 'react-loaders';


export const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
    <div className='container about-page'>

      <div className='text-zone'>

        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About me".split("")}
            idx={15}
          />
        </h1>
        <p>Graduated in technology in software development and mobile applications with 6 months of experience, excellent proficiency of the English language, with knowledge in different programming languages and technologies such as JavaScript, ReactJs, web development with HTML5, CSS3, relational and non-relational databases.</p>
        <p>Always willing to explore and delve into new topics and with the ability to meet requirements.</p>
        <p>Check out my <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/juan-sebastian-camargo-3643551a3/'>Linkedin</a> and my <a target='_blank' rel='noreferrer' href='https://github.com/ImSebz'>Github</a>!</p>

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
