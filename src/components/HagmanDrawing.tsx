import React from "react";

type HangmanDrawingProps = {
  wrongGuesses: number
  color: string
}

export default function HangmanDrawing({wrongGuesses, color}: HangmanDrawingProps) {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Base */}
        <line
          x1="40"
          y1="180"
          x2="160"
          y2="180"
          stroke={color}
          strokeWidth="4"
        />
        {/* Vertical pole */}
        <line x1="60" y1="20" x2="60" y2="180" stroke={color} strokeWidth="4" />
        {/* Top */}
        <line x1="60" y1="20" x2="140" y2="20" stroke={color} strokeWidth="4" />
        {/* Rope */}
        <line
          x1="140"
          y1="20"
          x2="140"
          y2="40"
          stroke={color}
          strokeWidth="4"
        />

        {/* Parts that appear with wrong guesses */}
        <g className="transition-opacity duration-500">
          {wrongGuesses > 0 && (
            // Head
            <circle
              cx="140"
              cy="60"
              r="20"
              stroke={color}
              strokeWidth="4"
              fill="none"
              className="animate-[draw_0.5s_ease-in-out_forwards]"
            />
          )}
          {wrongGuesses > 1 && (
            // Body
            <line
              x1="140"
              y1="80"
              x2="140"
              y2="120"
              stroke={color}
              strokeWidth="4"
              className="animate-[draw_0.5s_ease-in-out_forwards]"
            />
          )}
          {wrongGuesses > 2 && (
            // Left arm
            <line
              x1="140"
              y1="90"
              x2="110"
              y2="100"
              stroke={color}
              strokeWidth="4"
              className="animate-[draw_0.5s_ease-in-out_forwards]"
            />
          )}
          {wrongGuesses > 3 && (
            // Right arm
            <line
              x1="140"
              y1="90"
              x2="170"
              y2="100"
              stroke={color}
              strokeWidth="4"
              className="animate-[draw_0.5s_ease-in-out_forwards]"
            />
          )}
          {wrongGuesses > 4 && (
            // Left leg
            <line
              x1="140"
              y1="120"
              x2="110"
              y2="150"
              stroke={color}
              strokeWidth="4"
              className="animate-[draw_0.5s_ease-in-out_forwards]"
            />
          )}
          {wrongGuesses > 5 && (
            // Right leg
            <line
              x1="140"
              y1="120"
              x2="170"
              y2="150"
              stroke={color}
              strokeWidth="4"
              className="animate-[draw_0.5s_ease-in-out_forwards]"
            />
          )}
        </g>
      </svg>
    </div>
  );
}
