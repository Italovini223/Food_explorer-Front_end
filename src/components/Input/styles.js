import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 0 14px;

  border-radius: 5px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_400}; ;

  > svg {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
  }

  > input {
    width: 100%;
    height: 35px;

    border: none;
    background: transparent;

    color: ${({theme}) => theme.COLORS.WHITE};

    &&::placeholder {
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0; 
    }
  }
`;