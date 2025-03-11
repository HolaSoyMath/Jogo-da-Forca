"use client";

import React from "react";
import LetterSelector from "../organisms/LetterSelector";
import HangmanSide from "../organisms/HangmanSide";
import { useLetterVerification } from "../../../hooks/useLetterVerification";

export default function HomeLayout() {
  const {listCorrectLetters, listWrongLetters} = useLetterVerification()

  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-full max-w-[900px] mx-auto">
        <HangmanSide correctList={listCorrectLetters} wrongList={listWrongLetters} />
        <LetterSelector />
      </div>
    </div>
  );
}
