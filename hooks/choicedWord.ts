import { wordsListHangman } from "../words.mock";

export function choicedWord() {
  const SECRET_WORD = wordsListHangman[3];
  const idWord = SECRET_WORD.id;
  const word = SECRET_WORD.word.toUpperCase();
  const categoryWord = SECRET_WORD.category;

  return {idWord, word, categoryWord};
}
