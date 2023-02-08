import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  @media(min-width: 1050px){
    height: 100vh;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  margin: 32px 0;


  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 75px;

  @media(min-width: 1050px){
    flex-direction: row;
    
  }
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

  flex: 1;

  > h1 {
    font-size: 32px;
    font-weight: 500;

    margin-bottom: 32px;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > div {
    border: 1px solid rgba(255, 255, 255, 0.1);
    div:nth-child(1) {
      display: flex;
      button {
        width: 100%;
        height: 81px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: transparent;
        color: white;
        font-size: 16px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
      }
      .add-background {
        background: rgba(255, 255, 255, 0.05);
      }
      .button-pix {
        background: ${({ ButtonBackgroundIsActive }) => ButtonBackgroundIsActive ? 'rgba(255, 255, 255, 0.05)' : 'none'};
      }
      .button-credit {
        background: ${({ ButtonBackgroundIsActive }) => ButtonBackgroundIsActive ? 'none' : 'rgba(255, 255, 255, 0.05)'};
      }
    }
    .option-payment {
      padding: 4rem 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > img {
        max-width: 100%;
        margin-inline: auto;
        padding-bottom: 20px
      }

      .approved {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;;
        gap: 69px;

        span {
          font-size: 24px;
          font-weight: 400;
          color: ${({theme}) => theme.COLORS.GRAY_200};
        }
      }

      @media (min-width: 1050px) {
        padding: 40px 90px;
      }
    }
  }
  @media (min-width: 1050px) {
    max-width: 530px;
  }
`;

export const SectionCredit = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 37px;
  .data-card {
    display: flex;
    gap: 14px;
    margin-bottom: 37px;
    input {
      width: 100%;
    }
  }
`;

export const Accept = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding-block: 22px;
  
  > svg {
    font-size: 104px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 24px;
  }

`;
