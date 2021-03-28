import React from 'react'
import useStyles from './swipeableContent.styles.js'

export default function SwipeableContent() {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.top} />
      <div className={classes.center} />
      <div className={classes.bottom} />
    </div>
  )
}
