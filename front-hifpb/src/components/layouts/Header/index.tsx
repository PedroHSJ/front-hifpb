import { HeaderContainer, Content, HomeButton, Title, Image } from "./styles";
import { HamburguerButton } from "../../buttons/HamburguerButton";
import { useMenuModal } from "../../functional/useMenuModal";
import Logo from "../../../assets/images/logo.png";

export const Header = (): JSX.Element => {
  const { openMenuModal, MenuModal } = useMenuModal();
  return (
    <HeaderContainer>
      <Content>
        <MenuModal />
        <HamburguerButton onClick={openMenuModal} />
        <HomeButton to="/dashboard">
          <Image src={Logo} />
          <Title>HIFP</Title>
        </HomeButton>
      </Content>
    </HeaderContainer>
  );
};
