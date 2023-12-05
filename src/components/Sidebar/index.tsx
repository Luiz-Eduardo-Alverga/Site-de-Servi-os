import { NavLink } from 'react-router-dom'
import { Sidebar, ListBar, Header } from './style'
import {
  Bookmark,
  HouseLine,
  Package,
  PlusCircle,
  SignIn,
  BookBookmark,
} from 'phosphor-react'

export function Asidebar() {
  return (
    <Sidebar>
      <Header>
        <Bookmark size={38} color="white" />
        <span>SSApp</span>
      </Header>
      <ListBar>
        <li>
          <HouseLine size={34} color="white" />
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          <Package size={34} color="white" />
          <NavLink to="/posts">Posts</NavLink>
        </li>

        <li>
          <PlusCircle size={34} color="white" />
          <NavLink to="/createPost">New Post</NavLink>
        </li>

        <li>
          <SignIn size={34} color="white" />
          <NavLink to="/login/login">Login</NavLink>
        </li>

        <li>
          <BookBookmark size={34} color="white" />
          <NavLink to="/login/register">Cadastro</NavLink>
        </li>
      </ListBar>
    </Sidebar>
  )
}
