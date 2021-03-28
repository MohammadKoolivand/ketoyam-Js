import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  mobileHeader: {
    width: '100%',
    height: 60,
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '1px -3px 16px #ccc'
  },
  top: {
    width: 300,
    height: 50,
    marginRight: 15
  },
  center: {
    width: 40,
    height: 40,
    marginRight: 0,
    color: theme.palette.secondary.main
  },
  bottom: {}
}))
