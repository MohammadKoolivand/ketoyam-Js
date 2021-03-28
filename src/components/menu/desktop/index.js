import React, { useContext } from 'react'
import { Button, Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link, useLocation } from 'react-router-dom'
import headerLogo from '../../../assets/images/main-logo.svg'
import PersianFlag from '../../../assets/images/iran-flag.svg'
import EnglishFlag from '../../../assets/images/uk-flag.svg'
import useStyles from './index.styles'
import { changeLanguage, getTranslate, lang } from '../../../localization'
import { LoginContext } from '../../../contexts/LoginContext'
import { SIGNIN, SIGNUP } from '../../../constants/ActionTypes'

export default function Index() {
  const { dispatch } = useContext(LoginContext)
  // const [open, setOpen] = useState(false)
  const classes = useStyles()
  const translate = getTranslate()
  const location = useLocation()
  const path = location.pathname
  return (
    <div className={classes.root}>
      <img className={classes.headerImg} src={headerLogo} alt="ketoyamLogo" />
      <div className={classes.headerMenu}>
        <List
          style={{ display: 'flex', padding: 0 }}
          component="nav"
          aria-label="main mailbox folders"
        >
          <ListItem
            className={
              path === '/' ? classes.activeListItem : classes.inactiveListItem
            }
            button
            component={Link}
            to="/"
          >
            <ListItemText className={classes.listItemText}>
              <Typography variant="subtitle2" className={classes.listItemText}>
                {translate.home}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            className={
              path === '/mybooks'
                ? classes.activeListItem
                : classes.inactiveListItem
            }
            button
            component={Link}
            to="/mybooks"
          >
            <ListItemText>
              <Typography variant="subtitle2" className={classes.listItemText}>
                {translate.mybooks}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            className={
              path === '/explore'
                ? classes.activeListItem
                : classes.inactiveListItem
            }
            button
            component={Link}
            to="/explore"
          >
            <ListItemText>
              <Typography variant="subtitle2" className={classes.listItemText}>
                {translate.explore}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            className={
              path === '/groups'
                ? classes.activeListItem
                : classes.inactiveListItem
            }
            button
            component={Link}
            to="/groups"
          >
            <ListItemText>
              <Typography variant="subtitle2" className={classes.listItemText}>
                {translate.groups}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            className={
              path === '/friends'
                ? classes.activeListItem
                : classes.inactiveListItem
            }
            button
            component={Link}
            to="/friends"
          >
            <ListItemText>
              <Typography variant="subtitle2" className={classes.listItemText}>
                {translate.friends}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            className={
              path === '/contactus'
                ? classes.activeListItem
                : classes.inactiveListItem
            }
            button
            component={Link}
            to="/contactus"
          >
            <ListItemText>
              <Typography variant="subtitle2" className={classes.listItemText}>
                {translate.contactus}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            className={
              path === '/aboutus'
                ? classes.activeListItem
                : classes.inactiveListItem
            }
            button
            component={Link}
            to="/aboutus"
          >
            <ListItemText>
              <Typography variant="subtitle2" className={classes.listItemText}>
                {translate.aboutus}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Button
          variant="text"
          onClick={() =>
            lang === 'fa' ? changeLanguage('en') : changeLanguage('fa')
          }
        >
          <img src={lang === 'fa' ? EnglishFlag : PersianFlag} alt="flag" />
        </Button>
      </div>
      <div className={classes.headerLogin}>
        <Button
          onClick={() => {
            // setOpen(false)
            dispatch({ type: SIGNIN })
          }}
          size="small"
          variant="contained"
          color="primary"
        >
          <Typography variant="subtitle2">{translate.login}</Typography>
        </Button>
        <Button
          onClick={() => {
            // setOpen(false)
            dispatch({ type: SIGNUP })
          }}
          size="small"
          className={classes.registerButton}
          variant="outlined"
        >
          <Typography variant="subtitle2">{translate.register}</Typography>
        </Button>
      </div>
    </div>
  )
}
