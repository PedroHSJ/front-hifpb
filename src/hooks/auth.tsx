import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import jwt from "jwt-decode";
import { authApi, userApi } from "../services";
import { ISignInForm } from "../interfaces/ISignInForm";
import { IAdmin } from "../interfaces/IAdmin";

interface IAuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  user?: IAdmin;
  loading: boolean;
  error: string | unknown;
  isAuthorized: boolean;
  login: (loginFormData: ISignInForm) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | unknown>("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("@token");
    if (!userToken) return;
    const jwtToken = jwt<{ exp: string }>(userToken!);
    const expirationDate = new Date(+jwtToken.exp * 1000);
    if (expirationDate < new Date()) return;
    setIsAuthorized(true);
  }, []);

  const login = async (loginFormData: ISignInForm) => {
    try {
      setLoading(true);
      setError("");
      const data = await authApi.authLogin(loginFormData);
      localStorage.setItem("@token", data.token);
      const jwtToken = jwt<{ uid: string }>(data.token);
      console.log(jwtToken);
      localStorage.setItem("@user/id", jwtToken.uid);
      setIsAuthorized(true);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    localStorage.clear();
    setIsAuthorized(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        error,
        isAuthorized,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
