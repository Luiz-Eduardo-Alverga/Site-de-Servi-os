import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: ${(props) => props.theme['gray-100']};

  display: flex;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  max-width: 40rem;
  margin: auto;
  height: 90%;

  border-radius: 20px;

  background: ${(props) => props.theme.white};

  img {
    width: 30rem;
  }

  /* h1 {
    color: ${(props) => props.theme['blue-300']};
  } */

  span {
    margin: 0 2rem 0;
    text-align: center;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 2rem;

  input {
    width: 35rem;
    padding: 1rem;
    background: ${(props) => props.theme['white-200']};
    border: 1px solid ${(props) => props.theme['gray-100']};
    border-radius: 8px;
  }
`
export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  a {
    color: ${(props) => props.theme['black-100']};
    border: 1px solid ${(props) => props.theme['gray-100']};
    padding: 0.5rem;
    border-radius: 8px;
  }
`
