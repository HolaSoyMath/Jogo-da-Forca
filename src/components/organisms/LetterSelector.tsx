"use client";

import React, { useContext } from "react";
import LetterGroup from "../molecules/LetterGroup";
import GameContext from "@/contexts/GameContext";
import { choicedWord } from "../../../hooks/choicedWord";

export default function LetterSelector() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("GameContext not found in LetterSelector.tsx");
  }

  const { categoryWord, word } = choicedWord();

  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="mb-4 w-full text-center font-semibold">
          Dica: {categoryWord}
        </p>
        <p className="mb-4 w-full text-center font-semibold">Palavra: {word}</p>
      </div>
      <LetterGroup />
    </div>
  );
}
