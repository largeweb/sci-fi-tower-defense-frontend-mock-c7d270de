// app/components/Enemy.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  type: string;
  position: { x: number; y: number };
}

const Enemy: React.FC<Props> = ({ type, position }) => {
  // Define a simple style based on enemy type
  const enemyStyle = {
    'grunt': 'bg-green-500',
    'tank': 'bg-red-500',
    'scout': 'bg-blue-500'
  };

  // Default style if type is not recognized
  const baseStyle = "w-6 h-6 rounded-full absolute";
  const className = baseStyle + " " + (enemyStyle[type] || 'bg-gray-500');

  return (
    <motion.div
      className={className}
      style={{
        left: `${position.x * 100}%`,
        top: `${position.y * 100}%`,
      }}
      animate={{ x: 0, y: 0 }} // Placeholder, actual animation handled by parent
    />
  );
};

return Enemy;