import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
  <div className="relative top-1 flex items-center justify-center h-full w-full">
    <SignIn path="/" routing="path" signUpUrl="/sign-up" afterSignInUrl="/discover"/>
  </div>
);

export default SignInPage;
