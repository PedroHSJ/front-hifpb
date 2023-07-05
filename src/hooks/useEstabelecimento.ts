import { useState } from "react";
import { IEstabelecimento } from "../interfaces/IEstabelecimento";
import { estabelecimentoApi } from "../services";

export const useEstabelecimento = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IEstabelecimento[]>();
  const [error, setError] = useState<unknown>();

  const get = async () => {
    try {
      setIsLoading(true);
      const data = await estabelecimentoApi.getEstabelecimentos();
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    get,
  };
};
