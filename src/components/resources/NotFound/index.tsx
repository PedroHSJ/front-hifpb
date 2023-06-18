import { AiOutlineFileExclamation } from 'react-icons/ai';
import { Container, Label } from './styles';

interface INotFoundProps {
	label?: string;
}

export const NotFound = ({ label }: INotFoundProps): JSX.Element => {
	return (
		<Container>
			<AiOutlineFileExclamation size={40} />
			<Label>{label}</Label>
		</Container>
	);
};
