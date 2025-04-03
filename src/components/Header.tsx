'use client'

import React, { useState } from "react";
import { ToggleTheme } from "./ToggleTheme";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ChartNoAxesColumn } from "lucide-react";
import { ModalRanking } from "./organisms/ModalRanking";

export default function Header() {

  const [isRankingOpen, setIsRankingOpen] = useState(true);

  return (
    <header className="w-full h-16">
      <div className="flex justify-between items-center h-full max-w-[900px] mx-auto px-10 lg:px-0">
        <p className="text-2xl font-semibold">Jogo da Forca</p>
        <div className="flex gap-2 items-center">
          <Button className="cursor-pointer bg-background text-foreground hover:bg-input" onClick={() => setIsRankingOpen(true)}>
            <ChartNoAxesColumn />
            Ranking
          </Button>
          <ToggleTheme />
          <SignedOut>
            <SignInButton>
              <Button className="cursor-pointer bg-background text-foreground border-1 border-border hover:text-background">
                Entrar
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="cursor-pointer bg-background text-foreground border-1 border-border hover:text-background">
                Registrar
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              showName={true}
            />
          </SignedIn>
        </div>
      </div>
      <ModalRanking isOpen={isRankingOpen} onClose={() => setIsRankingOpen(false)} />
    </header>
  );
}
