import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 70px 0;
	gap: 20px;
	color: ${({ theme }) => theme.colors?.dark};
	background-color: ${({ theme }) => theme.colors?.background};
`;

export const Label = styled.p`
	font-size: medium;
	color: ${({ theme }) => theme.colors?.placeholder};
`;
