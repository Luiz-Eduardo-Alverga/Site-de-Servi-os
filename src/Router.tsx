import { Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Home } from './pages/Posts'
import { CreateNewPost } from './pages/CreatePosts/index'

export function Router() {
  return (
    <Routes>
      <Route path="/login">
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>

      <Route path="/">
        <Route path="Posts" element={<Home />}></Route>
        <Route path="createPost" element={<CreateNewPost />}></Route>
      </Route>
    </Routes>
  )
}
