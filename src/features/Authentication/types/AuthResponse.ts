import { AppUser } from "./AppUser";

export type AuthResponse = {
  token: string;
  user: AppUser;
};
