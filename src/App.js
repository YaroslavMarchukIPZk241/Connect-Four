import { useState } from "react";
import "./App.css";

import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import { SettingsProvider } from "./context/SettingsContext";
import SettingsModal from "./components/SettingsModal";

function App() {
  const [page, setPage] = useState("start");
  const [result, setResult] = useState("draw");
  const [showSettings, setShowSettings] = useState(false);

  const handleStart = () => setPage("game");
  const handleEnd = (gameResult) => {
    setResult(gameResult);
    setPage("result");
  };
  const handleRestart = () => setPage("start");

  return (
    <SettingsProvider>
      <div className="App">
        <header className="p-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Чотири в ряд</h1>
          <div>
            <button
              onClick={() => setShowSettings(true)}
              className="mr-2 px-3 py-1 border rounded"
            >
              Налаштування
            </button>
            <button
              onClick={() => setPage("start")}
              className="px-3 py-1 border rounded"
            >
              Головна
            </button>
          </div>
        </header>

    
        <SettingsModal open={showSettings} onClose={() => setShowSettings(false)} />

        {page === "start" && <StartPage onStart={handleStart} />}
        {page === "game" && <GamePage onEnd={handleEnd} />}
        {page === "result" && <ResultPage result={result} onRestart={handleRestart} />}
      </div>
    </SettingsProvider>
  );
}

export default App;
