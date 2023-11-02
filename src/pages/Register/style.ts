import styled from 'styled-components'

export const SignInContainer = styled.div`
  height: calc(100vh);
  background: ${(props) => props.theme['gray-100']};

  display: flex;
`
export const Container = styled.div`
  width: 85rem;
  height: calc() 100vh - 10rem;
  margin: 5rem auto;
  background: ${(props) => props.theme['white-100']};
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginContainer = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-top-left-radius: 15px;
  border-end-start-radius: 15px;

  background: ${(props) => props.theme['blue-300']};
  color: ${(props) => props.theme['white-100']};

  span {
    text-align: center;
    margin: 0.5rem;
  }
`

export const RegisterContainer = styled.div`
  height: 100%;
  padding: 2.5rem;
  margin: auto;
  background: ${(props) => props.theme['white-100']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme['blue-300']};
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  span {
    color: ${(props) => props.theme['gray-500']};
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    width: 25rem;
    padding: 1rem;
    background: ${(props) => props.theme['white-200']};
    border: 1px solid ${(props) => props.theme['gray-100']};
    border-radius: 8px;
  }
`
