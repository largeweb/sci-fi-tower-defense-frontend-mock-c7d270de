// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GameGrid from "./components/GameGrid";
import Tower from "./components/Tower";
import Enemy from "./components/Enemy";
import UpgradeButton from "./components/UpgradeButton";
import GameOverScreen from "./components/GameOverScreen";

const initialTowers = [
  { id: "tower1", type: "laser", level: 1, position: { x: 2, y: 2 } },
  { id: "tower2", type: "missile", level: 2, position: { x: 5, y: 5 } },
];

const initialEnemies = [
  { id: "enemy1", type: "grunt", health: 100, speed: 1, position: { x: 0, y: 3 } },
  { id: "enemy2", type: "tank", health: 200, speed: 0.5, position: { x: 0, y: 6 } },
];

const gridSize = 10;

export default function Home() {
  const [towers, setTowers] = useState(initialTowers);
  const [enemies, setEnemies] = useState(initialEnemies);
  const [gameOver, setGameOver] = useState(false);

  // Mock upgrade function
  const handleUpgrade = (towerId: string) => {
    setTowers((prevTowers) =>
      prevTowers.map((tower) =>
        tower.id === towerId ? { ...tower, level: tower.level + 1 } : tower
      )
    );
  };

  // Mock restart function
  const handleRestart = () => {
    setTowers(initialTowers);
    setEnemies(initialEnemies);
    setGameOver(false);
  };

  // Mock enemy movement (simplified)
  useEffect(() => {
    if (!gameOver) {
      const intervalId = setInterval(() => {
        setEnemies((prevEnemies) =>
          prevEnemies.map((enemy) => {
            // Simple movement: move right until end of grid
            const newX = Math.min(enemy.position.x + enemy.speed, gridSize - 1);
            return { ...enemy, position: { ...enemy.position, x: newX } };
          })
        );
      }, 1000); // Adjust interval for speed

      return () => clearInterval(intervalId);
    }
  }, [gameOver]);

  // Check for game over condition (simplified)
  useEffect(() => {
    if (enemies.some((enemy) => enemy.position.x >= gridSize - 1)) {
      setGameOver(true);
    }
  }, [enemies]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Sci-Fi Tower Defense (Mock)
      </h1>

      <div className="relative">
        <GameGrid gridSize={gridSize} />

        {/* Render Towers */}
        {towers.map((tower) => (
          <motion.div
            key={tower.id}
            className="absolute"
            style={{
              top: `${(tower.position.y / gridSize) * 100}%`,
              left: `${(tower.position.x / gridSize) * 100}%`,
              width: `${100 / gridSize}%`,
              height: `${100 / gridSize}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Tower type={tower.type} level={tower.level} position={tower.position} />
            <UpgradeButton tower={tower} onClick={() => handleUpgrade(tower.id)} />
          </motion.div>
        ))}

        {/* Render Enemies */}
        {enemies.map((enemy) => (
          <motion.div
            key={enemy.id}
            className="absolute"
            style={{
              top: `${(enemy.position.y / gridSize) * 100}%`,
              left: `${(enemy.position.x / gridSize) * 100}%`,
              width: `${100 / gridSize}%`,
              height: `${100 / gridSize}%`,
            }}
            animate={{ x: `${(enemy.position.x / gridSize) * 100}%` }} // Animate X position
            transition={{ duration: 1 }} // Adjust duration for speed
          >
            <Enemy type={enemy.type} position={enemy.position} />
          </motion.div>
        ))}

        {/* Game Over Screen */}
        {gameOver && (
          <GameOverScreen onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}