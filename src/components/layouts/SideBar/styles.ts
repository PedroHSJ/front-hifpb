import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	width: 250px;
	margin-top: 25px;
	border-right: 0.3px solid ${({ theme }) => theme.colors?.light};
	// Mobile
	@media (max-width: 820px) {
		display: none;
	}
	@media (max-height: 415px) {
		display: none;
	}
`;
