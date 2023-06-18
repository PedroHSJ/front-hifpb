import { HtmlHTMLAttributes, ReactNode } from 'react';
import { Container, LogoutButtonLabel } from './styles';

interface ILogoutButton extends HtmlHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const LogoutButton = ({ children, ...rest }: ILogoutButton) => {
	return (
		<Container {...rest}>
			<LogoutButtonLabel>{children}</LogoutButtonLabel>
		</Container>
	);
};
