import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}
