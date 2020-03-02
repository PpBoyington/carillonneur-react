import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import BookCarousel from './BookCarousel'
import LesPillysImg from '../../img/les_pillys_3.jpg'
import BocalImg from '../../img/recherches_bocal.png'
import JangDraach from '../../img/RECHERCHES_JANG_DRAACH.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 1
  },
  card: {
    display: 'flex',
    height: 700
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    flex: 1,
    height: 700
  }
}))

export default function Home (props) {
  const classes = useStyles()
  const items = [{
    image: LesPillysImg,
    name: 'Les Pillys'
  },
  {
    image: BocalImg,
    name: 'Recherche Bocal'
  },
  {
    image: JangDraach,
    name: 'Jang Draach'
  }]
  const carouselParam = {
    autoPlay: true,
    timer: 500,
    animation: 'fade',
    indicators: true,
    items,
    classes
  }
  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <BookCarousel carouselParam={carouselParam}/>
        <BookCarousel carouselParam={carouselParam}/>
        <BookCarousel carouselParam={carouselParam}/>
      </Grid>
    </div>
  )
}
