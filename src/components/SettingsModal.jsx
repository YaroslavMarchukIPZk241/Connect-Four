import React from "react";
import { createPortal } from "react-dom";
import SettingsForm from "../pages/SettingsForm";

/**
 * Modal window containing game settings form.
 *
 * @param {Object} props
 * @param {boolean} props.open
 * @param {Function} props.onClose
 */
export default function SettingsModal({ open, onClose }) {
  if (!open) return null;


  let modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = "modal-root";
    document.body.appendChild(modalRoot);
  }

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="bg-white rounded-lg p-6 z-10 w-11/12 max-w-md">
        <h2 className="text-2xl mb-4">Game settings</h2>
        <SettingsForm onClose={onClose} />
      </div>
    </div>,
    modalRoot
  );
}