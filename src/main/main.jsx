import { GameSettingsProvider } from "./context/GameSettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameSettingsProvider>
    <App />
  </GameSettingsProvider>
);
