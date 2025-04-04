import { useState } from "react";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginMenuCollapsed() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SignedOut>
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          <Menu />
        </button>

        {menuOpen && (
          <div className="absolute top-12 right-0 bg-background border rounded-md shadow-lg p-4 z-50 flex flex-col gap-2 w-40">
            <SignInButton>
              <Button
                className="w-full bg-background text-foreground border border-border hover:text-background"
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button
                className="w-full bg-background text-foreground border border-border hover:text-background"
                onClick={() => setMenuOpen(false)}
              >
                Registrar
              </Button>
            </SignUpButton>
          </div>
        )}
      </div>
    </SignedOut>
  );
}
