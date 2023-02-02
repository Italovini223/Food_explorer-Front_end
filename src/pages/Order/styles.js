import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 32px;


  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 75px;


`;


export const DishesContent = styled.div`
  height: 100%;

  > h1 {
    font-size: 32px;
    font-weight: 500;

    margin-bottom: 32px;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > .dishes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    gap: 16px;

    margin-bottom: 16px

  }

  > span {
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
`;

export const Payment = styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 32px;

  > h1 {
    font-size: 32px;
    font-weight: 500;

    margin-bottom: 32px;

    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;