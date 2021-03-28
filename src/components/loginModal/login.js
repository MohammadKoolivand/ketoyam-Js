import React, { useState } from 'react'
import { Grid, Modal } from '@material-ui/core'
import useStyles from './index.styles'

export default function Login() {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  return (
    <Modal open={open} onClose={() => setOpen(!open)}>
      <Grid className={classes.rootLogin}>dfgh</Grid>
    </Modal>
  )
}
