import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IContainerProps {
	scrolled?: boolean;
}

export const Container = styled.header<IContainerProps>`
	position: fixed;
	z-index: 2;
	width: 100%;
	display: flex;
	justify-content: center;
	height: 7vh;
	min-height: 60px;
	transition: all 1s;
	background-color: ${({ scrolled }) => {
		if (scrolled) return '#2b2d42';
		return 'transparent';
	}};
`;

export const Content = styled.div`
	width: 1250px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 0 20px;
`;

export const Title = styled.h1`
	opacity: 0;
	z-index: -1;
	position: absolute;
`;

export const HomeButton = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;
	text-decoration: none;
	&:hover {
		cursor: pointer;
	}
`;

export const SigIngutton = styled(Link)`
	font-size: larger;
	text-decoration: none;
	color: ${({ theme }) => theme.colors?.white};
	transition: 0.3s all ease;
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.light};
		transition: 0.3s all ease;
	}
`;

export const MenuContainer = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-left: 20px;
	gap: 40px;
	// Mobile
	@media (max-width: 820px) {
		display: none;
	}
`;

export const MenuItem = styled.p`
	font-size: larger;
	color: ${({ theme }) => theme.colors?.white};
	background-color: ${({ theme }) => theme.colors?.transparent};
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.light};
		transition: 0.3s all ease;
	}
`;

export const Image = styled.img`
	width: 35px;
	height: auto;
`;
