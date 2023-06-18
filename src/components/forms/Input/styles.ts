import styled from 'styled-components';

export const InputContainer = styled.div`
	width: 100%;
	margin: 25px 0;
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const Label = styled.h4`
	margin-bottom: 6px;
	font-size: medium;
	color: ${({ theme }) => theme.colors?.dark};
`;

export const TextInput = styled.input`
	width: 100%;
	padding: 0 0 15px 0;
	outline: 0;
	font-size: medium;
	color: ${({ theme }) => theme.colors?.darker};
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors?.primary};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const TextError = styled.p`
	margin-top: 6px;
	font-size: small;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.error};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;
