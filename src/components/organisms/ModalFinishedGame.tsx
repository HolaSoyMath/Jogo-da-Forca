import { useContext } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import GameContext from "@/contexts/GameContext";
import ChartResults from "../molecules/ChartResults";
import ResetGame from "../atoms/ResetGame";
import { GameState } from "@/enums/GameState";

export default function ModalFinishedGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Context not found in LossGame.tsx");
  }

  const { setModalOpen, modalOpen, gameState, word } = context;

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={(open) => {
        if (!open) {
          setModalOpen(false);
        }
      }}
    >
      <DialogContent className="px-4 max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-xs md:text-xl md:font-semibold w-full text-center inline-block">
            {gameState === GameState.Loss ? (
              <>
                <p>Que pena, você foi enforcado!</p>
                <p>
                  A palavra era{" "}
                  <span className="font-semibold">{word.word}</span>
                </p>
              </>
            ) : (
              <>
                <p>Parabéns, você acertou a palavra!</p>
                <p>Sua inteligência venceu a forca!</p>
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        <ChartResults />
        <div className="flex px-12 gap-x-2">
          <p className="w-1/2 text-center text-foreground font-semibold">
            Vitória
          </p>
          <p className="w-1/2 text-center text-foreground font-semibold">
            Derrota
          </p>
        </div>
        <DialogFooter className="flex-row justify-between w-full">
          <div className="flex w-full items-center justify-between">
            <DialogClose className="cursor-pointer hover:bg-input px-4 py-2 rounded-md">Fechar</DialogClose>
            <ResetGame />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
