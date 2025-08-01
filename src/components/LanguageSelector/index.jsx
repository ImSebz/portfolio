import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './index.scss';

export const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button 
        onClick={toggleLanguage}
        className={`flag-button ${language === 'en' ? 'active' : ''}`}
        title={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      >
        {language === 'en' ? (
          <span className="flag-emoji">🇺🇸</span>
        ) : (
          <span className="flag-emoji">🇪🇸</span>
        )}
      </button>
    </div>
  );
};
