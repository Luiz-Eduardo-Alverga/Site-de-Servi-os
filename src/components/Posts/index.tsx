import {
  AvailabilityTime,
  AvatarUrl,
  Container,
  PostContainer,
  Payment,
  Values,
  ButtonCotract,
  Assessments,
} from './style'
import { Medal, Star } from 'phosphor-react'

export function Posts() {
  return (
    <Container>
      <PostContainer>
        <AvatarUrl>
          <div>
            <img src="http://github.com/wagnerjcm.png" alt="" />
            <span>Design Grafico</span>
          </div>

          <Medal size={30} color={'green'} />
        </AvatarUrl>

        <AvailabilityTime>
          <span>
            Horario disponivel <strong>a partir das 09:00</strong>
          </span>
          <time>Postado há uma hora</time>
        </AvailabilityTime>

        <Assessments>
          <div>
            <Star color="yellow" size={25}></Star>
            <span>4,5</span>
          </div>

          <span>235 avaliações</span>
        </Assessments>

        <Payment>
          <Values>
            <p>R$ 50,00</p>
            <span>Por hora preço fixo</span>
          </Values>
          <ButtonCotract>Contratar</ButtonCotract>
        </Payment>
      </PostContainer>
    </Container>
  )
}
