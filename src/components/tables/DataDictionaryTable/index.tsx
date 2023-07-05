import { GridColDef } from "@mui/x-data-grid";
import { Table } from "../Table";
import { Container } from "./styles";
interface IDataTable {
  id: string;
  field: string;
  type: string;
  description: string;
  data: string;
}

interface IDataDictionaryTableProps {
  columns: GridColDef[];
  data?: any[];
}

export const DataDictionaryTable = ({
  columns,
  data,
}: IDataDictionaryTableProps) => {
  return (
    <Container>
      <Table columns={columns} data={data} />
    </Container>
  );
};
