import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 512px;

  display: flex;
  flex-direction: column;

  border-radius: 8px;

  text-align: center;

  flex: none;

  color: ${({theme}) => theme.COLORS.WHITE};
  background: ${({theme}) => theme.COLORS.BLUE_400};
`;

export const FavoriteButton = styled.div`
  width: 100%;
  height: 56px;
  
  padding-right: 16px;

  display: flex;
  justify-content: flex-end;

  > button {
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      font-size: 25px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

`;

export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  img {
    width: 176px;
    height: 176px;
  }

  a {
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    text-decoration: none;

    cursor: pointer;

    font-family: 'Poppins', sans-serif;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    font-family: 'Roboto', sans-serif;
  }

  strong {
    color: ${({theme}) => theme.COLORS.BLUE_200};

    font-size: 32px;
    font-weight: 400;

    font-family: 'Roboto', sans-serif;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    .quantity {
      display: flex;
      align-items: center;
      gap: 17px;

     

      button {
        border: none;
        background: transparent;
        cursor: pointer;

        svg {
          color: ${({theme}) => theme.COLORS.WHITE};
          font-size: 24px;
        }
      }

      
      span {
          font-size: 20px;
          font-weight: 700;

          font-family: 'Roboto', sans-serif;
        }
    }
  }
`;