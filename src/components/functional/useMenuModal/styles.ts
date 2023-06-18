import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideRight = keyframes`
    from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	z-index: 99;
	animation: ${fadeIn} 0.3s ease-out;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
	width: 75%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	animation: ${slideRight} 0.3s ease-out;
	background-color: ${({ theme }) => theme.colors?.white};
	// Mobile
	@media (max-width: 820px) {
		width: 90%;
	}
	@media (max-height: 415px) {
		width: 90%;
		overflow: auto;
		padding-bottom: 50px;
	}
`;
