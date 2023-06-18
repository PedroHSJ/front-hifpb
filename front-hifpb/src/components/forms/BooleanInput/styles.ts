import styled, { css } from 'styled-components';

interface ICheckValue {
	isCheck?: boolean;
}

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

export const OptionsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 15px;
	margin-top: 20px;
`;

export const OptionButton = styled.button<ICheckValue>`
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 8px 15px;
	border-radius: 7px;
	border: 2px solid transparent;
	background-color: transparent;
	transition: 0.3s all ease;
	&:hover {
		cursor: pointer;
		border: 2px solid ${({ theme }) => theme.colors?.placeholder};
		transition: 0.3s all ease;
	}
	${({ isCheck }: ICheckValue) => {
		if (isCheck) {
			return css`
				border: 2px solid ${({ theme }) => theme.colors?.placeholder};
				background-color: ${({ theme }) => theme.colors?.lighter};
			`;
		}
	}}
`;

export const TextError = styled.p`
	margin-top: 6px;
	font-size: small;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.error};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;
