import Button from "../components/Button";
import Header from "../components/Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const result = location.state?.result || "draw";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header title="Game Result" />
      <p className="text-xl mb-4">
        {result === "draw" ? "Draw" : `Winner: ${result}`}
      </p>

      <Button text="Play Again" onClick={() => navigate(`/game/${id}`)} />
    </div>
  );
}