import { atom } from "recoil";

type AuthModalState = {
  isOpen: boolean;
  mode: "login" | "register" | "forgotPassword";
};

const initialAuthModalState: AuthModalState = {
  isOpen: false,
  mode: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: initialAuthModalState,
});
