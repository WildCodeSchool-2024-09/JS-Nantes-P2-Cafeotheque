import { createContext, useContext, useState } from "react";
import type React from "react";
import type { UserData } from "../../types/userData";

type AuthContextType = {
  loggedIn: string | null;
  toggleLogin: (username?: string) => void;
  userData: UserData | null;
  setUserData: (newUserData: UserData) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const loggedInUser = localStorage.getItem("connected-user");
    return loggedInUser ? loggedInUser : null;
  });

  const [userData, setUserDataState] = useState<UserData | null>(() => {
    const savedData = localStorage.getItem("super-secured-database-users");
    const loggedInUser = localStorage.getItem("connected-user");
    if (!loggedInUser || !savedData) return null;
    const parsedData = JSON.parse(savedData) as UserData[];
    const uData = parsedData.find((u: UserData) => u.username === loggedInUser);
    return uData || null;
  });

  const setUserData = (newUserData: UserData) => {
    const localStorageUserData = localStorage.getItem(
      "super-secured-database-users",
    ) as string;
    const JSONUserData = JSON.parse(localStorageUserData);
    const userIndex = JSONUserData.findIndex((obj: UserData) => {
      return obj.username === newUserData.username;
    });
    JSONUserData[userIndex] = newUserData;
    const newData = JSON.stringify(JSONUserData);
    localStorage.setItem("super-secured-database-users", newData);
    setUserDataState(newUserData);
  };

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
