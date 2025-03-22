import React, { useContext } from "react";
import LetterButton from "../atoms/LetterButton";
import { useLetterVerification } from "../../../hooks/useLetterVerification";
import GameContext from "@/contexts/GameContext";

export default function LetterGroup() {

  const context = useContext(GameContext);

  if(!context) {
    throw new Error ("GameContext not found in LetterGroup.tsx")
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const { verifyWord } = useLetterVerification();

  const { correctLetters, wrongLetters, gameState } = context;

  return (
    <div className="grid grid-cols-9 gap-2">
      {alphabet.map((letter, index) => (
        <LetterButton
          key={index}
          onClick={() => verifyWord(letter)}
          disabled={correctLetters.includes(letter) || wrongLetters.includes(letter) || gameState === 'win' || gameState === 'loss'}
          className={`${
            wrongLetters.includes(letter)
              ? "bg-red-500"
              : correctLetters.includes(letter)
              ? "bg-green-500"
              : ""
          }
            `}
        >
          {letter}
        </LetterButton>
      ))}
    </div>
  );
}
