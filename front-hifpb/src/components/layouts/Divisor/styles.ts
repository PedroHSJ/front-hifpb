import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 1px;
	margin-bottom: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.colors?.placeholder};
`;
