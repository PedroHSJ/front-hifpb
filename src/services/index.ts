import axios, { InternalAxiosRequestConfig } from "axios";
import authApi from "./authApi";
import tokenApi from "./tokenApi";
import logApi from "./logApi";
import userApi from "./userApi";
import playgroundApi from "./playgroundApi";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 7000,
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<any> => {
    try {
      const token = localStorage.getItem("@token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    } catch (error) {
      console.log("Erro: ", error);
    }
  }
);

export { api, authApi, tokenApi, logApi, userApi, playgroundApi };
