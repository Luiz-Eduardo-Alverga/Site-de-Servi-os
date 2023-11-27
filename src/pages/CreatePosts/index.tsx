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
} from './style'
import { useContext } from 'react'

const newPostFormValidationSchema = zod.object({
  title: zod.string().min(6).max(20),
  description: zod.string().min(20).max(250),
  value: zod.string(),
  typeValue: zod.string(),
  initialHour: zod.string(),
  finalHour: zod.string(),
})

type NewPostFormData = zod.infer<typeof newPostFormValidationSchema>

export function CreateNewPost() {
  const { createNewCycle } = useContext(PostsContext)

  const newPostForm = useForm<NewPostFormData>({
    resolver: zodResolver(newPostFormValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      initialHour: '',
      finalHour: '',
      typeValue: '',
      value: '',
    },
  })

  const { register, handleSubmit, reset } = newPostForm

  function handleCreateNewPost(data: NewPostFormData) {
    createNewCycle(data)
    reset()
    alert('Post criado com sucesos')
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
          />

          <label htmlFor="">Disponibiladade</label>
          <TimeInput>
            <input
              type="time"
              placeholder="Digite o horario inicial disponivel"
              defaultValue={'08:00'}
              {...register('initialHour')}
            />
            <input
              type="time"
              placeholder="Digite o horario final disponivel"
              defaultValue={'18:00'}
              {...register('finalHour')}
            />
          </TimeInput>
          <label htmlFor="">Valores</label>
          <MoneyInput>
            <input
              type="text"
              placeholder="Digite o valor do seu serviço"
              {...register('value')}
            />

            <input
              list="valores"
              placeholder="Digite o tipo de preço"
              {...register('typeValue')}
            />
          </MoneyInput>

          <label htmlFor="">Descrição</label>
          <textarea
            id=""
            cols={30}
            rows={10}
            placeholder="Descreva sobre seu serviço"
            {...register('description')}
          ></textarea>

          <datalist id="valores">
            <option value="Preço Fixo"></option>
            <option value="Preço por hora"></option>
            <option value="Negociável"></option>
          </datalist>

          <ButtonForm type="submit">Registrar</ButtonForm>
        </FormContainer>
      </CreatePostContainer>
    </>
  )
}
