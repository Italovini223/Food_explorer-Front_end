import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 124px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 132px;

  
  color: ${({theme}) => theme.COLORS.WHITE};;

  background: ${({theme}) => theme.COLORS.BLUE_800};

  @media(max-width: 650px){
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  > p {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.ICE_WHITE};
  }

`;