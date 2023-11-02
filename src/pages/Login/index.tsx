import scene from '../../assets/Scene.svg'
import { ButtonLogin } from '../../components/Button/style'
import { Container, FormContainer, LoginContainer, Logos } from './style'
import { FacebookLogo, GoogleLogo, AppleLogo } from 'phosphor-react'
import { useForm } from 'react-hook-form'

export function Login() {
  const { register, handleSubmit, watch, reset } = useForm()

  function handleCreateNewCycle(data: unknown) {
    console.log(data)
    reset()
  }

  const email = watch('email')
  const isEmailEmpty = !email

  const password = watch('password')
  const isPasswordEmpty = !password

  function isInputValid() {
    if (isEmailEmpty || isPasswordEmpty) return true
  }

  return (
    <Container>
      <LoginContainer>
        <img src={scene} alt="" />

        <h1>Serviços de Design Gráfico</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          consequatur provident
        </span>

        <div>
          <FormContainer onSubmit={handleSubmit(handleCreateNewCycle)}>
            <input
              type="email"
              placeholder="Entre com seu E-mail"
              {...register('email')}
            />
            <input
              type="password"
              placeholder="Entre com sua senha"
              {...register('password')}
            />
            <ButtonLogin disabled={isInputValid()}>Entrar</ButtonLogin>
          </FormContainer>
        </div>

        <span>Ou entre com suas redes sociais</span>
        <Logos>
          <a href="">
            <FacebookLogo size={40}></FacebookLogo>
          </a>
          <a href="">
            <GoogleLogo size={40}></GoogleLogo>
          </a>
          <a href="">
            <AppleLogo size={40}></AppleLogo>
          </a>
        </Logos>
      </LoginContainer>
    </Container>
  )
}
