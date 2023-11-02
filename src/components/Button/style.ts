import styled from 'styled-components'

export const ButtonLogin = styled.button`
  width: 15rem;
  padding: 0.65rem;
  background: ${(props) => props.theme['blue-300']};
  color: ${(props) => props.theme['white-100']};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme['white-200']};
  cursor: pointer;
  transition: background-color 0.1s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['blue-300']};
  }
`
