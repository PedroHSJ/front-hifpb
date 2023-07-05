import { useEffect } from "react";
import { Template } from "../../components/layouts/Template";
import { DataDictionaryTable } from "../../components/tables/DataDictionaryTable";
import { H2 } from "../../components/texts/H2";
import { useEstabelecimento } from "../../hooks/useEstabelecimento";
import { toast } from "react-toastify";

export const Estabelecimento = (): JSX.Element => {
  //hook useEstabelecimento
  const { get, data, error, isLoading } = useEstabelecimento();

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    if (!error) return;
    const errorOK = error as Error;
    toast.error(`Erro no login: ${errorOK.message}`);
  }, [error]);

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  return (
    <Template>
      <H2>Estabelecimentos</H2>
      <DataDictionaryTable
        columns={[
          { field: "id", headerName: "ID", width: 90 },
          {
            field: "nome",
            headerName: "Nome",
            width: 200,
          },
          {
            field: "cnpj",
            headerName: "CNPJ",
            width: 200,
          },
        ]}
        data={data}
      />
    </Template>
  );
};
