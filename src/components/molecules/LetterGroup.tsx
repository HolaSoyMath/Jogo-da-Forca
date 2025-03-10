"use client";

import React from "react";
import LetterButton from "../atoms/LetterButton";

interface LetterGroupProps {
  onLetterSelect: (letter: string) => void;
  wrongLetters: string[];
  correctLetters: string[];
}

export default function LetterGroup({
  onLetterSelect,
  wrongLetters = [],
  correctLetters = [],
}: LetterGroupProps) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="grid grid-cols-12 gap-2">
      {alphabet.map((letter, index) => (
        <LetterButton
          key={index}
          onClick={() => onLetterSelect(letter)}
          className={`${
            wrongLetters.includes(letter)
              ? "bg-red-500"
              : correctLetters.includes(letter)
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
