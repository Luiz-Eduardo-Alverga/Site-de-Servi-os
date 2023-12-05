import { ButtonLogin } from '../../components/Button/style'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import {
  Container,
  FormContainer,
  LoginContainer,
  RegisterContainer,
  SignInContainer,
} from './style'

export function Register() {
  const { register, handleSubmit, watch, reset } = useForm()

  function handleCreateNewCycle(data: unknown) {
    console.log(data)
    reset()
  }

  const login = watch('nameUser')
  const isLoginDisalbed = !login

  const email = watch('email')
  const isEmailDisabled = !email

  const password = watch('password')
  const IsPasswordDisabled = !password

  const repeatPassword = watch('repeatPassword')
  const IsrepeatPasswordDisabled = !repeatPassword

  function isAllInputValid() {
    if (
      isLoginDisalbed ||
      isEmailDisabled ||
      IsPasswordDisabled ||
      IsrepeatPasswordDisabled
    )
      return true
  }

  return (
    <SignInContainer>
      <Container>
        <LoginContainer>
          <h1>Bem vindo de volta</h1>
          <span>
            Para se reconectar aperte no botão para logar com sua conta pessoal
          </span>
          <NavLink to="/login/login">
            <ButtonLogin>Entre aqui</ButtonLogin>
          </NavLink>
        </LoginContainer>
        <RegisterContainer>
          <h1>Crie sua Conta</h1>
          <span>Insira seu dados para fazer seu cadastro</span>

          <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
            <FormContainer>
              <input
                type="text"
                placeholder="Digite seu nome de usuário"
                {...register('nameUser')}
              />
              <input
                type="email"
                placeholder="Digite seu E-mail"
                {...register('email')}
              />
              <input
                type="password"
                placeholder="Digita sua senha"
                {...register('password')}
              />
              <input
                type="password"
                placeholder="Repita sua senha"
                {...register('repeatPassword')}
              />

              <ButtonLogin disabled={isAllInputValid()}>Registrar</ButtonLogin>
            </FormContainer>
          </form>
        </RegisterContainer>
      </Container>
    </SignInContainer>
  )
}
