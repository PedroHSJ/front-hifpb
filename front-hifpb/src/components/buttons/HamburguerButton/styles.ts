import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Container = styled.button`
	position: absolute;
	display: none;
	right: 0;
	border: none;
	padding: 8px;
	border-radius: 7px;
	background-color: ${({ theme }) => theme.colors?.transparent};
	&:hover {
		cursor: pointer;
	}
	// Mobile
	@media (max-width: 820px) {
		display: block;
	}
	@media (max-height: 415px) {
		display: block;
	}
`;

export const Icon = styled(GiHamburgerMenu)`
	font-size: 20px;
	color: ${({ theme }) => theme.colors?.primary_light};
`;
