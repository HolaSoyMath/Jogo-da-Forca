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

export default function LossGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Context not found in LossGame.tsx");
  }

  const { gameState } = context;
  const { resetGame } = useGameStats();
  return (
    <Dialog open={gameState === "loss"}>
      <DialogContent>
        <DialogHeader>Você PERDEU, ruim!</DialogHeader>
        <DialogFooter>
          <DialogClose onClick={() => resetGame()}>Fechar</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
