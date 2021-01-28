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
  container: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  media: {
    width: 'auto',
    maxHeight: 700
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

  return <Grid container
    justify="center"
    alignItems="center">
    <Card raised className={classes.root}>
      <Carousel autoPlay={autoPlay}
        timer={timer}
        animation={animation}
        indicators={indicators}>
        {items.map(item =>
          <div className={classes.container} key={item.url}>
            <CardMedia
              className={classes.media}
              title={item.name}
              component='img'
              image={item.url}/>
          </div>
        )}
      </Carousel>
    </Card>
  </Grid>
}

export default BookCarousel
