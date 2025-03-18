import { createContext } from "react";

interface GameContextType {
  correctLetters: string[];
  setCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;
  wrongLetters: string[];
  setWrongLetters: React.Dispatch<React.SetStateAction<string[]>>;
  gameState: string
  setGameState: React.Dispatch<React.SetStateAction<string>>;
}

const GameContext = createContext<GameContextType | null>(null);

export default GameContext;
