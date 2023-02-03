import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;                 
`

export const ButtonBack = styled.div`
  width: 100%;
  margin: 24px auto 40px;
  display: flex;
  
  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: clamp(18px, 4px + 3vw, 24px);
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`

export const Content = styled.div`
  max-width: 1368px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 100px;
 
`

export const Main = styled.main`
  display: flex;
  gap: 40PX;
  justify-content: center;
  align-items: center;
  .dishContent{
    width: 300px;
    border-radius: 50%;
    > img {
      width: 100%;
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
  margin: 40px 0;
`;

export const Info = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  width: 100%;
  strong {
    font-size: clamp(20px, 10px + 3vw, 32px);
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    min-width: 150px;
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

  button {
    max-width: 200px;
  }

  > div {
    width: 100%;
  }

`