import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  > label {
    font-size: 16px;
  }

  > input {
    height: 48px;
    padding: 14px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 16px;

      font-weight: 400;
    font-family: 'Roboto', sans-serif;
    }
  }
`