import GameContext from "@/contexts/GameContext";
import { GameState } from "@/enums/GameState";
import { useContext } from "react";

export function useGameStats() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Not found a GameContext in gameState.ts");
  }

  const { correctLetters, setCorrectLetters, wrongLetters, setWrongLetters, setGameState, gameState, word } = context;

  const correctWord = word.word.split("");

  function checkGameState() {
    if (gameState === GameState.Win || gameState === GameState.Loss) {
      return;
    }

    const allLettersGuessed = correctWord.every((letter: string) =>
      correctLetters.includes(letter)
    );

    if (allLettersGuessed) {
      setGameState(GameState.Win);
      
    }

    if (wrongLetters.length === 6) {
      setGameState(GameState.Loss);
    }
  }

  function resetGame() {
    setCorrectLetters([]);
    setWrongLetters([]);
    setGameState(GameState.Initial);
  }

  return { checkGameState, resetGame };
}
