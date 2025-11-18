import React, { useState, useEffect } from "react";
import useGameLogic from "../hooks/useGameLogic";
import Header from "../components/Header";
import EndGameModal from "../components/EndGameModal";
import SettingsModal from "../components/SettingsModal";
import { useSettings } from "../context/SettingsContext";

export default function GamePage() {
  const { settings } = useSettings();
  const { board, currentPlayer, winner, makeMove, resetGame, timeLeft } = useGameLogic(settings);
  const [endModalOpen, setEndModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [score, setScore] = useState({ R: 0, Y: 0 });

  useEffect(() => {
    if (winner) {
      setEndModalOpen(true);
      if (winner === "R" || winner === "Y") {
        setScore(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
      }
    }
  }, [winner]);

  const handleRestart = () => {
    resetGame();
    setEndModalOpen(false);
    setScore({ R: 0, Y: 0 });
  };

  const handleNextRound = () => {
    resetGame();
    setEndModalOpen(false);
  };

  const handleCloseEndModal = () => {
    setEndModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Header title={`Player: ${currentPlayer}`} />

      <div className="flex gap-4 mb-2">
        <p className="font-semibold text-red-500">Red: {score.R}</p>
        <p className="font-semibold text-yellow-500">Yellow: {score.Y}</p>
      </div>

      <p>Time left: {timeLeft} sec</p>

      <div
        className="grid gap-1 mb-4"
        style={{ gridTemplateColumns: `repeat(${board[0].length}, 40px)` }}
      >
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer"
              style={{
                backgroundColor:
                  cell === "R" ? "red" : cell === "Y" ? "yellow" : "white",
              }}
              onClick={() => makeMove(j)}
            />
          ))
        )}
      </div>

      <EndGameModal
        open={endModalOpen}
        winner={winner}
        onRestart={handleRestart}
        onNextRound={handleNextRound}
        onClose={handleCloseEndModal}
      />

      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}
