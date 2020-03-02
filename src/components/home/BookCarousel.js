import React from 'react'
import { CardMedia, Grid } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

export default function BookCarousel (props) {
  const carouselParam = props.carouselParam
  return <Grid item xs>
    <Carousel
      className="Example"
      autoPlay={carouselParam.autoPlay}
      timer={carouselParam.timer}
      animation={carouselParam.animation}
      indicators={carouselParam.indicators}>
      {carouselParam.items.map((item, index) => {
        return <CardMedia
          className={carouselParam.classes.cardMedia}
          image={item.image}
          title={item.name}
          key={index}>
        </CardMedia>
      })}
    </Carousel>
  </Grid>
}
