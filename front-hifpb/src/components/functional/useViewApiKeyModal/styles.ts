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

export const Container = styled.button`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: none;
	z-index: 99;
	animation: ${fadeIn} 0.3s ease-out;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	animation: ${slideDown} 0.3s ease-out;
	user-select: text;
	background-color: ${({ theme }) => theme.colors?.white};
	// Mobile
	@media (max-width: 820px) {
		width: 90%;
	}
`;

export const ApiKeyText = styled.h2`
	width: 100%;
	display: flex;
	justify-content: center;
	font-family: ${({ theme }) => theme.fonts.family.gilroyBold};
	&:hover {
		cursor: text;
	}
`;

export const KeyContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	padding: 8px;
	border-radius: 7px;
	background-color: ${({ theme }) => theme.colors?.light};
`;

export const CopyButton = styled.span`
	position: relative;
	border: none;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
	&:active {
		color: ${({ theme }) => theme.colors?.dark};
	}
`;
