import React from "react";
import { Button } from "../ui/button";

type LetterButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
};

export default function LetterButton({
  children,
  className = "",
  ...props
}: LetterButtonProps) {
  return (
    <Button
      className={`cursor-pointer bg-transparent border-border border-1 text-foreground hover:text-background ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
