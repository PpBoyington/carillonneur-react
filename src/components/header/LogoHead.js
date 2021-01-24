import React from 'react'
import { Toolbar, Link, Grid, CardMedia } from '@material-ui/core'
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

const LogoHead = () => {
  const classes = useStyles()
  return <header className="App-header">
    <Grid container spacing={3} direction="column"
      justify="center"
      alignItems="center">
      <Grid item xs={12}>
        <CardMedia component="img"
          height="100%"
          image={logo} alt="logo" className={classes.logo} />
      </Grid>
      <Grid item xs={12}>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              className={classes.toolbarLink}
              component={RouterLink}
              to={section.url}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Grid>
    </Grid>
  </header>
}

export default LogoHead
