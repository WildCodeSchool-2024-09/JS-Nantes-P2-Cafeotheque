import { createContext, useState, useContext } from "react";
import type React from "react";
import type { Dispatch, SetStateAction } from "react";
import type { UserModel } from "../../models";

interface UserData {
  username: string;
  password: string;
  email: string;
  likedCoffees: number[];
}

type AuthContextType = {
  loggedIn: string | null;
  toggleLogin: (username?: string) => void;
  userData: UserData | null;
  setUserData: Dispatch<SetStateAction<UserData | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const loggedInUser = localStorage.getItem("connected-user");
    return loggedInUser ? loggedInUser : null;
  });

  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("super-secured-database-users");
    const loggedInUser = localStorage.getItem("connected-user");
    if (!loggedInUser || !savedData) return null;
    const parsedData = JSON.parse(savedData) as UserModel;
    return parsedData[loggedInUser] || null;
  });

  const toggleLogin = (username?: string) => {
    setLoggedIn(() => (username ? username : null));

    username
      ? localStorage.setItem("connected-user", username)
      : localStorage.removeItem("connected-user");
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, toggleLogin, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
