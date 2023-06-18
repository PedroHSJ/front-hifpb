import styled from 'styled-components';

export const Container = styled.details`
	width: 100%;
`;

export const Summary = styled.summary`
	width: 100%;
	padding: 20px;
	margin: 10px 0;
	border-radius: 7px;
	user-select: none;
	color: ${({ theme }) => theme.colors?.dark};
	border: 1px solid ${({ theme }) => theme.colors?.dark};
	background-color: transparent;
	transition: 1s all ease;
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.secondary_light};
		background-color: ${({ theme }) => theme.colors?.secondary};
		transition: 1s all ease;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 0 0 7px 7px;
	background-color: ${({ theme }) => theme.colors?.primary_light};
`;
