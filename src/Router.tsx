import { Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Post } from './pages/Posts'
import { CreateNewPost } from './pages/CreatePosts/index'
import { HomePage } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/login">
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>

      <Route path="/">
        <Route path="home" element={<HomePage />} />
        <Route path="Posts" element={<Post />} />
        <Route path="createPost" element={<CreateNewPost />} />
      </Route>
    </Routes>
  )
}
