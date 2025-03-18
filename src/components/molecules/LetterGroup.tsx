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

  const { correctLetters, wrongLetters } = context;

  return (
    <div className="grid grid-cols-12 gap-2">
      {alphabet.map((letter, index) => (
        <LetterButton
          key={index}
          onClick={() => verifyWord(letter)}
          disabled={correctLetters.includes(letter) || wrongLetters.includes(letter)}
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
