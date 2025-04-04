'use client'

import React, { useState } from "react";
import { ToggleTheme } from "./ToggleTheme";
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ChartNoAxesColumn } from "lucide-react";
import { ModalRanking } from "./organisms/ModalRanking";
import LoginMenuCollapsed from "./molecules/loginMenu/LoginMenuCollapsed";
import LoginMenuExpanded from "./molecules/loginMenu/LoginMenuExpanded";
import { useWindowSize } from "../../hooks/useWindowsSize";

export default function Header() {

  const [isRankingOpen, setIsRankingOpen] = useState(false);

  return (
    <header className="w-full h-16">
      <div className="flex justify-between items-center h-full max-w-[900px] mx-auto px-10 lg:px-0">
        <p className="md:text-2xl font-semibold text-xl">Jogo da Forca</p>
        <div className="flex gap-2 items-center">
          <Button className="cursor-pointer bg-background text-foreground hover:bg-input" onClick={() => setIsRankingOpen(true)}>
            <ChartNoAxesColumn />
            <span className="hidden md:inline ml-2">Ranking</span>
          </Button>
          <ToggleTheme />
          <LoginMenuCollapsed />
          <LoginMenuExpanded />
          <SignedIn>
            <UserButton
              showName={useWindowSize().width > 768}
            />
          </SignedIn>
        </div>
      </div>
      <ModalRanking isOpen={isRankingOpen} onClose={() => setIsRankingOpen(false)} />
    </header>
  );
}
