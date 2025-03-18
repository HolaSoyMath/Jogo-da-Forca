import GameContext from "@/contexts/GameContext";
import { choicedWord } from "./choicedWord";
import { useContext } from "react";

export function useGameStats() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Not found a GameContext in gameState.ts");
  }

  const { correctLetters, wrongLetters, setGameState } = context;
  const correctWord = choicedWord().word.split("");

  function isUserWin() {
    const allLettersGuessed = correctWord.every((letter) =>
      correctLetters.includes(letter)
    );

    if (allLettersGuessed) {
      setGameState("win");
    } else {
      setGameState("gaming");
    }
  }

  function isUserLoss() {
    console.log(wrongLetters.length);
    
    if(wrongLetters.length == 6){
      setGameState("loss");
    } else {
      setGameState("gaming");
    }
  }

  return { isUserWin, isUserLoss };
}
