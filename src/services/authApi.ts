import { AxiosResponse } from "axios";
import { ISignInForm } from "../interfaces/ISignInForm";
import { api } from ".";

interface IAuhtResponse {
  token: string;
}

async function authLogin({
  username,
  password,
}: ISignInForm): Promise<IAuhtResponse> {
  const response = await api.post<unknown, AxiosResponse<IAuhtResponse>>(
    `/auth/`,
    {
      username,
      password,
    }
  );
  return response.data;
}

export default {
  authLogin,
};
