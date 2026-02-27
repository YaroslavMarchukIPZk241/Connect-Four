import React from "react";
import { createPortal } from "react-dom";
import SettingsForm from "../pages/SettingsForm";

const modalRoot = document.getElementById("modal-root");
/**
 * Modal window containing game settings form.
 *
 * Uses React Portal to render above application content.
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.open
 * @param {Function} props.onClose
 */
export default function SettingsModal({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 z-10 w-11/12 max-w-md">
        <h2 className="text-2xl mb-4">Game settings</h2>
        <SettingsForm onClose={onClose} />
      </div>
    </div>,
    modalRoot
  );
}
