import EndGameModal from "../EndGameModal";

export default {
  title: "Complex/EndGameModal",
  component: EndGameModal
};

export const PlayerWins = {
  args: {
    open: true,
    winner: "Player 1",
    onNextRound: () => {},
    onRestart: () => {},
    onClose: () => {},
    onShowResult: () => {}
  }
};

export const DrawGame = {
  args: {
    open: true,
    winner: "draw",
    onNextRound: () => {},
    onRestart: () => {},
    onClose: () => {},
    onShowResult: () => {}
  }
};