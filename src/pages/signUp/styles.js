import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  margin: 20px auto 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  > img {
    width: 255px;
  }

  @media(min-width: 1150px){
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
  }

`;

export const SingOutForm = styled.div`
  width: 100%;
  height: 600px;

  border-radius: 16px;

  background: ${({theme}) => theme.COLORS.BLUE_700};

  > div {
    width: 80%;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    h2 {
      font-size: 32px;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  @media(min-width: 425px){
    width: 476px;
  }

`;