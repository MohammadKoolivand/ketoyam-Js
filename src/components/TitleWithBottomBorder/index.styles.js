import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  titleDiv: {
    marginBottom: 10,
    paddingBottom: 20,
    position: 'relative',
    width: '100%',
    justifyContent: 'start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  }
}))
