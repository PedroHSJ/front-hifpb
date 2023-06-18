import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
    from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
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
	align-items: center;
	justify-content: center;
	z-index: 99;
	animation: ${fadeIn} 0.3s ease-out;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
	width: 40%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	animation: ${slideDown} 0.3s ease-out;
	background-color: ${({ theme }) => theme.colors?.white};
	// Mobile
	@media (max-width: 820px) {
		width: 90%;
	}
`;

export const Title = styled.h2`
	font-size: large;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.colors?.text_black};
`;

export const Information = styled.p`
	word-wrap: break-word;
	font-size: medium;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.colors?.dark};
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;
