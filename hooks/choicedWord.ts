import { wordsListHangman } from "../src/mock/words.mock";

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function choicedWord(): {id: number, word: string, category: string} {
  const randomValue = randomBetween(1, 189)
  const SECRET_WORD = wordsListHangman[randomValue];
  // const SECRET_WORD = {id: 179, word: 'Cibersegurança', category: "Tecnologia"};
  const id = SECRET_WORD.id;
  const word = SECRET_WORD.word.toUpperCase();
  const category = SECRET_WORD.category;

  return {id, word, category};
}