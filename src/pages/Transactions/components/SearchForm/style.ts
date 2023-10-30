import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 4rem;

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    border: none;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-30']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition:
        background-color 0.2s,
        color 0.2s;
    }
  }
`
