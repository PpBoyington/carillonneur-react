import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 1
  }
}))

export default function Home () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing='3'>
        <Grid item xs='12'>
          <h3>Home</h3>
        </Grid>
      </Grid>
    </div>
  )
}
