import Loader from 'react-loaders';
import './index.scss';
import { AnimatedLetters } from '../Animations';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const { t } = useLanguage();

    useEffect(() => {

        document.title = t('contactTitle');

        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [t]);

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p80bw46', 'template_69mzflo', refForm.current, '9zejksCzcW8GhrspV')
            .then((result) => {
                // console.log(result.text);
                alert(t('messageSuccess'));
                e.target.reset();
            }, (error) => {
                alert(t('messageError'));
                console.error(error)
            });
    }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={t('contactTitle').split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        {t('contactDescription')}
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} id='form-contact-id'>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder={t('namePlaceholder')} required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder={t('emailPlaceholder')} required />
                                </li>
                                <li>
                                    <input placeholder={t('subjectPlaceholder')} type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder={t('messagePlaceholder')} name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value={t('send')} />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='plane-cont'>

                    <div className='paperplane'>
                        <div className='plane'>
                            <div className='wing-right'></div>
                            <div className='wing-left'></div>
                            <div className='bottom'></div>
                            <div className='top'></div>
                            <div className='middle'></div>
                        </div>
                        <div className='clouds'>
                            <div className='cloud-one'></div>
                            <div className='cloud-two'></div>
                            <div className='cloud-three'></div>
                        </div>

                    </div>
                </div>
            </div>
            <Loader type='ball-pulse' />
        </>
    )
}
