import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './index.styles'
import Title from '../TitleWithBottomBorder'

export default function Index() {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container direction="row">
      <Grid className={classes.item} item lg={4} xs={12}>
        <Title title="درباره کتویام" />
      </Grid>
      <Grid className={classes.item} item lg={8} xs={12}>
        <Title title="لینک های مفید" />
      </Grid>
    </Grid>
  )
}
