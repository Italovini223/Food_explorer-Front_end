import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ isNew }) => isNew ? 'transparent' : '#1A2327'};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : '#FFFFFF'};
  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : 'none'};
  padding-right: 12px;
  border-radius: 8px;
  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
  }
  .button-delete {
    color: #FFFFFF;
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_500}
  }
  > input {
    height: 32px;
    width: 100px;
    padding: 12px;
    font-size: 16px;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : '#FFFFFF'};
    background: transparent;
    border: none;

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0; 
    }
  }
`