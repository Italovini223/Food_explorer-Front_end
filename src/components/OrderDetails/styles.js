import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 13px;

  padding: 16px;

  > img {
    width: 72px;
    height: 72px;
  }

  > .details {
    text-align: left;

    button {
      color: ${({theme}) => theme.COLORS.RED_600};

      background: transparent;
      border: none;

      font-size: 14px;
      font-weight: 400;

      font-family: 'Roboto', sans-serif;

  
    }
  }

`;

export const DishDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;



  > P {
    font-size: 32px;
    font-weight: 500;

    font-family: 'Poppins', sans-serif;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > span {
    font-size: 18px;
    font-weight: 400;

    font-family: 'Roboto', sans-serif;

    color: ${({theme}) => theme.COLORS.GRAY_200};
  }
`;