import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 7vh;
	min-height: 60px;
	background-color: ${({ theme }) => theme.colors?.primary};
`;

export const Content = styled.div`
	width: 1250px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
`;

export const HomeButton = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 10px;
	gap: 12px;
	text-decoration: none;
	&:hover {
		cursor: pointer;
	}
`;

export const Title = styled.h1`
	font-size: larger;
	color: ${({ theme }) => theme.colors?.white};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const Image = styled.img`
	width: 35px;
	height: auto;
`;
