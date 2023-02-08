import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-family: 'Poppins', sans-serif;

  > img {
    width: 50px;
    height: 50px;
  }

  > span {
    font-size: 18px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;