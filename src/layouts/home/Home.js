import React from 'react'
import Grid from '@material-ui/core/Grid'
import BookCarousel from './BookCarousel'

const Home = () => {
  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <BookCarousel />
      </Grid>
    </div>
  )
}

export default Home
