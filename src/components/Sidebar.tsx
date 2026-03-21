import { DebateIcon, DilemmaIcon, PersonasIcon, SettingsIcon } from './Icons';
import { useI18n } from '../i18n/I18nContext';
import './Sidebar.css';

interface SidebarProps {
  activeMode: string;
  onModeChange: (mode: string) => void;
  onSettings: () => void;
}

const Sidebar = ({ activeMode, onModeChange, onSettings }: SidebarProps) => {
  const { t } = useI18n();

  const modes = [
    { id: 'debate', icon: <DebateIcon />, label: t.sidebar.modes.debate },
    { id: 'dilemma', icon: <DilemmaIcon />, label: t.sidebar.modes.dilemma },
    { id: 'personas', icon: <PersonasIcon />, label: t.sidebar.modes.personas },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="18" stroke="#7c3aed" strokeWidth="2" opacity="0.3"/>
            <circle cx="24" cy="24" r="14" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="24" cy="24" r="10" stroke="#7c3aed" strokeWidth="1.5"/>
            <path d="M 24 10 L 24 38" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M 10 24 L 38 24" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="19" cy="19" r="2.5" fill="#7c3aed"/>
            <circle cx="29" cy="19" r="2.5" fill="#7c3aed"/>
            <path d="M 18 30 Q 24 34 30 30" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <div className="sidebar-title">{t.sidebar.title}</div>
        <div className="sidebar-version">v0.1</div>
      </div>

      <nav className="sidebar-nav">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className={`sidebar-item ${activeMode === mode.id ? 'active' : ''}`}
            onClick={() => onModeChange(mode.id)}
          >
            <span className="sidebar-icon">{mode.icon}</span>
            <span className="sidebar-label">{mode.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-settings" onClick={onSettings}>
          <span className="settings-icon"><SettingsIcon /></span>
          <span>{t.sidebar.settings}</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
