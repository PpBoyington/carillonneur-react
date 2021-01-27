import React from 'react'
import Grid from '@material-ui/core/Grid'
import BookCarousel from './BookCarousel'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
}))

const Home = () => {
  const classes = useStyles()
  return <BookCarousel/>
}

export default Home
