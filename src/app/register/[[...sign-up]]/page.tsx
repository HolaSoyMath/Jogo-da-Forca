import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <div className="w-full flex justify-center">
      <SignUp />
    </div>
  );
}
