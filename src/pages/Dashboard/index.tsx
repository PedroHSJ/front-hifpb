import { Template } from "../../components/layouts/Template";
import { H2 } from "../../components/texts/H2";
import { Paragraph } from "../../components/texts/Paragraph";
import { LogTable } from "../../components/tables/LogTable";
import { ClientsTable } from "../../components/tables/ClientsTable";
import { getRole } from "../../utils";

export const Dashboard = (): JSX.Element => {
  return (
    <Template>
      <H2>Home Admin</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        voluptatem a commodi officiis magni voluptate dignissimos nemo. Possimus
        maiores dolorum, corporis illum esse pariatur recusandae officia magni
        quae eos modi!
      </Paragraph>
      <ClientsTable />
    </Template>
  );
};
