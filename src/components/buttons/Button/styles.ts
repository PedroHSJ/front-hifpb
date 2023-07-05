import styled, { css } from "styled-components";

interface IButtonContainerProps {
  isLoading?: boolean;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  border: none;
  padding: 14px;
  border-radius: 3px;
  background-color: ${({ isLoading }) => {
    if (isLoading) {
      return css`
        ${({ theme }) => theme.colors?.primary_dark};
      `;
    }
    return css`
      ${({ theme }) => theme.colors?.primary}
    `;
  }};
  transition: 0.3s all ease;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors?.primary_dark};
    transition: 0.2s all ease;
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors?.white};
  background-color: ${({ theme }) => theme.colors?.transparent};
`;
