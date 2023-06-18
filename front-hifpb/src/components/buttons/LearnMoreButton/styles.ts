import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IContainerProps {
	background?: string;
}

export const Container = styled(Link)<IContainerProps>`
	width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 25px;
	border-radius: 20px;
	text-decoration: none;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.lighter};
	background-color: ${({ theme }) => theme.colors?.primary};
	background-color: ${({ background }) => {
		if (background) return background;
		return '#2b2d42';
	}};
	transition: all 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.colors?.primary_light};
		transition: all 0.3s;
	}
`;
