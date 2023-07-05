import { useEffect } from "react";
import { toast } from "react-toastify";
import { useGetAllClient } from "../../../hooks/useGetAllClient";
import { Table } from "../Table";
import { Container } from "./styles";
import { handleErrorMessage } from "../../../utils";

export const ClientsTable = () => {
  const { isLoading, data, error } = useGetAllClient();

  useEffect(() => {
    if (!error) return;
    toast.error(`Erro ao buscar os clientes - ${handleErrorMessage(error)}`);
  }, [error]);

  return (
    <Container>
      {/* <Table
        columns={[
          { field: "id", headerName: "ID", width: 90 },
          { field: "nome", headerName: "Nome", width: 200 },
        ]}
        data={data}
        loading={isLoading}
        onViewContent={() => {}}
      /> */}
    </Container>
  );
};
