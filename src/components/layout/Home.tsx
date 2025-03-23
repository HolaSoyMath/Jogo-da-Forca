"use client";

import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import LetterSelector from "../organisms/LetterSelector";
import HangmanSide from "../organisms/HangmanSide";
import GameContext from "@/contexts/GameContext";
import LossGame from "../organisms/LossGame";
import WinGame from "../organisms/WinGame";
import { choicedWord } from "../../../hooks/choicedWord";
import { GameState } from "@/enums/GameState";
import WinFireworks from "../atoms/WinFireworks";
import ResetGame from "../atoms/ResetGame";

export default function HomeLayout() {
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [gameState, setGameState] = useState(GameState.Initial);
  const [chosenWord, setChosenWord] = useState<{
    id: number;
    word: string;
    category: string;
  }>({
    id: 0,
    word: "",
    category: "",
  });
  const [modalOpenLoss, setModalOpenLoss] = useState(false);
  const [modalOpenWin, setModalOpenWin] = useState(false);

  useEffect(() => {
    if (gameState === GameState.Loss) {
      setModalOpenLoss(true);
    }
    if (gameState === GameState.Win) {
      setModalOpenWin(true);
    }
  }, [gameState]);

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
      <div className="flex flex-col gap-10 lg:gap-2 lg:flex-row justify-between items-center h-full max-w-[900px] mx-auto">
        <GameContext.Provider
          value={{
            word: chosenWord,
            correctLetters,
            setCorrectLetters,
            wrongLetters,
            setWrongLetters,
            gameState,
            setGameState,
            modalOpenLoss,
            setModalOpenLoss,
            modalOpenWin,
            setModalOpenWin,
          }}
        >
          <HangmanSide />
          <div className="h-full gap-4 lg:h-96 flex flex-col justify-between pb-4 min-w-[300px]">
            <LetterSelector />
            {gameState === GameState.Win && <ResetGame />}
            {gameState === GameState.Loss && <ResetGame />}
          </div>
          <WinGame />
          <LossGame />
          {gameState === GameState.Win && <WinFireworks />}
        </GameContext.Provider>
      </div>
    </div>
  );
}
