"use client";

import React, { useEffect } from "react";
import LetterButton from "../atoms/LetterButton";
import { useLetterVerification } from "../../../hooks/useLetterVerification";

export default function LetterGroup() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const { listCorrectLetters, listWrongLetters, verifyWord } =
    useLetterVerification();

  useEffect(() => {
    console.log("LetterGroup CorrectList: ", listCorrectLetters);
    console.log("LetterGroup WrongList: ", listWrongLetters);
  }, [listCorrectLetters, listWrongLetters]);

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
