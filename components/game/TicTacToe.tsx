"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, X, Circle } from "lucide-react";

type Player = "X" | "O";
type Cell = Player | null;
type Board = Cell[];

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function checkWinner(board: Board): Player | "draw" | null {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  if (board.every((cell) => cell !== null)) return "draw";
  return null;
}

export default function TicTacToe({ onBack }: { onBack: () => void }) {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "draw" | null>(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || winner) return;
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const result = checkWinner(newBoard);
      if (result) {
        setWinner(result);
        if (result !== "draw") {
          setScores((s) => ({ ...s, [result]: s[result] + 1 }));
        }
      } else {
        setCurrentPlayer((p) => (p === "X" ? "O" : "X"));
      }
    },
    [board, currentPlayer, winner],
  );

  const reset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <button
          onClick={onBack}
          className="text-xs text-zinc-500 hover:text-white transition-colors"
        >
          &larr; Back to games
        </button>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1.5">
            <X size={14} className="text-violet-400" />
            <span className="text-zinc-400">{scores.X}</span>
          </span>
          <span className="text-zinc-600">|</span>
          <span className="flex items-center gap-1.5">
            <Circle size={14} className="text-cyan-400" />
            <span className="text-zinc-400">{scores.O}</span>
          </span>
        </div>
      </div>

      {/* Status */}
      <div className="text-sm font-medium text-zinc-400">
        {winner === "draw" ? (
          <span className="text-amber-400">It&apos;s a draw!</span>
        ) : winner ? (
          <span className="text-primary">
            <span className="font-bold">{winner}</span> wins!
          </span>
        ) : (
          <span>
            <span className={`font-bold ${currentPlayer === "X" ? "text-violet-400" : "text-cyan-400"}`}>
              {currentPlayer}
            </span>
            &nbsp;turn
          </span>
        )}
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-2 w-64">
        {board.map((cell, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: cell !== null || winner ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(i)}
            className={`aspect-square rounded-xl border text-2xl font-bold flex items-center justify-center transition-all duration-200 ${
              cell !== null || winner
                ? "border-white/[0.06] bg-white/[0.03] cursor-default"
                : "border-white/[0.1] bg-white/5 hover:bg-white/[0.08] hover:border-violet-500/30 cursor-pointer"
            } ${winner === "draw" && cell === null ? "opacity-40" : ""}`}
          >
            {cell && (
              <motion.span
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                className={
                  cell === "X" ? "text-violet-400" : "text-cyan-400"
                }
              >
                {cell === "X" ? (
                  <X size={28} strokeWidth={2.5} />
                ) : (
                  <Circle size={28} strokeWidth={2.5} />
                )}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Restart */}
      <button
        onClick={reset}
        className="flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/5 px-4 py-2 text-xs font-medium text-zinc-400 transition-all hover:bg-white/[0.08] hover:text-white"
      >
        <RotateCcw size={13} />
        New Game
      </button>
    </div>
  );
}
