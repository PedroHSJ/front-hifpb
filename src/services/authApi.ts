import { AxiosResponse } from "axios";
import { ISignInForm } from "../interfaces/ISignInForm";
import { api } from ".";

async function authLogin({ username, password }: ISignInForm): Promise<any> {
  //const userTypeValue = userTypes.find(value => value.key == userType);
  const response = await api.post<unknown, AxiosResponse<any>>(`/auth/`, {
    username,
    password,
  });
  console.log(response.data);
  return response.data;
}

export default {
  authLogin,
};
