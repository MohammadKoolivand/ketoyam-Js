import React from 'react'
import { CssBaseline } from '@material-ui/core'
import {
  ThemeProvider,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'
import MasterLayout from './screens/MasterLayout'
import theme from './theme/theme'
import { getDircetion } from './localization/index'
import LoginContextProvider from './contexts/LoginContext'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function App() {
  return getDircetion() === 'ltr' ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <LoginContextProvider>
          <MasterLayout />
        </LoginContextProvider>
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <LoginContextProvider>
          <MasterLayout />
        </LoginContextProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
