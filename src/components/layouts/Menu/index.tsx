import { SideBarButton } from "../../buttons/SideBarButton";
import { Container, Title } from "./styles";
import { getRole } from "../../../utils";

export const Menu = () => {
  return (
    <Container>
      <Title>Monitoramento</Title>
      <SideBarButton label="Dashboard" path="/dashboard" />
      <Title>Administração</Title>
      <SideBarButton label="Estabelecimento" path="/estabelecimento" />
      <SideBarButton label="Intérpretes" path="/profile" />
    </Container>
  );
};
