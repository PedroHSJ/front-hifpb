import styled from 'styled-components';

export const Container = styled.button`
	text-align: left;
	border: none;
	margin: 6px 4px;
	padding-left: 15px;
	text-decoration: none;
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const LogoutButtonLabel = styled.p`
	font-size: medium;
	color: ${({ theme }) => theme.colors?.primary_dark};
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.primary};
	}
`;
