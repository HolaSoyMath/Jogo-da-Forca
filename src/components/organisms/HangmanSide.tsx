"use client";

import React, { useContext } from "react";
import HangmanDrawing from "../HagmanDrawing";
import { useTheme } from "next-themes";
import { Heart, Skull } from "lucide-react";
import GameContext from "@/contexts/GameContext";
import { removeDiacritics } from "@/functions/RemoveDiacritics";

export default function HangmanSide() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GameContext not found in HangmanSide.tsx");
  }

  const { correctLetters, wrongLetters, word } = context;
  const theme = useTheme().theme;

  const selectedWord = word.word.toUpperCase().split("");

  return (
    <div className="w-full px-4">
      <div className="flex justify-center items-center gap-4 w-full h-8">
        {/* CORAÇÕES */}
        {[...Array(6 - wrongLetters.length)].map((_, index) => (
          <Heart key={index} className="fill-red-600 text-red-600" />
        ))}
        {/* CRÂNIOS */}
        {[...Array(wrongLetters.length)].map((_, index) => (
          <Skull key={index} />
        ))}
      </div>
      <div className="h-[300px]">
        <HangmanDrawing
          color={theme === "light" ? "black" : "white"}
          wrongGuesses={wrongLetters.length}
        />
      </div>
      <div className="flex justify-center w-full gap-4">
        {selectedWord.map((letter, index) => {
          
          if (letter === " ") {
            return (
              <div key={index} className="text-2xl w-6 h-9 text-center">
                &nbsp; {/* ou " " */}
              </div>
            );
          }

          const normalizedLetter = removeDiacritics(letter);
          return (
            <div
              key={index}
              className="text-2xl border-b-2 border-foreground w-6 h-9 text-center"
            >
              {correctLetters.includes(normalizedLetter) ? letter : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
