import React from 'react'
import { Toolbar, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../../img/logo_header.jpg'

const sections = [
  { title: 'Accueil', url: '/' },
  { title: 'Caranusca', url: '/livres' },
  { title: 'SBAMMM', url: '/offrir' },
  { title: 'Auteurs', url: '/auteurs' },
  { title: 'Projets', url: '/projets' },
  { title: 'Liens', url: '/liens' },
  { title: 'A Propos', url: '/propos' },
  { title: 'Contact', url: '/contact' }
]

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    textAlign: 'center',
    padding: theme.spacing(2)
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}))

const NavHead = () => {
  const classes = useStyles()
  return <Grid
    container
    direction="row"
    justify="center"
    alignItems="center">
    <Grid item xs={6}>
      <img src={logo} title="logo" alt="logo" />
    </Grid>
    <Grid item xs={6}>
      <Grid item xs={9}>
        <Toolbar id="back-to-top-anchor" component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Button
              color="inherit"
              key={section.title}
              className={classes.toolbarLink}
              component={RouterLink}
              to={section.url}
              underline={'none'}
            >
              {section.title}
            </Button>
          ))}
        </Toolbar>
      </Grid>
    </Grid>
  </Grid>
}

export default NavHead
