import React from 'react'
import { Toolbar, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../../img/logo_header.jpg'

const LinkRef = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Livres', url: '/livre' },
  { title: 'Offrir', url: '/offrir' },
  { title: 'Auteurs', url: '/auteurs' },
  { title: 'Projets', url: '/projets' },
  { title: 'Liens', url: '/liens' },
  { title: 'A Propos', url: '/propos' },
  { title: 'Contact', url: '/contact' }
]

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  logo: {
    padding: theme.spacing(1, 9, 1, 0)
  }
}))

export default function Header () {
  const classes = useStyles()
  return <header className="App-header">
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      <img src={logo} alt="logo" className={classes.logo} />
      {sections.map(section => (
        <Link
          color="inherit"
          noWrap
          key={section}
          variant="body2"
          className={classes.toolbarLink}
          component={LinkRef}
          to={section.url}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  </header>
}
