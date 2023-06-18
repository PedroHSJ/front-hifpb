import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 45%;
	min-width: 200px;
	max-width: 380px;
	padding: 30px;
	border-radius: 7px;
	background-color: ${({ theme }) => theme.colors?.white};
	// Mobile
	@media (max-width: 820px) {
		width: 100%;
		max-width: 820px;
		border-radius: 0;
		min-height: 93vh;
	}
`;

export const TopContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	gap: 10px;
`;

export const Image = styled.img`
	width: 35px;
	height: auto;
`;

export const Title = styled.h3`
	font-size: larger;
	color: ${({ theme }) => theme.colors?.primary};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const Subtitle = styled.p`
	font-size: medium;
	text-align: left;
	color: ${({ theme }) => theme.colors?.primary_dark};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const Description = styled.p`
	width: 100%;
	margin: 35px 0;
	font-size: small;
	text-align: left;
	color: ${({ theme }) => theme.colors?.dark};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors?.transparent};
`;
