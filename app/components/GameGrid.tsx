// app/components/GameGrid.tsx
import React from "react";

interface Props {
  gridSize: number;
}

const GameGrid: React.FC<Props> = ({ gridSize }) => {
  return (
    <div
      className="grid relative border border-purple-800 shadow-md"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
        width: 'min(700px, 90vw)',
        height: 'min(700px, 90vw)'
      }}
    >
      {Array.from({ length: gridSize * gridSize }).map((_, index) => (
        <div
          key={index}
          className="border border-purple-900/20 bg-purple-900/5 aspect-square"
        />
      ))}
    </div>
  );
};

return GameGrid;