import { useContext } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import GameContext from "@/contexts/GameContext";
import { useGameStats } from "../../../hooks/useGameStats";

export default function WinGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Context not found in WinGame.tsx");
  }

  const { gameState } = context;
  const { resetGame } = useGameStats();
  return (
    <Dialog open={gameState === "win"}>
      <DialogContent>
        <DialogHeader>PARABÉNS, VC É BÃO MEMO</DialogHeader>
        <DialogFooter>
          <DialogClose onClick={() => resetGame()}>Fechar</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
