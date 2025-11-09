import { useState } from "react";

export default function usePageState() {
  const [page, setPage] = useState("start"); 
  const [result, setResult] = useState("");

  const goToStart = () => setPage("start");
  const goToGame = () => setPage("game");
  const goToResult = (gameResult) => {
    setResult(gameResult);
    setPage("result");
  };

  return { page, result, goToStart, goToGame, goToResult };
}