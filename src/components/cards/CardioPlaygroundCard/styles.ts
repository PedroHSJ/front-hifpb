import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 8px;
	border-radius: 7px;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.colors?.primary_light};
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 20px;
`;
