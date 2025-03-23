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
      <DialogContent className="px-4 max-w-sm">
        <DialogHeader className="text-xs md:text-m w-full flex items-center">
          <p>Parabéns, você acertou a palavra!</p>
          <p>Sua inteligência venceu a forca!</p>
        </DialogHeader>
        <DialogDescription className="w-full">
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
        <DialogFooter className="flex-row justify-between w-full">
          <div className="flex w-full items-center justify-between">
            <DialogClose>Fechar</DialogClose>
            <ResetGame />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
