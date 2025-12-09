import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const modalRoot = document.getElementById("modal-root");

export default function EndGameModal({
  open,
  winner,
  onNextRound,
  onRestart,
  onClose,
  onShowResult
}) {
  if (!open) return null;

  const body = (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Game Over</h2>
        <p className="mb-4 text-lg">
          {winner === "draw" ? "Draw" : `Winner: ${winner}`}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button text="Next Round" onClick={onNextRound} className="bg-green-500 text-white hover:bg-green-600" />
          <Button text="Restart" onClick={onRestart} className="bg-yellow-500 text-white hover:bg-yellow-600" />
          <Button text="Close" onClick={onClose} className="bg-gray-500 text-white hover:bg-gray-600" />
          <Button text="Show Result" onClick={onShowResult} className="bg-blue-500 text-white hover:bg-blue-600" />
        </div>
      </div>
    </div>
  );

  return createPortal(body, modalRoot);
}
