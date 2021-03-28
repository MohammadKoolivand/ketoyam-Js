import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: 10,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  right: {
    flex: 2,
    alignItems: 'center'
  },
  center: {
    flex: 3
  },
  left: {
    flex: 2
  }
}))
