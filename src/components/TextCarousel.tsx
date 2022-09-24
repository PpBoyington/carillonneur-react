import React, { useCallback, useState } from 'react'
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import useTextCarousel from './useTextCarousel'
import PrintIcon from '@mui/icons-material/Print'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'

const TextCarousel = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const items = useTextCarousel()
  const theme = useTheme()

  const handleClickOpen = useCallback(() => {
    setOpen(true)
    setAutoPlay(false)
  }, [setAutoPlay])

  const handleClose = useCallback(() => {
    setOpen(false)
    setAutoPlay(true)
  }, [setAutoPlay])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  return <Carousel autoPlay={autoPlay}
    interval={10000}
    animation={'slide'}
    navButtonsAlwaysVisible={false}>
    {items.map(item =>
      <Card raised sx={{
        width: '100%',
        height: 300,
        position: 'relative'
      }} key={item.name}>
        <Grid container sx={{
          height: 300,
          position: 'relative'
        }}>
          <Grid xs={12} item >
            <CardContent sx={{
              color: 'white',
              backgroundColor: '#771818',
              height: '100%',
              position: 'relative',
              padding: '30px',
              transition: '300ms'
            }}>
              <Typography variant="h3" component="h1" gutterBottom>
                {item.name}
              </Typography>

              <Typography variant="subtitle1" gutterBottom sx={{ color: 'white' }}>
                {item.desc}
              </Typography>

              <Button variant="outlined" onClick={handleClickOpen} sx={{
                color: 'white',
                fontSize: '15px',
                border: '3px solid white',
                textTransform: 'capitalize',
                transition: '200ms'
              }}>
                    Voir
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle>{item.name}
                  <IconButton aria-label="close" onClick={handleClose} sx={{
                    position: 'absolute',
                    right: theme.spacing(1),
                    top: theme.spacing(1),
                    color: theme.palette.grey[500]
                  }}>
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {item.text}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<PrintIcon/>}
                    onClick={handlePrint}>
                    Imprimer
                  </Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    )}
  </Carousel>
}

export default TextCarousel
