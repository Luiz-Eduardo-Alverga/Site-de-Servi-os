import { SearchForm } from '../../components/SearchForm/index'
import { Asidebar } from '../../components/Sidebar/index'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import teste from '../../assets/9334234.jpg'

import { PostsContext } from '../../contexts/PostsContexts'

import { useContext } from 'react'
import {
  AvailabilityTime,
  AvatarUrl,
  Container,
  PostContainer,
  Payment,
  Values,
  ButtonCotract,
} from './style'
import { Medal } from 'phosphor-react'

import { priceFormatter } from '../../utils/formater'
import { Assements } from '../../components/assements'

export function Post() {
  const { posts } = useContext(PostsContext)

  function handleContractService() {
    alert('Post contratado com sucesso')
  }

  return (
    <div>
      <Asidebar></Asidebar>
      <SearchForm />
      <Container>
        {posts.map((post) => {
          return (
            <PostContainer key={post.id}>
              <AvatarUrl>
                <div>
                  <img src={teste} alt="" />
                  <span>{post.title}</span>
                </div>

                <Medal size={30} color={'green'} />
              </AvatarUrl>

              <AvailabilityTime>
                <span>
                  Horario disponivel {''}
                  <strong>
                    a partir das {''}
                    {post.initialHour}
                  </strong>
                </span>
                <time>
                  publicado {''}
                  {formatDistanceToNow(new Date(post.publishedAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </time>
              </AvailabilityTime>

              <Assements />

              <Payment>
                <Values>
                  <p>{priceFormatter.format(post.value)}</p>
                  <span>{post.typeValue}</span>
                </Values>
                <ButtonCotract onClick={() => handleContractService()}>
                  Contratar
                </ButtonCotract>
              </Payment>
            </PostContainer>
          )
        })}
      </Container>
    </div>
  )
}
