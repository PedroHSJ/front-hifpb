import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 40px;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors?.background};
	// Mobile
	@media (max-width: 820px) {
		padding: 0;
	}
`;

export const BottomContainer = styled.div`
	width: 45%;
	min-width: 200px;
	max-width: 380px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	margin-top: 10px;
	padding: 10px 0;
	// Mobile
	@media (max-width: 820px) {
		height: 5vh;
		width: 100%;
		align-items: center;
	}
`;

export const CreatedBy = styled.p`
	font-size: small;
	color: ${({ theme }) => theme.colors?.regular};
`;

export const ContentBottomRight = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const ContentBottomLeft = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;
