import React from 'react'
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import useTextCarousel from './useTextCarousel'
import PrintIcon from '@material-ui/icons/Print'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  banner: {
    width: '100%',
    height: 300,
    position: 'relative'
  },
  bannerGrid: {
    height: 300,
    position: 'relative'
  },
  content: {
    color: 'white',
    backgroundColor: '#771818',
    height: '100%',
    position: 'relative',
    padding: '30px',
    transition: '300ms'
  },
  viewButton: {
    color: 'white',
    fontSize: '15px',
    border: '3px solid white',
    textTransform: 'capitalize',
    transition: '200ms'
  },
  desc: {
    color: 'white'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}))

const TextCarousel = () => {
  const classes = useStyles()
  const {
    handleClickOpen,
    handleClose,
    handlePrint,
    open,
    items,
    autoPlay,
    timer,
    animation,
    navButtonsAlwaysVisible
  } = useTextCarousel()

  return <Carousel autoPlay={autoPlay}
    timer={timer}
    animation={animation}
    navButtonsAlwaysVisible={navButtonsAlwaysVisible}>
    {items.map(item =>
      <Card raised className={classes.banner} key={item.name}>
        <Grid container spacing={0} className={classes.bannerGrid} >
          <Grid xs={12} item >
            <CardContent className={classes.content}>
              <Typography variant="h3" component="h1" gutterBottom className={classes.title}>
                {item.name}
              </Typography>

              <Typography variant="subtitle1" gutterBottom className={classes.desc}>
                {item.desc}
              </Typography>

              <Button variant="outlined" className={classes.viewButton} onClick={handleClickOpen}>
                    Voir
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle>{item.name}
                  <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
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
