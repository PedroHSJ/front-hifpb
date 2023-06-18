import { Container, Icon } from './styles';

interface IHamburguerButtonProps {
	onClick: () => void;
}

export const HamburguerButton = ({ onClick }: IHamburguerButtonProps) => {
	return (
		<Container onClick={onClick}>
			<Icon />
		</Container>
	);
};
