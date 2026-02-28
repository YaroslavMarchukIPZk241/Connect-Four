/**
 * @module EndGameModal
 * @description Modal component displayed when the game ends.
 */

import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const modalRoot = document.getElementById("modal-root");

/**
 * Props for EndGameModal component.
 *
 * @typedef {Object} EndGameModalProps
 * @property {boolean} open - Controls modal visibility
 * @property {string} winner - Winner name or "draw"
 * @property {function(): void} onNextRound - Starts next round
 * @property {function(): void} onRestart - Restarts the game
 * @property {function(): void} onClose - Closes modal
 * @property {function(): void} onShowResult - Opens result page
 */

/**
 * Modal displayed when the game ends.
 *
 * Shows winner information and available actions.
 *
 * @component
 * @param {EndGameModalProps} props
 * @returns {JSX.Element|null}
 */
export default function EndGameModal({
  open,
  winner,
  onNextRound,
  onRestart,
  onClose,
  onShowResult
}) {
  if (!open) return null;

  if (!modalRoot) {
    console.error("Modal root element not found");
    return null;
  }

  const body = (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Game Over</h2>

        <p className="mb-4 text-lg">
          {winner === "draw" ? "Draw" : `Winner: ${winner}`}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button text="Next Round" onClick={onNextRound} />
          <Button text="Restart" onClick={onRestart} />
          <Button text="Close" onClick={onClose} />
          <Button text="Show Result" onClick={onShowResult} />
        </div>
      </div>
    </div>
  );

  return createPortal(body, modalRoot);
}