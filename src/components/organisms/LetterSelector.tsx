"use client";

import React, { useContext } from "react";
import LetterGroup from "../molecules/LetterGroup";
import GameContext from "@/contexts/GameContext";

export default function LetterSelector() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("GameContext not found in LetterSelector.tsx");
  }

  const { word } = context;

  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="mb-4 w-full text-center font-semibold">
          Dica: {word.category}
        </p>
        <p className="mb-4 w-full text-center font-semibold">Palavra: {word.word}</p>
      </div>
      <LetterGroup />
    </div>
  );
}
