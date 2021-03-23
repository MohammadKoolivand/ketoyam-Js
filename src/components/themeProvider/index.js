import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Theme from '../../theme/theme'

export default function Index({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
