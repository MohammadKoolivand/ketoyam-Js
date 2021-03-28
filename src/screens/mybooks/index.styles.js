import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  rightPart: {
    flex: 1,
    height: '100vh'
  },
  statusType: {
    boxShadow: '0 0 5px #ccc'
  },
  radioForm: {
    width: '90%',
    margin: 15,
    padding: '0px 15px 0 0'
  },
  leftPart: {
    flex: 3
  }
}))
