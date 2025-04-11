// app/components/GameOverScreen.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onRestart: () => void;
}

const GameOverScreen: React.FC<Props> = ({ onRestart }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/75 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
        <p className="text-gray-300 mb-6">
          Your defenses were overrun. Better luck next time!
        </p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onRestart}
        >
          Restart
        </button>
      </div>
    </motion.div>
  );
};

return GameOverScreen;