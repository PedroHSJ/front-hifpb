import { ReactNode } from 'react';
import { Container } from './styles';

interface IH2Props {
	children: ReactNode;
}

export const H2 = ({ children }: IH2Props): JSX.Element => {
	return <Container>{children}</Container>;
};
