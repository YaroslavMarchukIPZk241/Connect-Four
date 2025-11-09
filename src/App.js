import usePageState from "./hooks/usePageState";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

function App() {
  const { page, result, goToStart, goToGame, goToResult } = usePageState();

  return (
    <>
      {page === "start" && <StartPage onStart={goToGame} />}
      {page === "game" && <GamePage onEnd={goToResult} />}
      {page === "result" && <ResultPage result={result} onRestart={goToStart} />}
    </>
  );
}

export default App;
