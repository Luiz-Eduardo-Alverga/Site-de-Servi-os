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
  }

  input::placeholder {
    padding-left: 1rem;
  }

  textarea {
    width: 40rem;
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
  width: 40rem;
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 0.5rem;

  cursor: pointer;
`
