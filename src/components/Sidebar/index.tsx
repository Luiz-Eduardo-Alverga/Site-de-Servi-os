import { NavLink } from 'react-router-dom'
import { Sidebar, ListBar, Header } from './style'
import {
  Bookmark,
  HouseLine,
  UserCircle,
  Package,
  PlusCircle,
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
          <UserCircle size={34} color="white" />
          <NavLink to="/perfil">Perfil</NavLink>
        </li>

        <li>
          <PlusCircle size={34} color="white" />
          <NavLink to="/createPost">New Post</NavLink>
        </li>
      </ListBar>
    </Sidebar>
  )
}
