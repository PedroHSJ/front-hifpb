import { ReactNode } from 'react';
import { Container, Summary, Content } from './styled';

interface IDetailsProps {
	summary: string;
	content: ReactNode;
}

export const Details = ({ summary, content }: IDetailsProps) => {
	return (
		<Container>
			<Summary>{summary}</Summary>
			<Content>{content}</Content>
		</Container>
	);
};
