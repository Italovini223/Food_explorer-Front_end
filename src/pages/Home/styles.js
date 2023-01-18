import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto;
  grid-template-areas:
  "header"
  "content";

`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  margin: 0 auto;

  overflow-y: auto;

  grid-area: content;

  &&::-webkit-scrollbar {
    width: 12px;               
  } 
`;

export const Banner = styled.div`
  width: 100%;
  height: 260px;

  margin-top: 164px;
  margin-bottom: 64px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  -webkit-box-pack: end;
  -webkit-box-align: center;

  background: linear-gradient(rgb(9, 30, 38) 0%, rgb(0, 19, 28) 100%);

  border-radius: 8px;

  position: relative;


  > img {
    max-width: 632px;
    position: absolute;
    bottom: 0;
    left: -50px;
  }

  > div {
    margin-right: 46px;

    color: ${({theme}) => theme.COLORS.WHITE};

    h1 {
      font-size: 40px;
      line-height: 56px;
    }
  }
 
`;