import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hidden } from '@material-ui/core'
import useStyles from './MasterLayout.styles'
import Desktop from '../components/menu/desktop'
import Mobile from '../components/menu/mobile'
import Footer from '../components/footer'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Hidden xsDown>
          <Desktop />
        </Hidden>
        <Hidden smUp>
          <Mobile />
        </Hidden>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
