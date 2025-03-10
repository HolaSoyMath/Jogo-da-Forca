"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import LetterGroup from "../molecules/LetterGroup";

type LetterSelectorProps = {
  word: string;
  category: string;
  functionCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>
  functionWrongLetters: React.Dispatch<React.SetStateAction<string[]>>
  listCorrectLetters: string[]
  listWrongLetters: string[]
};

export default function LetterSelector({
  word,
  category,
  functionCorrectLetters,
  functionWrongLetters,
  listCorrectLetters,
  listWrongLetters
}: LetterSelectorProps) {
  const [selectedLetter, setSelectedLetter] = useState("");
  const selectedWord = word.split("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const letterUpperCase = event.target.value.charAt(0).toUpperCase();
    setSelectedLetter(letterUpperCase);
    if (selectedWord.includes(letterUpperCase)) {
      functionCorrectLetters((prevList) => [...prevList, letterUpperCase]);
    } else {
      functionWrongLetters((prevList) => [...prevList, letterUpperCase]);
    }
  };

  const handleLetterSelection = (letter: string) => {
    setSelectedLetter(letter);
    if (selectedWord.includes(letter)) {
      functionCorrectLetters((prevList) => [...prevList, letter]);
    } else {
      functionWrongLetters((prevList) => [...prevList, letter]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Letra digitada:", selectedLetter);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="mb-4 w-full text-center font-semibold">
          Dica: {category}
        </p>
        <p className="mb-4 w-full text-center font-semibold">Palavra: {word}</p>
        <form onSubmit={handleSubmit} className="w-full flex gap-4 ">
          <Input
            placeholder="Digite ou escolha uma letra"
            value={selectedLetter}
            onChange={handleInputChange}
          />
          <Button type="submit" className="cursor-pointer">
            Enviar
          </Button>
        </form>
      </div>
      <LetterGroup
        onLetterSelect={handleLetterSelection}
        correctLetters={listCorrectLetters}
        wrongLetters={listWrongLetters}
      />
    </div>
  );
}
