import GameContext from "@/contexts/GameContext";
import { choicedWord } from "./choicedWord";
import { useContext, useEffect } from "react";
import { useGameStats } from "./useGameState";

export function useLetterVerification() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Not found a GameContext in useLetterVerification.ts");
  }

  const { setCorrectLetters, setWrongLetters, correctLetters, wrongLetters } = context;
  const { isUserWin, isUserLoss } = useGameStats();
  const correctWord = choicedWord().word.split("");

  useEffect(() => {
    isUserWin();
    isUserLoss();
  }, [correctLetters, wrongLetters, isUserWin, isUserLoss])

  function verifyWord(letter: string) {
    if (correctWord.includes(letter)) {
      setCorrectLetters((prevList) => [...prevList, letter]);
    } else {
      setWrongLetters((prevList) => [...prevList, letter]);
    }
  }

  return { verifyWord };
}
