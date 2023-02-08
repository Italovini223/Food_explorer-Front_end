import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 30px;

  border-radius: 5px;

  border: none;
  background: ${({theme, redDisabled}) => redDisabled ? theme.COLORS.RED_600  :  theme.COLORS.RED_500};

  > svg {
    font-size: 32px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > span {
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.WHITE};

    font-family: 'Poppins', sans-serif;
  }

  &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
`;