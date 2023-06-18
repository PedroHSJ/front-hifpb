import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
	font-size: small;
	text-decoration: none;
	color: ${({ theme }) => theme.colors?.regular};
	transition: 0.5s all ease;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
		color: ${({ theme }) => theme.colors?.darker};
		transition: 0.5s all ease;
	}
`;
