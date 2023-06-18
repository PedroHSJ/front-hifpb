import { Container } from './styles';
import { ReactNode } from 'react';

interface ILearnMoreButtonProps {
	to: string;
	children: ReactNode;
	background?: string;
}

export const LearnMoreButton = ({
	to,
	children,
	background,
}: ILearnMoreButtonProps) => {
	return (
		<Container to={to} background={background}>
			{children}
		</Container>
	);
};
