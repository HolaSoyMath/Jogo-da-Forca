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

export default function WinGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Context not found in WinGame.tsx");
  }

  const { modalOpenWin, setModalOpenWin } = context;
  
  return (
    <Dialog
      open={modalOpenWin}
      onOpenChange={(open) => {
        if (!open) {
          setModalOpenWin(false);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          Parabéns, você acertou a palavra! Sua inteligência venceu a forca!
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
        <DialogFooter>
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