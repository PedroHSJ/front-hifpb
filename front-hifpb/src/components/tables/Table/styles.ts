import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 5px;
	border-radius: 8px;
	margin: 10px 0 30px 0;
`;

export const Content = styled.table`
	width: 100%;
	text-align: left;
	border-collapse: collapse;
`;

export const THeader = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
	padding: 8px;
	color: ${({ theme }) => theme.colors?.dark};
`;

export const InfoBalloon = styled.div`
	display: flex;
	position: absolute;
	bottom: 23px;
	padding: 8px;
	width: max-content;
	max-width: 200px;
	border-radius: 4px;
	text-align: center;
	font-size: medium;
	font-weight: normal;
	word-wrap: normal;
	color: ${({ theme }) => theme.colors?.white};
	background-color: rgba(0, 0, 0, 0.7);
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
`;

export const InfoContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	&:hover ${InfoBalloon} {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}
`;

export const ThContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
`;

export const TBody = styled.tbody``;

export const Td = styled.td`
	padding: 8px;
	width: auto;
	border-top: 1px solid ${({ theme }) => theme.colors?.light};
	color: ${({ theme }) => theme.colors?.regular};
`;

export const OptionButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3px;
	border: none;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors?.text_black};
	background-color: ${({ theme }) => theme.colors?.transparent};
	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors?.light};
	}
`;
