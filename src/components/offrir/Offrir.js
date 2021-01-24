import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 1
  }
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3>Offrir</h3>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
