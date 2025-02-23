import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface IUserContext {
  children: ReactNode;
}
type TUserContext = {
  user: any | undefined;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
};
export const UserContext = createContext<TUserContext | undefined>(undefined);

function UserProvider({ children }: IUserContext) {
  const [user, setUser] = useState(undefined);
  async function register(data: any) {
    try {
      axios
        .request({
          method: "POST",
          url: `http://localhost:7070/auth/Register`,
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          data: data,
        })
        .then((response) => {
         console.log(response.data);
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
  async function login(data: any) {
    try {
      axios
        .request({
          method: "POST",
          url: `http://localhost:7070/auth/Login`,
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          data: data,
        })
        .then((response) => {
          setUser(response.data);
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
          setUser(undefined);
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
    register,
    login,
    logout,
  } as TUserContext;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;

export const useAuth = () => useContext(UserContext);
