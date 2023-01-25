import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;

  background: ${({theme}) => theme.COLORS.BLUE_900};

  grid-area: header;

  display: flex;
  align-items: center;

`;

export const Content = styled.div`
  width: 50%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 32px;

  > a {
    min-width: 139px;
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 16px;
  }

  > button {
    max-width: 200px;
  }
`;


export const ExitButton = styled.button`

  border: none;
  background: transparent;

  font-size: 32px;

  color: ${({theme}) => theme.COLORS.WHITE};
    
`;
