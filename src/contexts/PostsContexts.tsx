/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from 'react'

interface Post {
  id: string
  title: string
  description: string
  value: string
  typeValue: string
  initialHour: string
  finalHour: string
}

interface CreatePostData {
  title: string
  description: string
  value: string
  typeValue: string
  initialHour: string
  finalHour: string
}
interface PostsContextsType {
  posts: Post[]
  createNewCycle: (data: CreatePostData) => void
}

interface PostsContextsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextsType)
export function PostsContextsProvider({
  children,
}: PostsContextsProviderProps) {
  const [posts, setPosts] = useState([
    {
      id: '',
      title: '',
      description: '',
      value: '',
      typeValue: '',
      initialHour: '',
      finalHour: '',
    },
  ])

  function createNewCycle(data: CreatePostData) {
    const id = String(new Date().getTime())

    const newPost: Post = {
      id,
      title: data.title,
      description: data.description,
      value: data.value,
      typeValue: data.typeValue,
      initialHour: data.initialHour,
      finalHour: data.finalHour,
    }

    setPosts([...posts, newPost])
  }

  console.log(posts)

  return (
    <PostsContext.Provider
      value={{
        posts,
        createNewCycle,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
