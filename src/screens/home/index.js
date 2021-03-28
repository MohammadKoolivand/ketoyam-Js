import { Grid, Hidden } from '@material-ui/core'
import React from 'react'
import useStyles from './index.styles'
import WantToRead from '../../components/home/want'
import StartReading from '../../components/home/start'
import FinishReading from '../../components/home/finish'
import ProgressReading from '../../components/home/progress'
import ReviewBook from '../../components/home/review'
import RateBook from '../../components/home/rating'
import SuggestBook from '../../components/home/suggest'
import { getTranslate } from '../../localization'

export default function Index() {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <Grid className={classes.root}>
      <Hidden mdDown>
        <Grid className={classes.right}>right</Grid>
      </Hidden>
      <Grid className={classes.center}>
        {translate.wantToReadList.map((item) => {
          switch (item.type) {
            case 'want':
              return <WantToRead item={item} />
            case 'start':
              return <StartReading item={item} />
            case 'finish':
              return <FinishReading item={item} />
            case 'progress':
              return <ProgressReading item={item} />
            case 'rate':
              return <RateBook item={item} />
            case 'review':
              return <ReviewBook item={item} />
            case 'suggest':
              return <SuggestBook item={item} />
            default:
              return null
          }
        })}
      </Grid>
      <Hidden mdDown>
        <Grid className={classes.left}>left</Grid>
      </Hidden>
    </Grid>
  )
}
