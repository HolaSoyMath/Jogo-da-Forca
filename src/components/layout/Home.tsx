"use client";

import React, { useEffect, useState } from "react";
import LetterSelector from "../organisms/LetterSelector";
import HangmanSide from "../organisms/HangmanSide";
import { wordsListHangman } from "../../../words.mock";

export default function HomeLayout() {
  // const [wrongGuesses, setWrongGuesses] = useState(0);
  const [listCorrectLetters, setListCorrectLetters] = useState<string[]>([]);
  const [listWrongLetters, setListWrongLetters] = useState<string[]>([]);

  const SECRET_WORD = wordsListHangman[3];

  useEffect(() => {
    console.log(listCorrectLetters);
    console.log(listWrongLetters);
  }, [listCorrectLetters, listWrongLetters]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-full max-w-[900px] mx-auto">
        <HangmanSide
          wrongGuesses={listWrongLetters.length}
          word={SECRET_WORD.word.toUpperCase()}
          listCorrectLetters={listCorrectLetters}
        />
        <LetterSelector
          category={SECRET_WORD.category}
          word={SECRET_WORD.word.toUpperCase()}
          functionCorrectLetters={setListCorrectLetters}
          functionWrongLetters={setListWrongLetters}
          listCorrectLetters={listCorrectLetters}
          listWrongLetters={listWrongLetters}
        />
      </div>
    </div>
  );
}
