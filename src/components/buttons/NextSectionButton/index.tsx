import { Container, ArrowIconBottom, ArrowIconTop } from './styles';

interface INextSectionButtonProps {
	onClick?: () => void;
	direction: 'top' | 'bottom';
}

export const NextSectionButton = ({
	onClick,
	direction,
}: INextSectionButtonProps) => {
	const iconType = {
		top: <ArrowIconTop />,
		bottom: <ArrowIconBottom />,
	};
	return (
		<Container onClick={onClick} direction={direction}>
			{iconType[direction]}
		</Container>
	);
};
