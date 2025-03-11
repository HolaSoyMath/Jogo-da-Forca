"use client";

import React, { useEffect } from "react";
import HangmanDrawing from "../HagmanDrawing";
import { useTheme } from "next-themes";
import { Heart, Skull } from "lucide-react";
import { choicedWord } from "../../../hooks/choicedWord";
import { useLetterVerification } from "../../../hooks/useLetterVerification";

export default function HangmanSide() {
  const { listCorrectLetters, listWrongLetters } = useLetterVerification();

  const { word } = choicedWord();
  const theme = useTheme().theme;
  const selectedWord = word.split("");

  useEffect(() => {
    console.log("HangmanSide CorrectList: ", listCorrectLetters);
    console.log("HangmanSide WrongList: ", listWrongLetters);
  }, [listCorrectLetters, listWrongLetters]);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-4 w-full h-8">
        {[...Array(6 - listWrongLetters.length)].map((_, index) => (
          <Heart key={index} className="fill-red-600 text-red-600" />
        ))}
        {[...Array(listWrongLetters.length)].map((_, index) => (
          <Skull key={index} className="" />
        ))}
      </div>
      <div className="h-[300px]">
        <HangmanDrawing
          color={theme === "light" ? "black" : "white"}
          wrongGuesses={listWrongLetters.length}
        />
      </div>
      <div className="flex justify-center w-full gap-4">
        {selectedWord.map((letter, index) => {
          return (
            <div
              key={index}
              className="text-2xl border-b-2 border-foreground w-6 h-9 text-center"
            >
              {listCorrectLetters.includes(letter) && letter}
            </div>
          );
        })}
      </div>
    </div>
  );
}
