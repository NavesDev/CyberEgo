import { useState } from 'react';
import Sidebar from './Sidebar';
import Settings from './Settings';
import { DebateIcon, DilemmaIcon, PersonasIcon } from './Icons';
import { useI18n } from '../i18n/I18nContext';
import './Dashboard.css';

const Dashboard = () => {
  const [activeMode, setActiveMode] = useState('debate');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { t } = useI18n();

  const handleSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const renderContent = () => {
    switch (activeMode) {
      case 'debate':
        return (
          <div className="mode-content">
            <div className="mode-header">
              <h2 className="mode-title">
                <span className="mode-title-icon"><DebateIcon /></span>
                {t.dashboard.debate.title}
              </h2>
              <p className="mode-description">
                {t.dashboard.debate.description}
              </p>
            </div>
            <div className="placeholder-content">
              <div className="coming-soon">{t.dashboard.comingSoon}</div>
            </div>
          </div>
        );
      case 'dilemma':
        return (
          <div className="mode-content">
            <div className="mode-header">
              <h2 className="mode-title">
                <span className="mode-title-icon"><DilemmaIcon /></span>
                {t.dashboard.dilemma.title}
              </h2>
              <p className="mode-description">
                {t.dashboard.dilemma.description}
              </p>
            </div>
            <div className="placeholder-content">
              <div className="coming-soon">{t.dashboard.comingSoon}</div>
            </div>
          </div>
        );
      case 'personas':
        return (
          <div className="mode-content">
            <div className="mode-header">
              <h2 className="mode-title">
                <span className="mode-title-icon"><PersonasIcon /></span>
                {t.dashboard.personas.title}
              </h2>
              <p className="mode-description">
                {t.dashboard.personas.description}
              </p>
            </div>
            <div className="placeholder-content">
              <div className="coming-soon">{t.dashboard.comingSoon}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar
        activeMode={activeMode}
        onModeChange={setActiveMode}
        onSettings={handleSettings}
      />
      <div className="dashboard-content">
        {renderContent()}
      </div>
      <Settings isOpen={isSettingsOpen} onClose={handleCloseSettings} />
    </div>
  );
};

export default Dashboard;
