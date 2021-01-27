import React from 'react'
import { Card, CardMedia, Grid, makeStyles } from '@material-ui/core'
import KropyDraach from '../../img/Kropy_Draach.png'
import KropyPilly from '../../img/Kropy_pilly.png'
import MelKropyBocal from '../../img/MelKropyBocal.png'
import MelKropyJeanLoup from '../../img/MelKropyJeanLoup.png'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  media: {
    width: '100%',
    height: 700
  }
}))

const BookCarousel = () => {
  const classes = useStyles()

  const items = [{
    url: KropyDraach,
    name: 'Kropy & Draach'
  },
  {
    url: KropyPilly,
    name: 'Kropy & Pilly'
  },
  {
    url: MelKropyBocal,
    name: 'Mel, Kropy & Bocal'
  },
  {
    url: MelKropyJeanLoup,
    name: 'Mel, Kropy & JeanLoup'
  }]
  const autoPlay = false
  const timer = 500
  const animation = 'fade'
  const indicators = true

  return <Card raised>
    <Grid container
      justify="center"
      alignItems="center">
      <Carousel autoPlay={autoPlay}
        timer={timer}
        animation={animation} className={classes.root}
        indicators={indicators}>
        {items.map(item =>
          <Grid item xs key={item.url}>
            <CardMedia
              className={classes.media}
              title={item.name}
              image={item.url}/>
          </Grid>
        )}
      </Carousel>
    </Grid>
  </Card>
}

export default BookCarousel
