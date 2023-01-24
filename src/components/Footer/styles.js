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

`;