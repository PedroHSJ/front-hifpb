import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const Dots = styled.div`
  border: 8px solid #f3f3f3; /* cor do contorno */
  border-top: 8px solid ${({ theme }) => theme.colors?.primary}; /* cor da linha de preenchimento */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
