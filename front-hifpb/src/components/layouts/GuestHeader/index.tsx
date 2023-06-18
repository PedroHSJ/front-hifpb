import { BackButton } from '../../buttons/BackButton';
import { Container, Image } from './styles';
import Logo from '../../../assets/images/logo.png';
import { H2 } from '../../texts/H2';

export const GuestHeader = () => {
	return (
		<Container>
			<BackButton />
			<Image src={Logo} />
		</Container>
	);
};
