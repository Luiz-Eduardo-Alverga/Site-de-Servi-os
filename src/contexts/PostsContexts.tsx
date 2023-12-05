/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Post {
  id: string
  title: string
  description: string
  value: number
  typeValue: string
  initialHour: string
  finalHour: string
  publishedAt: Date
}

interface CreatePostData {
  title: string
  description: string
  value: number
  typeValue: string
  initialHour: string
  finalHour: string
  publishedAt: Date
  assements: number
}

interface PostsContextsType {
  posts: Post[]
  createNewPost: (data: CreatePostData) => Promise<void>
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsContextsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextsType)
export function PostsContextsProvider({
  children,
}: PostsContextsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts(query?: string) {
    const response = await api.get('/posts', {
      params: {
        _sort: 'publishedAt',
        _order: 'desc',
        q: query,
      },
    })

    setPosts(response.data)
  }

  async function createNewPost(data: CreatePostData) {
    const {
      title,
      description,
      initialHour,
      finalHour,
      value,
      typeValue,
      assements,
    } = data

    const response = await api.post('posts', {
      title,
      description,
      initialHour,
      finalHour,
      publishedAt: new Date(),
      value,
      typeValue,
      assements,
    })

    setPosts((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        createNewPost,
        fetchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
