import React from 'react'
import Grid from '@material-ui/core/Grid'
import BookCarousel from '../../components/BookCarousel'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
}))

const Home = () => {
  const classes = useStyles()
  return <Grid container>
    <Grid item xs={12}>
      <BookCarousel/>
    </Grid>
  </Grid>
}

export default Home
