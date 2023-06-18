import styled from 'styled-components';

export const Container = styled.div`
	width: 50%;
	max-width: 980px;
	padding: 30px;
	border-radius: 7px;
	background-color: ${({ theme }) => theme.colors?.white};
	// Mobile
	@media (max-width: 820px) {
		width: 100%;
		border-radius: 0;
	}
`;

export const TopContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;
`;

export const Title = styled.p`
	font-size: larger;
	font-family: ${({ theme }) => theme.fonts?.family.gilroyBold};
	color: ${({ theme }) => theme.colors?.dark};
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
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
`;
