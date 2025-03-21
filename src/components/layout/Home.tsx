"use client";

import React, { useEffect, useState } from "react";
import LetterSelector from "../organisms/LetterSelector";
import HangmanSide from "../organisms/HangmanSide";
import GameContext from "@/contexts/GameContext";
import LossGame from "../organisms/LossGame";
import WinGame from "../organisms/WinGame";
import { choicedWord } from "../../../hooks/choicedWord";
import { GameState } from "@/enums/GameState";

export default function HomeLayout() {
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [gameState, setGameState] = useState(GameState.Initial);
  const [chosenWord, setChosenWord] = useState<{ id: number; word: string; category: string }>({
    id: 0,
    word: "",
    category: "",
  });

  useEffect(() => {
    if (gameState === GameState.Initial) {
      const SECRET_WORD = choicedWord();
      const id = SECRET_WORD.id;
      const word = SECRET_WORD.word.toUpperCase();
      const category = SECRET_WORD.category;

      setChosenWord({ id, word, category });
      setGameState(GameState.Playing);
    }
  }, [gameState]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-full max-w-[900px] mx-auto">
        <GameContext.Provider
          value={{
            word: chosenWord,
            correctLetters,
            setCorrectLetters,
            wrongLetters,
            setWrongLetters,
            gameState,
            setGameState,
          }}
        >
          <HangmanSide />
          <LetterSelector />
          <WinGame />
          <LossGame />
        </GameContext.Provider>
      </div>
    </div>
  );
}
