import { ReactNode } from 'react';
import {
	Container,
	IconContainer,
	InformationIcon,
	Description,
} from './styles';

interface IInformationCardProps {
	children: ReactNode;
}

export const InformationCard = ({ children }: IInformationCardProps) => {
	return (
		<Container>
			<IconContainer>
				<InformationIcon />
			</IconContainer>
			<Description>{children}</Description>
		</Container>
	);
};
