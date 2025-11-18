import { useEffect, useRef, useState } from "react";

export default function useGameLogic({ rows = 6, columns = 7, perMoveSeconds = 10 } = {}) {
  const [board, setBoard] = useState(Array(rows).fill(null).map(() => Array(columns).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("R"); 
  const [winner, setWinner] = useState(null);
  const [timeLeft, setTimeLeft] = useState(perMoveSeconds);
  const timerRef = useRef(null);
  useEffect(() => {
    resetGame();
  }, [rows, columns, perMoveSeconds]);

  useEffect(() => {
    if (winner) clearTimer();
  }, [winner]);

  useEffect(() => {
    setTimeLeft(perMoveSeconds);
    startTimer();
  }, [currentPlayer]);

  const startTimer = () => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearTimer();
          setWinner(currentPlayer === "R" ? "Y" : "R"); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const makeMove = (col) => {
    if (winner) return; 
    const row = [...board].reverse().findIndex(r => !r[col]);
    if (row === -1) return;
    const actualRow = board.length - 1 - row;

    const newBoard = board.map(r => [...r]);
    newBoard[actualRow][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard, actualRow, col, currentPlayer)) {
      setWinner(currentPlayer);
      clearTimer();
    } else if (newBoard.every(r => r.every(cell => cell))) {
      setWinner("draw"); 
      clearTimer();
    } else {
      setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
    }
  };

  const resetGame = () => {
    setBoard(Array(rows).fill(null).map(() => Array(columns).fill(null)));
    setCurrentPlayer("R");
    setWinner(null);
    setTimeLeft(perMoveSeconds);
    clearTimer();
    startTimer();
  };
  useEffect(() => {
    return () => clearTimer();
  }, []);

  return { board, currentPlayer, winner, makeMove, resetGame, timeLeft };
}
function checkWin(board, row, col, player) {
  const directions = [
    [[0,1],[0,-1]],
    [[1,0],[-1,0]],
    [[1,1],[-1,-1]],
    [[1,-1],[-1,1]]
  ];

  for (let dir of directions) {
    let count = 1;
    for (let [dx, dy] of dir) {
      let r = row + dx;
      let c = col + dy;
      while (board[r]?.[c] === player) {
        count++;
        r += dx;
        c += dy;
      }
    }
    if (count >= 4) return true;
  }
  return false;
}
