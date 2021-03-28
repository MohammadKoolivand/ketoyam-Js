/* eslint-disable import/no-mutable-exports */
import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import { getDircetion, getFont } from '../localization/index'

let theme = createMuiTheme()
theme = createMuiTheme({
  palette,
  direction: getDircetion(),
  spacing: 2.5,
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: getDircetion() === 'rtl' ? 50 : 52,
      lineHeight: '4rem',
      fontFamily: getFont(),
      color: '#000',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 40 : 42
      }
    },
    h2: {
      fontWeight: 700,
      fontSize: getDircetion() === 'rtl' ? 38 : 40,
      lineHeight: '3.2857rem',
      fontFamily: getFont(),
      color: '#000',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 32 : 34
      }
    },
    h3: {
      fontWeight: 600,
      fontSize: getDircetion() === 'rtl' ? 30 : 32,
      lineHeight: '2.7rem',
      fontFamily: getFont(),
      textAlign: 'left',
      color: '#000',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 28 : 30
      }
    },
    h4: {
      fontWeight: 600,
      fontSize: getDircetion() === 'rtl' ? 26 : 28,
      lineHeight: '2.43rem',
      fontFamily: getFont(),
      color: '#000',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 22 : 24
      }
    },
    h5: {
      fontWeight: 600,
      fontSize: getDircetion() === 'rtl' ? 21 : 23,
      lineHeight: '2.14rem',
      fontFamily: getFont(),
      color: '#000',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 18 : 20
      }
    },
    h6: {
      fontWeight: 600,
      fontSize: getDircetion() === 'rtl' ? 16 : 18,
      lineHeight: '1.857rem',
      fontFamily: getFont(),
      color: '#000',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 14 : 16
      }
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: getDircetion() === 'rtl' ? 18 : 20,
      lineHeight: '2rem',
      fontFamily: getFont(),
      marginTop: 15,
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 15 : 17
      }
    },
    body2: {
      fontSize: getDircetion() === 'rtl' ? 13 : 15,
      color: '#000',
      fontFamily: getFont(),
      fontWeight: 600,
      letterSpacing: 1,
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 11 : 13
      }
    },
    body1: {
      fontSize: getDircetion() === 'rtl' ? 16 : 18,
      lineHeight: '1.8rem',
      color: '#000',
      fontFamily: getFont(),
      fontWeight: 400,
      textAlign: getDircetion() === 'rtl' ? 'justify' : 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 13 : 15
      }
    },
    button: {
      fontSize: getDircetion() === 'rtl' ? 12 : 14,
      color: '#000',
      fontFamily: getFont(),
      fontWeight: 400,
      letterSpacing: 2,
      textTransform: 'none',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDircetion() === 'rtl' ? 12 : 14
      }
    }
  }
})
export default theme
