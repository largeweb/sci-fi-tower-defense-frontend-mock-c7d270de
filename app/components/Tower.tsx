// app/components/Tower.tsx

import React from "react";
import { motion } from "framer-motion";

interface Props {
  type: "laser" | "missile" | "gatling";
  level: number;
  position: { x: number; y: number };
}

const Tower: React.FC<Props> = ({ type, level, position }) => {
  const baseColor =
    type === "laser" ? "text-red-500" : type === "missile" ? "text-blue-500" : "text-green-500";

  const scale = 1 + level * 0.2; // Increase size based on level

  const towerVariants = {
    initial: { scale: 0 },
    placed: { scale: scale, transition: { duration: 0.5, type: "spring", damping: 10, stiffness: 100 } },
    upgrade: {
      scale: scale,
      color: "#ff0",
      transition: { duration: 0.2 },
      transitionEnd: { color: baseColor },
    },
  };

  return (
    <motion.div
      className={`absolute w-10 h-10 flex items-center justify-center ${baseColor}`}
      style={{
        left: `${position.x * 100}%`,
        top: `${position.y * 100}%`,
      }}
      variants={towerVariants}
      initial="initial"
      animate="placed"
    >
      <motion.div // Inner circle for visual representation
        className="rounded-full"
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
          border: '1px solid rgba(255, 255, 255, 0.5)', // Faint white border
        }}
      />
    </motion.div>
  );
};

return Tower;