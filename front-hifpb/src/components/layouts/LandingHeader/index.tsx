import {
	Container,
	Content,
	Title,
	HomeButton,
	MenuContainer,
	MenuItem,
	Image,
	SigIngutton,
} from './styles';
import Logo from '../../../assets/images/logo.png';

interface ILandingHeaderProps {
	scrolled?: boolean;
}

export const LandingHeader = ({
	scrolled,
}: ILandingHeaderProps): JSX.Element => {
	return (
		<Container scrolled={scrolled}>
			<Content>
				<HomeButton to="/landing">
					<Image src={Logo} />
					<Title>AtendHealth</Title>
					<MenuContainer>
						<MenuItem>Contratar</MenuItem>
						<MenuItem>Preços</MenuItem>
						<MenuItem>Sobre</MenuItem>
					</MenuContainer>
				</HomeButton>
				<SigIngutton to="/login">Entrar</SigIngutton>
			</Content>
		</Container>
	);
};
