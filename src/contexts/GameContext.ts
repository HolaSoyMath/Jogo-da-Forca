import { GameState } from "@/enums/GameState";
import { createContext } from "react";

interface GameContextType {
  word: {id: number, word: string, category: string};
  correctLetters: string[];
  setCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;
  wrongLetters: string[];
  setWrongLetters: React.Dispatch<React.SetStateAction<string[]>>;
  gameState: string
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const GameContext = createContext<GameContextType | null>(null);

export default GameContext;
