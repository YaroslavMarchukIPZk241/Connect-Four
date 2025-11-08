import Header from "../components/Header";

export default function GamePage({ onEnd }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header title="the game continues..." />
      <div className="border-4 border-blue-400 w-[350px] h-[300px] flex items-center justify-center">
        {/* Тут буде поле гри */}
        <p>Game field (placeholder)</p>
      </div>
      <button onClick={onEnd} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        End game
      </button>
    </div>
  );
}
