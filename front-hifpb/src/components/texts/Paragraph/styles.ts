import styled from 'styled-components';

export const Container = styled.p`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: medium;
	color: ${({ theme }) => theme.colors?.dark};
	margin-bottom: 20px;
	// Mobile
	@media (max-width: 820px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
`;
