import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hidden } from '@material-ui/core'
import useStyles from './MasterLayout.styles'
import Desktop from '../components/menu/desktop'
import Mobile from '../components/menu/mobile'
import Footer from '../components/footer'
import Routes from '../routes'
import LoginModals from '../components/loginModals'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Hidden smDown>
          <Desktop />
        </Hidden>
        <Hidden mdUp>
          <Mobile />
        </Hidden>
        <div className={classes.rootHome}>
          <Routes />
          <Footer />
          <LoginModals />
        </div>
      </div>
    </BrowserRouter>
  )
}
