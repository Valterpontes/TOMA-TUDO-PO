import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import GlobalStyle from './Styles/global.js'
import theme from './Styles/theme.js'
import { AuthProvider } from './Hooks/auth'
import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme= {theme}>
      <GlobalStyle/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>

  </React.StrictMode>,
)

