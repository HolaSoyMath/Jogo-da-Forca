import GameContext from "@/contexts/GameContext";
import { useContext, useEffect } from "react";
import { useGameStats } from "./useGameStats";

export function useLetterVerification() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Not found a GameContext in useLetterVerification.ts");
  }

  const { setCorrectLetters, setWrongLetters, correctLetters, wrongLetters, word } =
    context;
  const { checkGameState } = useGameStats();
  const correctWord = word.word.split("");

  useEffect(() => {
    checkGameState();
  }, [correctLetters, wrongLetters, checkGameState]);

  function verifyWord(letter: string) {
    if (correctWord.includes(letter)) {
      setCorrectLetters((prevList) => [...prevList, letter]);
    } else {
      setWrongLetters((prevList) => [...prevList, letter]);
    }
  }

  return { verifyWord };
}
