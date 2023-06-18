import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: left;
	padding: 5vh 50px;
	//margin: 0 auto;
	width: 100%;
	max-width: 1000px;
	overflow: auto;
	min-height: 93vh; // Para descontar 5vh do Header
	// Mobile
	@media (max-width: 820px) {
		padding: 20px 0;
		margin: 0 10px;
		width: 95vw;
	}
	@media (max-height: 415px) {
		padding: 20px 0;
		margin: 0 10px;
	}
`;
