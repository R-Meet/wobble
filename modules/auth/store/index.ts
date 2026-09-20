import { create } from "zustand";
import { AuthStore } from "../types";
import { signup } from "../services";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export const useAuthStore = create<AuthStore>((set) => ({

  loading: false,
  username: "",
  password: "",
  confirmPassword: "",

  handleSignupSubmit: async (data) => {
    set({ loading: true });
    const res = await signup(data);

    if ( res.success ) {
      toast.success(res.message);
      set({ loading: false });
      redirect("/sign-in")
    }

    set({ loading: false });
  }
}));