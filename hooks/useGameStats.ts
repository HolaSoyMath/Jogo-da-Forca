import GameContext from "@/contexts/GameContext";
import { GameState } from "@/enums/GameState";
import { removeDiacritics } from "@/functions/RemoveDiacritics";
import { saveResult } from "@/services/saveResult";
import { useUser } from "@clerk/nextjs";
import { useContext } from "react";

function changeScoreboard(scoreboard: string) {
  const localValue = localStorage.getItem(scoreboard);
  const newValue: number = localValue ? parseInt(localValue) + 1 : 1;
  localStorage.setItem(scoreboard, newValue.toString());
}

export function useGameStats() {
  const context = useContext(GameContext);
  const { user } = useUser();

  if (!context) {
    throw new Error("Not found a GameContext in gameState.ts");
  }

  const {
    correctLetters,
    setCorrectLetters,
    wrongLetters,
    setWrongLetters,
    setGameState,
    gameState,
    word,
    setModalOpen,
  } = context;

  const correctWord = removeDiacritics(word.word.toUpperCase()).split("");

  function checkGameState() {
    if (gameState !== GameState.Playing) {
      return;
    }

    const allLettersGuessed = correctWord.every((letter: string) =>
      correctLetters.includes(letter)
    );

    if (allLettersGuessed) {
      setGameState(GameState.Win);
      
      if (user?.id) {
        saveResult(user.id, "win");
      }
      changeScoreboard("win");
    }

    if (wrongLetters.length === 6) {
      setGameState(GameState.Loss);
      if (user?.id) {
        saveResult(user.id, "loss");
      }
      changeScoreboard("loss");
    }
  }

  function resetGame() {
    setCorrectLetters([]);
    setWrongLetters([]);
    setModalOpen(false);
    setGameState(GameState.Initial);
  }

  return { checkGameState, resetGame };
}
