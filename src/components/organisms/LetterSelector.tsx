"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import LetterGroup from "../molecules/LetterGroup";
import { useLetterVerification } from "../../../hooks/useLetterVerification";
import { choicedWord } from "../../../hooks/choicedWord";

export default function LetterSelector() {
  const [selectedLetter, setSelectedLetter] = useState("");
  const { verifyWord } = useLetterVerification();
  const { categoryWord, word } = choicedWord();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const letterUpperCase = event.target.value.charAt(0).toUpperCase();
    setSelectedLetter(letterUpperCase);
    verifyWord(selectedLetter);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Letra digitada:", selectedLetter);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="mb-4 w-full text-center font-semibold">
          Dica: {categoryWord}
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
      <LetterGroup />
    </div>
  );
}
