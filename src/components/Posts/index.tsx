import { useContext } from 'react'
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
import { PostsContext } from '../../contexts/PostsContexts'

export function Posts() {
  const { posts } = useContext(PostsContext)

  return (
    <Container>
      <PostContainer>
        {posts.map((post) => {
          if (post.title === '') return ''
          return (
            <>
              <AvatarUrl>
                <div>
                  <img src="http://github.com/wagnerjcm.png" alt="" />
                  <span>{post.title}</span>
                </div>

                <Medal size={30} color={'green'} />
              </AvatarUrl>

              <AvailabilityTime>
                <span>
                  Horario disponivel
                  <strong>a partir das {post.initialHour}</strong>
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
                  <p>R$ {post.value}</p>
                  <span>{post.typeValue}</span>
                </Values>
                <ButtonCotract>Contratar</ButtonCotract>
              </Payment>
            </>
          )
        })}
      </PostContainer>
    </Container>
  )
}
