// app/components/UpgradeButton.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onClick: () => void;
  tower: any; // Replace 'any' with the actual type of your tower object
}

const UpgradeButton: React.FC<Props> = ({ onClick, tower }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Upgrade Tower
    </motion.button>
  );
};

return UpgradeButton;