import React from 'react'
import BookCarousel from '../../components/BookCarousel'
import TextCarousel from '../../components/TextCarousel'
import { createTheme, Grid, ThemeProvider, Typography } from '@mui/material'

const Home = (): JSX.Element => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Pacifico',
        'cursive'
      ].join(',')
    }
  })

  return <Grid container spacing={5} >
    <Grid container item xs={12} mt={10}>
      <BookCarousel/>
    </Grid>
    <Grid container item justifyContent="center">
      <Grid item xs={6} >
        <ThemeProvider theme={theme}>
          <Typography variant="h3">
            Sur la route de Caranusca
          </Typography>
          <TextCarousel/>
        </ThemeProvider>
      </Grid>
    </Grid>
    <Grid item xs={12}>

    </Grid>
  </Grid>
}

export default Home
