import React from 'react'
import { Card, CardMedia, Grid, makeStyles } from '@material-ui/core'
import KropyDraach from '../img/Kropy_Draach.png'
import KropyPilly from '../img/Kropy_pilly.png'
import MelKropyBocal from '../img/MelKropyBocal.png'
import MelKropyJeanLoup from '../img/MelKropyJeanLoup.png'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(theme => ({
  banner: {
    width: '100%',
    height: '500px',
    position: 'relative'
  },
  media: {
    maxHeight: 500,
    maxWidth: 'auto',
    objectFit: 'contain',
    overflow: 'hidden',
    position: 'relative'
  },
  bannerGrid: {
    height: 500,
    position: 'relative'
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
  const autoPlay = true
  const interval = 5000
  const animation = 'slide'
  const navButtonsAlwaysVisible = false

  return <Carousel autoPlay={autoPlay}
    interval={interval}
    animation={animation}
    navButtonsAlwaysVisible={navButtonsAlwaysVisible}>
    {items.map(item =>
      <Card raised className={classes.banner} key={item.name}>
        <Grid container spacing={0} className={classes.bannerGrid} >
          <Grid xs={12} item >
            <CardMedia
              className={classes.media}
              title={item.name}
              component='img'
              image={item.url}/>
          </Grid>
        </Grid>
      </Card>
    )}
  </Carousel>
}

export default BookCarousel
