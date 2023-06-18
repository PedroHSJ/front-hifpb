import { ReactNode } from 'react';
import { Container } from './styles';

interface IH3Props {
	children: ReactNode;
}

export const H3 = ({ children }: IH3Props): JSX.Element => {
	return <Container>{children}</Container>;
};
