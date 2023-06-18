import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding-left: 15px;
`;

export const Title = styled.p`
	padding-bottom: 10px;
	margin: 23px 20px 12px 0;
	font-size: large;
	font-weight: bold;
	font-family: ${({ theme }) => theme.fonts?.family.gilroyBold};
	border-bottom: 0.1px solid ${({ theme }) => theme.colors?.light};
	color: ${({ theme }) => theme.colors?.dark};
`;
