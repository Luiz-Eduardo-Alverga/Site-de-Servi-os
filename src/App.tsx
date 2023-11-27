import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { PostsContextsProvider } from './contexts/PostsContexts'

import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsContextsProvider>
          <Router />
        </PostsContextsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
