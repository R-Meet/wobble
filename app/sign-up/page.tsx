import SignUp from "@/modules/auth/sign-up"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to create an account",
};

const SignupPage = () => {
  return (
    <SignUp />
  )
}

export default SignupPage