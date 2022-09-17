import React from 'react'
import { Toolbar, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Link as RouterLink } from 'react-router-dom'
import melKropyMenu from '../../img/mel_kropy_menu.png'
import logo from '../../img/logo_header.jpg'
import clsx from 'clsx'

const sections = [
  { title: 'Caranusca', url: '/livres' },
  { img: melKropyMenu, url: '/melkropy' },
  { title: 'Auteurs', url: '/auteurs' },
  { title: 'Projets', url: '/projets' },
  { title: 'Liens', url: '/liens' },
  { title: 'A Propos', url: '/propos' },
  { title: 'Contact', url: '/contact' }
]

const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(3),
    textTransform: 'none',
    fontWeight: '700'
  },
  caranusca: {
    fontSize: '25px'
  }
}))

const NavHead = () => {
  const classes = useStyles()
  return <Grid
    container
    direction="row"
    justify="center"
    alignItems="center">

    <Grid container item xs={12}>
      <Grid container>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link to="/"><img src={logo} title="logo" alt="logo" /></Link>
          {sections.map(section => (
            section.title
              ? <Button
                color="inherit"
                key={section.title}
                className={clsx({ [classes.toolbarLink]: true, [classes.caranusca]: section.title === 'Caranusca' })}
                component={RouterLink}
                to={section.url}
                underline={'none'}
              >
                {section.title}
              </Button>
              : <Link to={section.url} style={{ width: '125px' }} ><img src={section.img} style={{ width: '125px' }} title="logo" alt="logo" /></Link>
          ))}
        </Toolbar>
      </Grid>
    </Grid>
  </Grid>
}

export default NavHead
