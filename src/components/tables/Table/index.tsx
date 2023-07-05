import { NotFound } from "../../resources/NotFound";
import { Container } from "./styles";
import { IClient } from "../../../interfaces/IClient";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { putCNPJMask } from "../../../utils";

interface ITableProps {
  onEdit?: (client: IClient) => any;
  columns: GridColDef[];
  data?: any[];
  loading?: boolean;
  onViewContent?: (key: string) => void;
}

export const Table = ({
  onEdit,
  columns,
  data,
  loading,
  onViewContent,
}: ITableProps): JSX.Element => {
  const rows = data?.map((item) => {
    const row: any = {};
    columns.forEach((column) => {
      //Colocando mascara de cnpj
      if (column.field === "cnpj") {
        return (row[column.field] = putCNPJMask(item[column.field]));
      }
      if (column.field === "actions") return;
      row[column.field] = item[column.field];
    });
    return row;
  });

  if (!loading && (!data || data?.length === 0 || typeof data == "string"))
    return (
      <Container>
        <NotFound label="Nenhuma informação encontrada." />
      </Container>
    );
  return (
    <Container>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
};
