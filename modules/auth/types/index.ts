import z from "zod";
import { SignupSchema } from "../validation";

export type PasswordFieldProps = React.ComponentProps<"input"> & {
  label?: string;
};

export type AuthStore = {
  loading: boolean;
  username: string;
  password: string;
  confirmPassword: string;

  handleSignupSubmit: (data: SignupData) => void;
};

export type SignupData = z.infer<typeof SignupSchema>;