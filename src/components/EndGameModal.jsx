import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const modalRoot = document.getElementById("modal-root");

export default function EndGameModal({ open, winner, onNextRound, onRestart, onClose }) {
  if (!open) return null;

  const body = (
<div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
  <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-md">
        <h2 className="text-2xl mb-2">Гра завершена</h2>
        <p className="mb-4">{winner === "draw" ? "Нічия" : `Переможець: ${winner}`}</p>
        <div className="flex gap-3">
          <Button text="Наступний тур" onClick={onNextRound} />
          <button className="px-4 py-2 border rounded" onClick={onRestart}>Перезапустити</button>
          <button className="px-4 py-2 border rounded" onClick={onClose}>Закрити</button>
        </div>
      </div>
    </div>
  );

  return createPortal(body, modalRoot);
}
