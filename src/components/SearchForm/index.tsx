import { MagnifyingGlass } from 'phosphor-react'
import { FormContainer, ButtonForm } from './style'

export function SearchForm() {
  return (
    <FormContainer>
      <div>
        <input type="text" placeholder="Pesquise trabalhos" />

        <ButtonForm>
          <MagnifyingGlass /> Buscar
        </ButtonForm>
      </div>
    </FormContainer>
  )
}
