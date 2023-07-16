import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import melKropyMenu from '../../img/rollup_mathieu_page-0001.jpg'
import melKropyVisuel from '../../img/Visuel_Mug-Mel_&_Kropy.jpg'
import melBioExpression from '../../img/mel_bio_expression.png'
import kropyBioExpression from '../../img/kropy_bio_expression.png'
import krikKrakBioExpression from '../../img/krik_krak_bio_expression.png'
import jeanLoupBioExpression from '../../img/jean_loup_bio_expression.png'
import ardinjBioExpression from '../../img/ardinj_bio_expression.png'
import djinnoBioExpression from '../../img/djinno_bio_expression.png'
import lorelaBioExpression from '../../img/lorela_bio_expression.png'
import carillonneurBioExpression from '../../img/Carillonneur.png'
import drelinhoBioExpression from '../../img/Drelinho.png'
import grousstbuchBioExpression from '../../img/Grousstbuch.png'
import goldengoldBioExpression from '../../img/Goldengold.png'
import holzernefloteBioExpression from '../../img/Holzerneflote.png'
import jangDraachBioExpression from '../../img/Jang&Draach.png'
import lesPillyBioExpression from '../../img/Les_Pilly.png'
import mlleCrochueBioExpression from '../../img/MlleCrochue.png'
import mllePAILLETTEBioExpression from '../../img/MllePAILLETTE.png'

interface protagonistsDescType {
  img: string
  title: string
}
const images: protagonistsDescType[] = [
  {
    img: kropyBioExpression,
    title: 'Kropy'
  },
  {
    img: melBioExpression,
    title: 'Mel'
  },
  {
    img: krikKrakBioExpression,
    title: 'Krik Krak'
  },
  {
    img: jeanLoupBioExpression,
    title: 'Jean Loup'
  },
  {
    img: ardinjBioExpression,
    title: 'Ardinj'
  },
  {
    img: djinnoBioExpression,
    title: 'Djinno'
  },
  {
    img: lorelaBioExpression,
    title: 'Lorela'
  },
  {
    img: jangDraachBioExpression,
    title: 'Jang & Draach'
  },
  {
    img: lesPillyBioExpression,
    title: 'Les Pilly'
  },
  {
    img: drelinhoBioExpression,
    title: 'Drelinho'
  },
  {
    img: grousstbuchBioExpression,
    title: 'GrousstBuch'
  },
  {
    img: mlleCrochueBioExpression,
    title: 'Mlle Crochue'
  },
  {
    img: mllePAILLETTEBioExpression,
    title: 'Mlle Paillette'
  },
  {
    img: holzernefloteBioExpression,
    title: 'HolzerneFlote'
  },
  {
    img: goldengoldBioExpression,
    title: 'GoldenGold'
  },
  {
    img: carillonneurBioExpression,
    title: 'Carillonneur'
  }
]

const MelKropy = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'))
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={2}>
          <img
            src={melKropyMenu}
            style={{
              width: '100%',
              filter: 'drop-shadow( 15px 11px 4px #2C3532)'
            }}
            alt="test"
          />
        </Grid>
        <Grid container spacing={2} item xs={10}>
          <Grid container item justifyContent="center" pt={2} xs={12}>
            <img
              src={melKropyVisuel}
              style={{ width: '25%', objectFit: 'contain' }}
            />
          </Grid>
          <Grid container item xs={12}>
            <ImageList cols={matchDownMd ? 2 : 5} gap={16}>
              {images.map((item) => (
                <ImageListItem
                  key={item.title}
                  sx={{ cursor: 'pointer' }}
                  onClick={handleClickOpen}
                >
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    title={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Toolbar>
          <DialogTitle id="responsive-dialog-title">{'test'}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MelKropy