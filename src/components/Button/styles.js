import styled from "styled-components";

export const Container = styled.button`
  max-width: 216px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 30px;

  border-radius: 5px;

  border: none;
  background: ${({theme}) => theme.COLORS.RED_500};

  > svg {
    font-size: 32px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > span {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;