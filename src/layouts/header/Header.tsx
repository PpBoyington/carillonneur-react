import React from 'react'
import { useScrollTrigger, Slide, AppBar, Box, Drawer, Typography, Toolbar, Grid, Button, Divider, List, ListItem, ListItemButton, ListItemText, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import melKropyMenu from '../../img/mel_kropy_menu.png'
import logo from '../../img/logo_header.jpg'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

const drawerWidth = 240
interface Sections {
  title?: string
  img?: any
  url: string
}

const sections = [
  { title: 'Caranusca', url: '/livres' },
  { img: melKropyMenu, url: '/melkropy' },
  { title: 'Auteurs', url: '/auteurs' },
  { title: 'Projets', url: '/projets' },
  { title: 'Liens', url: '/liens' },
  { title: 'A Propos', url: '/propos' },
  { title: 'Contact', url: '/contact' }
] as Sections[]

const Header = (): JSX.Element => {
  const trigger = useScrollTrigger()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {sections.map((item) => (
          <ListItem key={item.url} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                (section.title != null)
              ? <ListItemText primary={item.title} />
              : <Link to={item.url} component={RouterLink} sx={{ width: '125px' }}><img src={item.img} style={{ width: '125px' }} title="logo" alt="logo" /></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => document.body : undefined

  return (
    <>
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar color="inherit" position="sticky" component="nav">
        <NavHead/>
      </AppBar>
    </Slide>
       <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </>
  )
}

const NavHead = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  return (<Grid
    container
    direction="row">

    <Grid container item xs={12}>
      <Grid container>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link component={RouterLink} to="/"><img src={logo} title="logo" alt="logo" /></Link>
          {sections.map(section => (
            (section.title != null)
              ? <Button
                color="inherit"
                key={section.title}
                component={RouterLink}
                to={section.url}
              >
                {section.title}
              </Button>
              : <Link component={RouterLink} to={section.url} style={{ width: '125px' }} ><img src={section.img} style={{ width: '125px' }} title="logo" alt="logo" /></Link>
          ))}
        </Toolbar>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Header
