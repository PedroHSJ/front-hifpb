import styled from 'styled-components';

export const Container = styled.button`
	border: none;
	background-color: ${({ theme }) => theme.colors?.transparent};
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.primary_dark};
	}
`;
