import { withErrorHandling } from "@/lib/error-handlers";
import { api } from "@/lib/axios";
import { SignupData } from "../types";

const signupService = async (data: SignupData) => {
  try {
    const payload = {
      username: data.username,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    const response = await api.post(`/auth/signup`, payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = withErrorHandling(signupService);