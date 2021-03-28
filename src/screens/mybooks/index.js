import { Grid } from '@material-ui/core'
import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import useStyles from './index.styles'
import { getTranslate } from '../../localization'

export default function Index() {
  const classes = useStyles()
  const [value, setValue] = React.useState('female')
  const translate = getTranslate()

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className={classes.root}>
      <Grid className={classes.rightPart}>
        <Grid className={classes.statusType}>
          <FormControl className={classes.radioForm} component="fieldset">
            <FormLabel component="legend">
              {translate.readingStatusName}
            </FormLabel>
            <RadioGroup value={value} onChange={handleChange}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label={translate.wantToRead}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label={translate.reading}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label={translate.read}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid className={classes.leftPart} />
    </div>
  )
}
