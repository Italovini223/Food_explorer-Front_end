import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  margin: 32px auto;


  display: flex;
  flex-direction: column;
  gap: 30px;

  > button {
    display: flex;
    align-items: center;

    cursor: pointer;

    border: none;
    background: transparent;

    font-size: 24px;
    font-weight: 500px;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > h2 {
    font-size: 32px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;

export const Form = styled.header`
  display: flex;
  flex-direction: column;

  .smallBox {
    max-width: 230px;
    #file {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      display: flex;
      flex-direction: column;
      gap: 8px;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1PX;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 5px;
        height: 48px;
        width: 229px;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    input[type="file"] {
      display: none;
    }
  }

  > button {
    margin-top: 24px;
    height: 48px;
    width: 357px;
    background: #1A2327;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    align-self: flex-end;

    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

`;


export const InputWrapper = styled.div`
  display: flex;
  
  margin-bottom: 40px;
  gap: 40px;
`;

export const SectionIngredients = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 40px;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-height: max-content;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    > div {
      max-height: 48px;
      gap: 20px;
    }
  }
`;

export const IngredientsSection = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 40px;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-height: max-content;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }
`

