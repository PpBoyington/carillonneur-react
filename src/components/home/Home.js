import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import BookCarousel from './BookCarousel'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    margin: 'auto',
    maxWidth: 500
  }
}))

export default function Home (props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        classeName={classes.grid}>
        <BookCarousel/>
      </Grid>
    </div>
  )
}
