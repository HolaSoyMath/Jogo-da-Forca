import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function LoginMenuExpanded() {

  return (
    <div className="hidden md:flex items-center gap-2">
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
    </div>
  );
}
