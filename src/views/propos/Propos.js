import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 1
  }
}))

export default function Propos () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3>Propos</h3>
        </Grid>
      </Grid>
    </div>
  )
}
