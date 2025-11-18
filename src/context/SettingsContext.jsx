import React, { createContext, useContext, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { defaultSettings } from "../utils/helpers";

const KEY = "connect4_settings";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => loadFromStorage(KEY, defaultSettings));

  useEffect(() => {
    saveToStorage(KEY, settings);
  }, [settings]);

  const updateSettings = (patch) => {
    setSettings(prev => ({ ...prev, ...patch }));
  };

  const applyPreset = (difficulty) => {
    let preset = {};
    switch (difficulty) {
      case "easy":
        preset = { rows: 6, columns: 7, perMoveSeconds: 20 };
        break;
      case "normal":
        preset = { rows: 7, columns: 7, perMoveSeconds: 15 };
        break;
      case "hard":
        preset = { rows: 8, columns: 8, perMoveSeconds: 10 };
        break;
      default:
        return;
    }
    setSettings(prev => ({ ...prev, difficulty, ...preset }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, applyPreset }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
};
