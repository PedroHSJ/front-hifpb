import { ReactNode } from 'react';
import { Container } from './styles';

interface IMinimalLinkProps {
	to: string;
	children: ReactNode;
}

export const MinimalLink = ({ to, children }: IMinimalLinkProps) => {
	return <Container to={to}>{children}</Container>;
};
