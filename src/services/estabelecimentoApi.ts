import { AxiosResponse } from "axios";
import { api } from ".";
import { IEstabelecimento } from "../interfaces/IEstabelecimento";

async function getEstabelecimentos() {
  const response = await api.get<unknown, AxiosResponse<IEstabelecimento[]>>(
    `/estabelecimento`
  );
  return response.data;
}

export default {
  getEstabelecimentos,
};
