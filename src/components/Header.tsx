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
        <div className="flex gap-2 items-center">
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
              appearance={{
                elements: {
                  userButtonBox:
                    "h-12 px-3 text-foreground hover:bg-input rounded-lg !focus-visible:outline-none",
                    userButtonBox__open: '!bg-input !outline-none',
                    userButtonPopoverCard: '!bg-background !shadow-lg !rounded-xl !border-2 !border-border',
                    userButtonPopoverMain: '!bg-transparent !text-foreground', 
                    userButtonPopoverActionButton : '!text-foreground !hover:text-foreground',
                    userButtonPopoverFooter: '!hidden'
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
