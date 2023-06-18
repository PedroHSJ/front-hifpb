import { SideBarButton } from "../../buttons/SideBarButton";
import { Container, Title } from "./styles";
import { getRole } from "../../../utils";

export const Menu = () => {
  return (
    <Container>
      <Title>Monitoramento</Title>
      <SideBarButton label="Dashboard" path="/dashboard" />
      <Title>Usuário</Title>
      <SideBarButton label="Perfil" path="/profile" />
      <Title>API</Title>
      <SideBarButton label="Chave de API" path="/apikey" />
      <SideBarButton label="Playground" path="/playground" />
      <Title>Sistema</Title>
    </Container>
  );
};
