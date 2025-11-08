import Header from "../components/Header";
import Button from "../components/Button";

export default function ResultPage({ result, onRestart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header title="Rezult game" />
      <p className="text-xl mb-4">{result}</p>
      <Button text="Play again" onClick={onRestart} />
    </div>
  );
}
