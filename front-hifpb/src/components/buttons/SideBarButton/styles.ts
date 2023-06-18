import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
	margin: 6px 4px;
	text-decoration: none;
	transition: 0.3s all ease;
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.primary_dark};
		transition: 0.3s all ease;
	}
`;

export const Label = styled.p`
	font-size: medium;
	color: ${({ theme }) => theme.colors?.primary_dark};
	transition: 0.3s all ease;
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.primary};
		transition: 0.3s all ease;
	}
`;

export const ActiveLabel = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: medium;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.primary};
	transition: 0.3s all ease;
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.primary_dark};
		transition: 0.3s all ease;
	}
`;
