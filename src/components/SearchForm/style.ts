import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    margin-top: 3rem;

    gap: 1rem;
  }

  div input {
    width: 30rem;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['gray-300']};

    &::placeholder {
      padding-left: 1rem;
      color: ${(props) => props.theme['black-200']};
    }
  }
`

export const ButtonForm = styled.button`
  border: 0;
  border-radius: 10px;
  width: 6rem;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['blue-100']};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
