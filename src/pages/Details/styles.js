import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;                 
`

export const ButtonBack = styled.div`
  width: 100%;
  margin: 24px auto 40px;
  display: flex;
  
  > a {
    display: flex;
    align-items: center;
    font-size: clamp(18px, 4px + 3vw, 24px);
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`

export const Content = styled.div`
  max-width: 1368px;
  height: 100%;
  padding-inline: 40px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
 
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    max-width: 250px;
    border-radius: 50%;
    img {
      max-width: 100%;
    }
  }
  > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Poppins', sans-serif;
    h1 {
      margin-top: 20px;
      margin-bottom: 18px;
      font-size: clamp(24px, 10px + 3vw, 40px);
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    p {
      text-align: center;
      font-size: clamp(18px, 4px + 3vw, 24px);
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    div:nth-child(5) {
      width: 50px;
      
      img {
        display: none;
      }
    }
  }
  
`

export const Ingredients = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-block: 30px;
`

export const Info = styled.div`
  margin-top: 20px;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  width: 100%;
  strong {
    font-size: clamp(20px, 10px + 3vw, 32px);
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    min-width: 100px;
  }
  span {
    font-size: 20px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

  }
    
  .btn {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    position: relative;
    z-index: 6;
  }


`