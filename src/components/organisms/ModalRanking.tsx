"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import ResponseRankingTop10 from "@/interface/ResponseRankingTop10";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { getRankingTop10 } from "@/services/getRanking";

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
        </DialogHeader>
        {results === null ? (
            <p className="text-center text-foreground text-xl">Carregando...</p>
          ) : results.length > 0 ? (
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
                        className={`inline-flex items-center justify-center rounded-full w-5 h-5 text-white font-bold ${
                          index === 0 ? "bg-amber-500" :
                          index === 1 ? "bg-gray-500" :
                          index === 2 ? "bg-amber-700" :
                          "bg-transparent"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-foreground">
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
            <p className="text-center text-foreground text-xl">
              Sem dados a serem carregados
            </p>
          )}
      </DialogContent>
    </Dialog>
  );
}
