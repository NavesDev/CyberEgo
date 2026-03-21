import { useState } from "react";
import { I18nProvider } from "./i18n/I18nContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import InitialScreen from "./components/InitialScreen";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleEnter = () => {
    setShowDashboard(true);
  };

  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="app">
          {!showDashboard ? (
            <InitialScreen onEnter={handleEnter} />
          ) : (
            <Dashboard />
          )}
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
