import { ReactNode } from 'react';
import { Header } from '../Header';
import { SideBar } from '../SideBar';
import { Section } from '../Section';
import { Container, Content } from './styles';

interface IPageLayoutProps {
	children: ReactNode;
}

export const Template = ({ children }: IPageLayoutProps) => {
	return (
		<Container>
			<Header />
			<Content>
				<SideBar />
				<Section>{children}</Section>
			</Content>
		</Container>
	);
};
