import { ReactNode } from 'react';
import { Container } from './styles';

interface IRowProps {
	children: ReactNode;
}

export const Row = ({ children }: IRowProps): JSX.Element => {
	return <Container>{children}</Container>;
};
