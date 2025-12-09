import Button from "../components/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  const startGame = () => {
    const userId = Date.now(); 
    navigate(`/game/${userId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header title="Four in a row" />
      <Button text="Start the game" onClick={startGame} />
    </div>
  );
}
