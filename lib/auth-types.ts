export type UserRole = "ADMIN" | "DOCTOR" | "ASSISTANT";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthSession {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
