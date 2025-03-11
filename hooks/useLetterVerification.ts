import { useEffect, useState } from "react";
import { choicedWord } from "./choicedWord";

export function useLetterVerification() {
  const [listCorrectLetters, setListCorrectLetters] = useState<string[]>([]);
  const [listWrongLetters, setListWrongLetters] = useState<string[]>([]);

  function verifyWord(letter: string) {
    const word = choicedWord().word.split("");

    if (word.includes(letter)) {
      setListCorrectLetters((prevList) => [...prevList, letter]);
    } else {
      setListWrongLetters((prevList) => [...prevList, letter]);
    }

    
  }

  useEffect(() => {
    console.log('CorrectList: ', listCorrectLetters);
    console.log('WrongList: ', listWrongLetters);
  }, [listCorrectLetters, listWrongLetters])

  return { listCorrectLetters, listWrongLetters, verifyWord };
}
