import { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import './InitialScreen.css';

interface InitialScreenProps {
  onEnter: () => void;
}

const InitialScreen = ({ onEnter }: InitialScreenProps) => {
  const { t } = useI18n();
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const fullText = t.initial.loading;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setShowButton(true);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const handleEnter = () => {
    const screen = document.querySelector('.initial-screen');
    screen?.classList.add('glitch-exit');
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  return (
    <div className="initial-screen">
      <div className="initial-bg-gradient"></div>
      <div className="content">
        <div className="logo-container">
          <div className="logo-pulse">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="35" stroke="#7c3aed" strokeWidth="2.5" opacity="0.3"/>
              <circle cx="50" cy="50" r="28" stroke="#7c3aed" strokeWidth="2" opacity="0.5"/>
              <circle cx="50" cy="50" r="20" stroke="#7c3aed" strokeWidth="1.5"/>
              <path d="M 50 20 L 50 80" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 20 50 L 80 50" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="40" cy="40" r="4" fill="#7c3aed"/>
              <circle cx="60" cy="40" r="4" fill="#7c3aed"/>
              <path d="M 38 65 Q 50 72 62 65" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
        </div>

        <h1 className="title">
          CYBER<span className="neon-text">EGO</span>
        </h1>

        <p className="typing-text">
          {typedText}
          <span className="cursor">|</span>
        </p>

        {showButton && (
          <button className="enter-button" onClick={handleEnter}>
            {t.initial.enterButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default InitialScreen;
