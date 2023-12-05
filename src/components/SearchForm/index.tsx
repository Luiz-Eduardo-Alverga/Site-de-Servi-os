import { MagnifyingGlass } from 'phosphor-react'
import { FormContainer, ButtonForm } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContexts'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchPosts } = useContext(PostsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPost(data: SearchFormInputs) {
    if (data.query === '') alert('Insira um valor a ser buscado')

    await fetchPosts(data.query)
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <div>
        <input
          type="text"
          placeholder="Pesquise trabalhos"
          {...register('query')}
        />

        <ButtonForm type="submit" disabled={isSubmitting}>
          <MagnifyingGlass /> Buscar
        </ButtonForm>
      </div>
    </FormContainer>
  )
}
