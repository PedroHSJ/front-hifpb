import styled from 'styled-components';

export const Container = styled.article`
	position: relative;
	width: 250px;
	min-height: 390px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-radius: 8px;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const Shadow = styled.span`
	position: absolute;
	bottom: 0;
	left: 0;
	display: block;
	width: 100%;
	padding: 2.4rem;
	border-radius: 0 0 8px 8px;
	/* background-image: linear-gradient(
		to bottom,
		transparent,
		rgba(0, 0, 0, 0.6)
	); */
	visibility: visible;
	opacity: 1;
`;

export const ImageContainer = styled.div`
	width: 250px;
`;

export const ServiceImage = styled.img`
	width: 30%;
	padding: 0 10px;
	margin-top: 8px;
	object-fit: cover;
	/* filter: drop-shadow(0 0 0.2em #f4f4f4); */
`;

export const Title = styled.h3`
	margin: 10px 0;
	padding: 0 10px;
	min-height: 42px;
	color: ${({ theme }) => theme.colors?.text_white};
`;

export const Description = styled.p`
	padding: 0 10px;
	font-size: small;
	text-align: justify;
	color: ${({ theme }) => theme.colors?.light};
`;
