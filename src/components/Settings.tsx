import { SunIcon, MoonIcon, MonitorIcon } from './Icons';
import { useI18n } from '../i18n/I18nContext';
import { useTheme } from '../contexts/ThemeContext';
import { Language } from '../i18n/translations';
import './Settings.css';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings = ({ isOpen, onClose }: SettingsProps) => {
  const { t, language, setLanguage } = useI18n();
  const { theme, setTheme } = useTheme();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: t.settings.language.english },
    { code: 'pt', label: t.settings.language.portuguese },
    { code: 'es', label: t.settings.language.spanish },
  ];

  const themes: Array<{ value: 'light' | 'dark' | 'system'; label: string; icon: JSX.Element }> = [
    { value: 'light', label: t.settings.theme.light, icon: <SunIcon /> },
    { value: 'dark', label: t.settings.theme.dark, icon: <MoonIcon /> },
    { value: 'system', label: t.settings.theme.system, icon: <MonitorIcon /> },
  ];

  if (!isOpen) return null;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2 className="settings-title">{t.settings.title}</h2>
          <button className="settings-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3 className="settings-section-title">{t.settings.theme.title}</h3>
            <div className="settings-options">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.value}
                  className={`settings-option ${theme === themeOption.value ? 'active' : ''}`}
                  onClick={() => setTheme(themeOption.value)}
                >
                  <span className="settings-option-icon">{themeOption.icon}</span>
                  <span className="settings-option-label">{themeOption.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="settings-section">
            <h3 className="settings-section-title">{t.settings.language.title}</h3>
            <div className="settings-options">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`settings-option ${language === lang.code ? 'active' : ''}`}
                  onClick={() => setLanguage(lang.code)}
                >
                  <span className="settings-option-label">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
