import useGameLogic from "../hooks/useGameLogic";
import Header from "../components/Header";

export default function GamePage({ onEnd }) {
  const { board, currentPlayer, winner, makeMove, resetGame } = useGameLogic();

  const handleEnd = () => {
    onEnd(winner || "draw");
    resetGame();
  };

  return (
    <div className="flex flex-col items-center">
      <Header title={`Player: ${currentPlayer}`} />
      <div className="grid grid-cols-7 gap-1 p-2 border">
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: cell === "R" ? "red" : cell === "Y" ? "yellow" : "white" }}
              onClick={() => makeMove(j)}
            />
          ))
        )}
      </div>
      {winner && (
        <p className="mt-2 text-xl">
          Winner: {winner === "draw" ? "Draw" : winner}
        </p>
      )}
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleEnd}
      >
        End Game
      </button>
    </div>
  );
}