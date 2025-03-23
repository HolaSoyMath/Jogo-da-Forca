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
import ChartResults from "../molecules/ChartResults";
import ResetGame from "../atoms/ResetGame";

export default function LossGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Context not found in LossGame.tsx");
  }

  const { modalOpenLoss, setModalOpenLoss } = context;

  return (
    <Dialog
      open={modalOpenLoss}
      onOpenChange={(open) => {
        if (!open) {
          setModalOpenLoss(false);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          Que pena, você foi enforcado! <br /> Tente novamente e desvende a próxima palavra!
        </DialogHeader>
        <DialogDescription>
          <ChartResults />
          <div className="flex px-12 gap-x-2">
            <p className="w-1/2 text-center text-foreground font-semibold">
              Vitória
            </p>
            <p className="w-1/2 text-center text-foreground font-semibold">
              Derrota
            </p>
          </div>
        </DialogDescription>
        <DialogFooter className="flex-row justify-between">
          <div className="flex w-full items-center">
            <DialogClose>Fechar</DialogClose>
          </div>
          <div>
            <ResetGame />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
