import React from 'react'
import { Toolbar, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Link as RouterLink } from 'react-router-dom'
import logo from '../../img/logo_header.jpg'

const sections = [
  { title: 'Caranusca', url: '/livres' },
  { title: 'SBAMMM', url: '/offrir' },
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
    padding: theme.spacing(3)
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
