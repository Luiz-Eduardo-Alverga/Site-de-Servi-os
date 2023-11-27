import { Posts } from '../../components/Posts'
import { SearchForm } from '../../components/SearchForm/index'
import { Asidebar } from '../../components/Sidebar/index'

export function Home() {
  return (
    <>
      <Asidebar></Asidebar>
      <SearchForm />
      <Posts />
      <Posts />
      <Posts />
    </>
  )
}
