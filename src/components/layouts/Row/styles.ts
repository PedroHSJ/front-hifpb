import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin: -25px 0;
	gap: 20px;
	// Mobile
	@media (max-width: 820px) {
		flex-direction: column;
		gap: 0;
		margin-bottom: 20px;
	}
`;
