import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: center;
  gap: 32px;

  padding: 0 132px;


  background: ${({theme}) => theme.COLORS.BLUE_900};

  grid-area: header;

  > a {
    width: 139px;
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 16px;
  }

`;


export const ExitButton = styled.button`

  border: none;
  background: transparent;

  font-size: 32px;

  color: ${({theme}) => theme.COLORS.WHITE};
    
`;
