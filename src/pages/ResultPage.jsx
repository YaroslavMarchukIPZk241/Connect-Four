import Button from "../components/Button";
import Header from "../components/Header";

export default function ResultPage({ result, onRestart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header title="Game Result" />
      <p className="text-xl mb-4">
        {result === "draw" ? "Draw" : `Winner: ${result}`}
      </p>
      <Button text="Play Again" onClick={onRestart} />
    </div>
  );
}
