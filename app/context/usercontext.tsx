import axios from "axios";
import React, { createContext, useState, type ReactNode } from "react";

interface IUserContext {
  children: ReactNode;
}
type TUserContext = {
  user: any | undefined;
  login: (data: any) => Promise<void>;
  logout: () => void;
};
export const UserContext = createContext<TUserContext | null>(null);

function UserProvider({ children }: IUserContext) {
  const [user, setUser] = useState(null);
  async function login(data) {
    setUser(data);
  }
  function logout() {
    try {
      axios
        .request({
          method: "POST",
          url: `http://localhost:7070/auth/Logout`,
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.refresh_token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setUser(null);
        });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status);
        console.error(err.response);
      } else {
        console.error(err);
      }
      throw new Error(String(err));
    }
  }
  const value = {
    user,
    login,
    logout,
  } as TUserContext;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
