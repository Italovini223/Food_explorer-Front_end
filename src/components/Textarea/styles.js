import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const TextareaInput= styled.textarea`
  width: 100%;
  height: 172px;
  resize: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  background: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 16px;
  }
`