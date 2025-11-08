import Button from "../components/Button";
import Header from "../components/Header";

export default function StartPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header title="Four in a row" />
      <Button text="Start the game" onClick={onStart} />
    </div>
  );
}
