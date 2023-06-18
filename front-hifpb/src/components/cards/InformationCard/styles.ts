import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	border-radius: 7px;
	color: ${({ theme }) => theme.colors?.dark};
	border: 1px solid ${({ theme }) => theme.colors?.placeholder};
	margin: 15px 0;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	height: 100%;
	padding: 8px;
	background-color: ${({ theme }) => theme.colors?.placeholder};
`;

export const InformationIcon = styled(AiOutlineInfoCircle)`
	font-size: 25px;
	color: ${({ theme }) => theme.colors?.white};
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 10px 0;
	font-size: medium;
`;
