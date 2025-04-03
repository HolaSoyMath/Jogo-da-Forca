"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { getRankingTop10 } from "../../../hooks/useRanking";
import ResponseRankingTop10 from "@/interface/ResponseRankingTop10";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ModalRanking({ isOpen, onClose }: any) {
  const [results, setResults] = useState<ResponseRankingTop10[]>([]);

  useEffect(() => {
    async function fetchRanking() {
      console.log("entrou");

      const data = await getRankingTop10();
      setResults(data);
    }

    if (isOpen) {
      fetchRanking();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xs md:text-xl md:font-semibold w-full flex items-center">
            Top 10 Players
          </DialogTitle>
          <DialogDescription>
            {results.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Top</TableHead>
                    <TableHead className="text-center">Nome</TableHead>
                    <TableHead className="text-center">Vitórias</TableHead>
                    <TableHead className="text-center">Derrotas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-center text-foreground">
                        <span
                          className={`inline-block rounded-full w-5 h-center text-foreground ${
                            index == 0 && "bg-amber-500"
                          } ${index == 1 && "bg-zinc-500"} ${
                            index == 2 && "bg-amber-700"
                          }`}
                        >
                          {index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="center text-foreground">
                        {result.username}
                      </TableCell>
                      <TableCell className="text-center text-foreground">
                        {result.win}
                      </TableCell>
                      <TableCell className="text-center text-foreground">
                        {result.loss}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p>Carregando...</p>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
