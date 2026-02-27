import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import { SettingsProvider } from "./context/SettingsContext";
import SettingsModal from "./components/SettingsModal";
import { useState } from "react";
import CookieConsentBanner from "./components/CookieConsentBanner";
function AppWrapper() {
  return (
    <SettingsProvider>
      <Router>
        <App />
        <CookieConsentBanner />
      </Router>
    </SettingsProvider>
  );
}

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="App">
        
      <header className="p-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Connect Four</h1>

        <div>
          <button
            onClick={() => setShowSettings(true)}
            className="mr-2 px-3 py-1 border rounded"
          >
            Settings
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-3 py-1 border rounded"
          >
            Home
          </button>
        </div>
      </header>

      <SettingsModal open={showSettings} onClose={() => setShowSettings(false)} />

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/result/:id" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;
