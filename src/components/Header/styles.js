import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;

  background: ${({theme}) => theme.COLORS.BLUE_800};

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;


`;

export const Content = styled.div`
  width: 100%;
  height: 10.4rem;
  margin-inline: auto;
  padding-inline: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .favorites {
    background: transparent;
    border: none;

    width: 20rem;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .menu {
    font-size: 24px;
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
  }


  @media (min-width: 1000px) {
    padding-inline: 12.3rem;
    justify-content: space-between;
    width: 100%;
    > button {
      display: none;
    } 
  }
`;

export const Logo = styled.a`
    text-decoration: none;
`;


export const ExitButton = styled.button`

  border: none;
  background: transparent;

  font-size: 32px;

  color: ${({theme}) => theme.COLORS.WHITE};
    
`;

export const Nav = styled.div`
  position: absolute;
  top: 10.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 40rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  padding-inline: 4rem;
  padding-top: 5rem;

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transform: ${({ isVisible }) => isVisible ? 'translateY(0)' :'translateY(-20%)'};

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  transition: all 0.4s;

  > svg {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
  }

  > button {
    max-width: 250px;
  }

  @media (min-width: 1000px) {
    position: relative;
    top: 0;
    padding: 0;
    height: 0;
    margin-left: 3.2rem;
    flex-direction: row;
    align-items: center;
    background: none;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: all 0s;
  }
`;

