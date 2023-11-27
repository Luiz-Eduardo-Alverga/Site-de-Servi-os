/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from 'react'
import { Post } from '../pages/CreatePosts'

interface PostsContextsType {
  createNewCycle: (data: Post) => void
}

interface PostsContextsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextsType)
export function PostsContextsProvider({
  children,
}: PostsContextsProviderProps) {
  const [posts, setPosts] = useState([{}])

  function createNewCycle(data: Post) {
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
        createNewCycle,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
