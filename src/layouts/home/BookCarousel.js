import React from 'react'
import { CardMedia, Grid, CardActionArea, makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import KropyDraach from '../../img/Kropy_Draach.png'
import KropyPilly from '../../img/Kropy_pilly.png'
import MelKropyBocal from '../../img/MelKropyBocal.png'
import MelKropyJeanLoup from '../../img/MelKropyJeanLoup.png'

const useStyles = makeStyles(theme => ({
  carousel: {
    height: '100'
  }
}))

const BookCarousel = () => {
  const classes = useStyles()

  const items = [{
    image: KropyDraach,
    name: 'Kropy & Draach'
  },
  {
    image: KropyPilly,
    name: 'Kropy & Pilly'
  },
  {
    image: MelKropyBocal,
    name: 'Mel, Kropy & Bocal'
  },
  {
    image: MelKropyJeanLoup,
    name: 'Mel, Kropy & JeanLoup'
  }]

  const autoPlay = true
  const timer = 500
  const animation = 'fade'
  const indicators = true

  return <Grid item xs={12}>
    <Carousel
      autoPlay={autoPlay}
      timer={timer}
      animation={animation}
      className={classes.carousel}
      indicators={indicators}>
      {items.map(item => (
        <CardActionArea key={item.name}>
          <CardMedia
            component="img"
            image={item.image}
            title={item.name}>
          </CardMedia>
        </CardActionArea>
      ))}
    </Carousel>
  </Grid>
}

export default BookCarousel
