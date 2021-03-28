import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 60,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    boxShadow: '1px -3px 16px #ccc'
  },
  headerImg: {
    width: 50,
    height: 50,
    marginRight: 15,
    marginLeft: 15
  },
  headerMenu: {
    flex: 1,
    display: 'flex'
  },
  headerLogin: {
    display: 'flex'
  },
  loginButton: {
    width: 60
  },
  inactiveListItem: {
    width: 'max-content',
    minWidth: 80,
    display: 'flex',
    textAlign: 'center'
  },
  activeListItem: {
    width: 'max-content',
    minWidth: 80,
    display: 'flex',
    textAlign: 'center',
    borderBottom: '3px solid',
    borderBottomColor: theme.palette.primary.main
  },
  listItemText: {
    justifyContent: 'center',
    display: 'flex',
    color: theme.palette.secondary.main
  },
  registerButton: {
    borderColor: theme.palette.primary.main,
    color: '#000',
    marginLeft: 5
  }
}))
