"use client";

import React, { useState } from "react";
import LetterSelector from "../organisms/LetterSelector";
import HangmanSide from "../organisms/HangmanSide";
import GameContext from "@/contexts/GameContext";

export default function HomeLayout() {

  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [gameState, setGameState] = useState('')

  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-full max-w-[900px] mx-auto">
        <GameContext.Provider value={{ correctLetters, setCorrectLetters,  wrongLetters, setWrongLetters, gameState, setGameState }}>
          <HangmanSide />
          <LetterSelector />
        </GameContext.Provider>
      </div>
    </div>
  );
}
