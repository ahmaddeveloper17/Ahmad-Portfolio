"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X as XIcon, Grid3x3, Puzzle, Brain, Dices, Sword, Target } from "lucide-react";
import TicTacToe from "./TicTacToe";

type Page = "menu" | "tictactoe";

interface GameEntry {
  id: string;
  title: string;
  icon: React.ReactNode;
  available: boolean;
  color: string;
}

const games: GameEntry[] = [
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    icon: <Grid3x3 size={20} />,
    available: true,
    color: "from-violet-600 to-cyan-500",
  },
  {
    id: "snake",
    title: "Snake",
    icon: <Dices size={20} />,
    available: false,
    color: "from-emerald-600 to-teal-500",
  },
  {
    id: "brain",
    title: "Brain Game",
    icon: <Brain size={20} />,
    available: false,
    color: "from-purple-600 to-pink-500",
  },
  {
    id: "puzzle",
    title: "Puzzle",
    icon: <Puzzle size={20} />,
    available: false,
    color: "from-amber-600 to-orange-500",
  },
  {
    id: "sword",
    title: "Battle",
    icon: <Sword size={20} />,
    available: false,
    color: "from-red-600 to-rose-500",
  },
  {
    id: "target",
    title: "Aim Lab",
    icon: <Target size={20} />,
    available: false,
    color: "from-blue-600 to-indigo-500",
  },
];

export default function GameHub() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<Page>("menu");

  const handleOpen = () => {
    setOpen(true);
    setPage("menu");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-xl hover:shadow-violet-600/40"
        aria-label="Games"
      >
        <Gamepad2 size={22} />
      </motion.button>

      {/* Overlay + Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-white/[0.08] bg-[#0F0F1A]/95 backdrop-blur-xl p-5 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Gamepad2 size={16} className="text-violet-400" />
                  <span className="text-sm font-bold text-white">Game Hub</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/5 text-zinc-500 hover:text-white transition-colors"
                >
                  <XIcon size={13} />
                </button>
              </div>

              {/* Content */}
              {page === "menu" && (
                <div className="grid grid-cols-2 gap-3">
                  {games.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => {
                        if (game.available && game.id === "tictactoe") setPage("tictactoe");
                      }}
                      disabled={!game.available}
                      className={`group relative flex flex-col items-center gap-2 rounded-xl border p-4 transition-all duration-200 ${
                        game.available
                          ? "border-white/[0.07] bg-white/5 hover:border-violet-500/30 hover:bg-white/[0.08] cursor-pointer"
                          : "border-white/[0.04] bg-white/[0.02] cursor-not-allowed opacity-50"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${game.color} bg-opacity-20`}
                      >
                        {game.icon}
                      </div>
                      <span className="text-xs font-medium text-zinc-300">
                        {game.title}
                      </span>
                      {!game.available && (
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-zinc-600">
                          Coming soon
                        </span>
                      )}
                      {game.available && (
                        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {page === "tictactoe" && (
                <TicTacToe onBack={() => setPage("menu")} />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
