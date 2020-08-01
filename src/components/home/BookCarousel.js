import React from 'react'
import { CardMedia, Grid, CardActionArea, makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(theme => ({
  carousel: {
    height: '100'
  }
}))

const BookCarousel = () => {
  const classes = useStyles()

  const items = [{
    image: '/img/Kropy_Draach.png',
    name: 'Kropy & Draach'
  },
  {
    image: '/img/Kropy_pilly.png',
    name: 'Kropy & Pilly'
  },
  {
    image: '/img/MelKropyBocal.png',
    name: 'Mel, Kropy & Bocal'
  },
  {
    image: '/img/MelKropyJeanLoup.png',
    name: 'Mel, Kropy & JeanLoup'
  }]

  const autoPlay = true
  const timer = 500
  const animation = 'fade'
  const indicators = true

  return <Grid item xs="12">
    <Carousel
      autoPlay={autoPlay}
      timer={timer}
      animation={animation}
      className={classes.carousel}
      indicators={indicators}>
      {items.map((item, index) => (
        <CardActionArea key={index}>
          <CardMedia
            component="img"
            image={item.image}
            title={item.name}
            key={index}>
          </CardMedia>
        </CardActionArea>
      ))}
    </Carousel>
  </Grid>
}

export default BookCarousel
