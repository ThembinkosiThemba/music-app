import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      afterSignUpUrl="/discover"
    />
  );
};

export default SignUpPage;
