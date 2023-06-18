import styled from 'styled-components';

export const Container = styled.div``;

export const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 3px;
	margin-bottom: 20px;
`;

export const InformationLabel = styled.h2`
	font-size: large;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.dark};
`;

export const InformationValue = styled.p`
	font-size: medium;
	color: ${({ theme }) => theme.colors?.regular};
`;
