"use client";

import React from "react";
import LetterButton from "../atoms/LetterButton";
import { useLetterVerification } from "../../../hooks/useLetterVerification";

export default function LetterGroup() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const { listCorrectLetters, listWrongLetters, verifyWord } =
    useLetterVerification();

  return (
    <div className="grid grid-cols-12 gap-2">
      {alphabet.map((letter, index) => (
        <LetterButton
          key={index}
          onClick={() => verifyWord(letter)}
          className={`${
            listWrongLetters.includes(letter)
              ? "bg-red-500"
              : listCorrectLetters.includes(letter)
              ? "bg-green-500"
              : ""
          }`}
        >
          {letter}
        </LetterButton>
      ))}
    </div>
  );
}
