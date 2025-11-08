import { useState } from "react";
import "./App.css";

import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [page, setPage] = useState("start");
  const handleStart = () => setPage("game");
  const handleEnd = () => setPage("result");
  const handleRestart = () => setPage("start");

  return (
    <div className="App">
      {page === "start" && <StartPage onStart={handleStart} />}
      {page === "game" && <GamePage onEnd={handleEnd} />}
      {page === "result" && <ResultPage result="draw" onRestart={handleRestart} />}
    </div>
  );
}


export default App;