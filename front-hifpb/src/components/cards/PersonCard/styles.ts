import styled from 'styled-components';

export const Container = styled.a`
	width: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 25px;
	align-items: center;
	overflow: hidden;
	text-decoration: none;
	&:hover {
		cursor: pointer;
	}
`;

export const ImageContainer = styled.div`
	margin-bottom: 20px;
	border-radius: 50%;
`;

export const Image = styled.img`
	width: 90px;
	border-radius: 50%;
`;

export const Name = styled.h4`
	text-align: center;
	color: ${({ theme }) => theme.colors?.text_black};
	margin-bottom: 8px;
`;

export const Office = styled.p`
	text-align: center;
	color: ${({ theme }) => theme.colors?.dark};
`;
