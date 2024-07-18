// AuthContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface AuthContextType {
  userID: string | null;
  login: (userID: string, password: string) => Promise<void>;
  verifyPin: (pin: string) => Promise<boolean>;
  logout: () => void;
  reset: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    const userIDCookie = getCookie("userID");
    if (userIDCookie) {
      setUserID(userIDCookie);
    }
  }, []);

  const login = async (userID: string, password: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?userID=${userID}&password=${password}`
      );
      if (response.data.length > 0) {
        setUserID(userID);
        document.cookie = `userID=${userID}; path=/;`;
        document.cookie = `firstLogin=true; path=/;`;
      } else {
        throw new Error("Invalid userID or password");
      }
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const verifyPin = async (pin: string): Promise<boolean> => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?userID=${userID}&pin=${pin}`
      );
      return response.data.length > 0;
    } catch (error) {
      console.error("PIN verification failed", error);
      return false;
    }
  };

  const logout = () => {
    setUserID(null);
    document.cookie = `userID=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    document.cookie = `firstLogin=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  };

  const reset = () => {
    setUserID(null);
    document.cookie = `userID=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  return (
    <AuthContext.Provider value={{ userID, login, verifyPin, logout, reset }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
