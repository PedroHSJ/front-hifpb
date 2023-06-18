import styled, { css } from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface IContainerProps {
	direction: 'top' | 'bottom';
}

export const ArrowIconBottom = styled(IoIosArrowDown)`
	font-size: 4rem;
	padding: 10px;
	color: transparent;
	transition: all 0.5s ease;
	// Mobile
	@media (max-width: 820px) {
		display: none;
	}
`;

export const ArrowIconTop = styled(IoIosArrowUp)`
	font-size: 4rem;
	padding: 10px;
	transition: all 0.5s;
	color: transparent;
	@media (max-width: 820px) {
		display: none;
	}
`;

export const Container = styled.button<IContainerProps>`
	position: absolute;
	z-index: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	border: none;
	outline: none;
	background-color: transparent;
	${({ direction }) => {
		if (direction == 'top')
			return css`
				top: 60px;
			`;
		return css`
			bottom: 0;
		`;
	}};
	&:hover {
		cursor: pointer;
	}
	&:hover ${ArrowIconBottom} {
		color: ${({ theme }) => theme.colors?.light};
		transition: all 0.5s ease;
	}
	&:hover ${ArrowIconTop} {
		color: ${({ theme }) => theme.colors?.light};
		transition: all 0.5s ease;
	}
`;
