import React from "react";
import { ToggleTheme } from "./ToggleTheme";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full h-16">
      <div className="flex justify-between items-center h-full max-w-[900px] mx-auto px-10 lg:px-0">
        <p className="text-2xl font-semibold">Jogo da Forca</p>
        <div className="flex gap-4 items-center">
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
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
