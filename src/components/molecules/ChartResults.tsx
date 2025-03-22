"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, XAxis, LabelList } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  win: {
    label: "value",
    color: "#28a745",
  },
  loss: {
    label: "value",
    color: "#dc3545",
  },
} satisfies ChartConfig;

export default function ChartResults() {
  const [wins, setWins] = useState(0);
  const [loss, setLoss] = useState(0);

  useEffect(() => {
    const storedWins = localStorage.getItem("win");
    const storedLoss = localStorage.getItem("loss");
    setWins(storedWins ? parseInt(storedWins) : 0);
    setLoss(storedLoss ? parseInt(storedLoss) : 0);
  }, []);

  // Aqui criamos um único objeto que contém "win" e "loss"
  const data = [
    {
      win: wins,
      loss: loss,
    },
  ];

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={data} margin={{ top: 30 }}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />

        {/* Barra para Vitórias */}
        <Bar dataKey="win" fill="#28a745" radius={4} label={{ position: "top" }} >
          <LabelList
            dataKey="win"
            position="top"
            fill="var(--foreground)"
            fontWeight="bolder"
            fontSize="20px"
          />
        </Bar>

        {/* Barra para Derrotas */}
        <Bar dataKey="loss" fill="#dc3545" radius={4}  >
          <LabelList
            dataKey="loss"
            position="top"
            fill="var(--foreground)"
            fontWeight="bolder"
            fontSize="20px"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
