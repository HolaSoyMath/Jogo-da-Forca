import { useContext } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import GameContext from "@/contexts/GameContext";
import { useGameStats } from "../../../hooks/useGameStats";
import ChartResults from "../molecules/ChartResults";

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
        <DialogHeader>Que pena, você foi enforcado! <br /> Tente novamente e desvende a próxima palavra!</DialogHeader>
        <DialogDescription>
          <ChartResults />
          <div className="flex px-12 gap-x-2">
            <p className="w-1/2 text-center text-foreground font-semibold">Vitória</p>
            <p className="w-1/2 text-center text-foreground font-semibold">Derrota</p>
          </div>
        </DialogDescription>
        <DialogFooter>
          <DialogClose onClick={() => resetGame()}>Fechar</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
