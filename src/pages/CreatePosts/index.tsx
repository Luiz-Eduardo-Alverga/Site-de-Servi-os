import { Asidebar } from '../../components/Sidebar'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { PostsContext } from '../../contexts/PostsContexts'

import {
  CreatePostContainer,
  FormContainer,
  TimeInput,
  MoneyInput,
  ButtonForm,
  ErrorsMessage,
} from './style'

import { useContext } from 'react'

const newPostFormValidationSchema = zod.object({
  title: zod
    .string()
    .min(3, { message: 'O titulo precisa ter no minimo 3 caracteres' })
    .max(20, { message: 'O titulo precisa ter no maximo 20 caracteres' }),
  description: zod
    .string()
    .min(20, { message: 'A descrição precisa ter no minimo 20 caracteres' })
    .max(250, { message: 'A descrição precisa ter no maximo 250 caracteres' }),
  value: zod.number(),
  typeValue: zod.enum(['Preço Fixo', 'Preço por hora', 'Negociável'], {
    errorMap: () => {
      return { message: 'Voce precisa selecionar um dos 3 tipos listados' }
    },
  }),
  initialHour: zod.string(),
  finalHour: zod.string(),
  publishedAt: zod.date(),
  assements: zod.number(),
})

type NewPostFormData = zod.infer<typeof newPostFormValidationSchema>

export function CreateNewPost() {
  const { createNewPost } = useContext(PostsContext)

  const newPostForm = useForm<NewPostFormData>({
    resolver: zodResolver(newPostFormValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      initialHour: '08:00',
      finalHour: '09:00',
      // value: 0,
      publishedAt: new Date(),
      assements: 0,
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = newPostForm

  async function handleCreateNewPost(data: NewPostFormData) {
    const {
      title,
      description,
      initialHour,
      finalHour,
      value,
      typeValue,
      publishedAt,
      assements,
    } = data

    await createNewPost({
      title,
      description,
      initialHour,
      value,
      typeValue,
      finalHour,
      publishedAt,
      assements,
    })
    reset()
    alert('Post criado com sucesso')
  }

  return (
    <>
      <Asidebar />
      <CreatePostContainer>
        <h1>Crie o seu serviço</h1>
        <FormContainer onSubmit={handleSubmit(handleCreateNewPost)} action="">
          <label>Titulo</label>
          <input
            type="text"
            placeholder="Digite o seu serviço"
            {...register('title')}
            required
          />
          {errors.title && (
            <ErrorsMessage>{errors.title.message}</ErrorsMessage>
          )}

          <label htmlFor="">Disponibiladade</label>
          <TimeInput>
            <input
              type="time"
              placeholder="Digite o horario inicial disponivel"
              defaultValue={'08:00'}
              {...register('initialHour')}
              required
            />
            <input
              type="time"
              placeholder="Digite o horario final disponivel"
              defaultValue={'18:00'}
              {...register('finalHour')}
              required
            />
          </TimeInput>
          <label htmlFor="">Valores</label>
          <MoneyInput>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Digite o valor do seu serviço"
              {...register('value', { valueAsNumber: true })}
              required
            />

            <input
              list="valores"
              placeholder="Digite o tipo de preço"
              {...register('typeValue')}
              required
            />
            {errors.typeValue && (
              <ErrorsMessage>{errors.typeValue.message}</ErrorsMessage>
            )}
          </MoneyInput>

          <label htmlFor="">Descrição</label>
          <textarea
            id=""
            cols={30}
            rows={10}
            placeholder="Descreva sobre seu serviço"
            {...register('description')}
          ></textarea>
          {errors.description && (
            <ErrorsMessage>{errors.description.message}</ErrorsMessage>
          )}

          <datalist id="valores">
            <option value="Preço Fixo"></option>
            <option value="Preço por hora"></option>
            <option value="Negociável"></option>
          </datalist>

          <ButtonForm type="submit" disabled={isSubmitting}>
            Criar Postagem
          </ButtonForm>
        </FormContainer>
      </CreatePostContainer>
    </>
  )
}
