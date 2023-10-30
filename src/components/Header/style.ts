import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NewTransactionButton = styled.button`
  background: ${({ theme }) => theme['green-500']};
  border: none;
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.3s;
  }
`
