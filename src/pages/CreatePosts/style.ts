import { styled } from 'styled-components'

export const CreatePostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 4rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 4rem;

  input {
    width: 40rem;
    height: 3rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${(props) => props.theme['white-200']};
    border: 1px solid ${(props) => props.theme['gray-100']};
    border-radius: 8px;
  }

  input::placeholder {
    padding-left: 1rem;
  }

  textarea {
    max-width: 40rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${(props) => props.theme['white-200']};
    border: 1px solid ${(props) => props.theme['gray-100']};
    border-radius: 8px;
  }

  textarea::placeholder {
    padding: 1rem 0 0 1rem;
  }
`

export const TimeInput = styled.div`
  input {
    width: 19.5rem;
    margin-right: 1rem;
  }

  input[type='time'] {
    text-align: center;
  }
`

export const MoneyInput = styled.div`
  input {
    width: 19.5rem;
    margin-right: 1rem;
  }
`
export const ButtonForm = styled.button`
  border: 0;
  width: 40rem;
  padding: 0.8rem;
  background: ${(props) => props.theme['blue-300']};
  color: ${(props) => props.theme['white-100']};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme['white-200']};
  cursor: pointer;
  transition: background-color 0.1s;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme.white};
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s;
  }
`

export const ErrorsMessage = styled.p`
  padding: 0;
  color: ${(props) => props.theme['red-300']};
`
