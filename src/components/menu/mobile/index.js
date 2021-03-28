import React, { useState } from 'react'
import Menu from '@material-ui/icons/Menu'
import { SwipeableDrawer } from '@material-ui/core'
import useStyles from './index.styles'
import headerLogo from '../../../assets/images/main-logo.svg'
import SwipeableContent from './swipeableContent'

export default function Index() {
  const classes = useStyles()
  const [drawer, setDrawer] = useState(false)

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }
  return (
    <div className={classes.root}>
      <div className={classes.mobileHeader}>
        <Menu
          className={classes.headerMenu}
          onClick={() => {
            toggleDrawer()
          }}
        />
        <img className={classes.headerImg} src={headerLogo} alt="ketoyamLogo" />
      </div>
      <SwipeableDrawer
        onClose={() => toggleDrawer()}
        style={{ width: 500 }}
        open={drawer}
      >
        <SwipeableContent />
      </SwipeableDrawer>
    </div>
  )
}
