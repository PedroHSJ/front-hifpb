import { Container } from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const BackButton = (): JSX.Element => {
	const navigate = useNavigate();
	return (
		<Container onClick={() => navigate(-1)}>
			<AiOutlineArrowLeft size={30} />
		</Container>
	);
};
