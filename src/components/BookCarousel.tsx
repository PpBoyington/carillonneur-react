import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'
import KropyDraach from '../img/Kropy_Draach.png'
import KropyPilly from '../img/Kropy_pilly.png'
import MelKropyBocal from '../img/MelKropyBocal.png'
import MelKropyJeanLoup from '../img/MelKropyJeanLoup.png'
import Carousel from 'react-material-ui-carousel'

const BookCarousel = (): JSX.Element => {
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

  return <Grid item xs={12}><Carousel autoPlay={true}
    interval={5000}
    animation='slide'
    fullHeightHover={true}
    navButtonsAlwaysVisible={false}
    sx={{
      width: '100%',
      '& img': {
        height: '100%',
        width: '-webkit-fill-available'
      }
    }}
    >
    {items.map(item =>
      <Card raised sx={{
        width: '100%',
        height: '500px',
        position: 'relative'
      }} key={item.name}>
        <Grid container spacing={0} sx={{
          height: 500,
          position: 'relative'
        }} >
          <Grid xs={12} item >
            <CardMedia
              sx={{
                maxHeight: 500,
                maxWidth: 'auto',
                objectFit: 'contain',
                overflow: 'hidden',
                position: 'relative'
              }}
              title={item.name}
              component='img'
              image={item.url}/>
          </Grid>
        </Grid>
      </Card>
    )}
  </Carousel>
  </Grid>
}

export default BookCarousel
