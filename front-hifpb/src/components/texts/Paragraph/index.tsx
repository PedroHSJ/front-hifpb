import { ReactNode } from 'react';
import { Container } from './styles';

interface IParagraphProps {
	children: ReactNode;
}

export const Paragraph = ({ children }: IParagraphProps): JSX.Element => {
	return <Container>{children}</Container>;
};
