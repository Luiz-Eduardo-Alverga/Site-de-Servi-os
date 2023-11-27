import { Posts } from '../../components/Posts'
import { SearchForm } from '../../components/SearchForm/index'
import { Asidebar } from '../../components/Sidebar/index'

export function Post() {
  return (
    <>
      <Asidebar></Asidebar>
      <SearchForm />
      <Posts />
    </>
  )
}
