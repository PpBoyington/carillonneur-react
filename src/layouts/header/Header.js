import React from 'react'
import LogoHead from './NavHead'
import { AppBar, makeStyles, Slide } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const useStyles = makeStyles(theme => ({
  headBlack: {
    flexGrow: 1,
    width: '100%',
    height: 40,
    backgroundColor: '#242124'
  }
}))

const Header = () => {
  const classes = useStyles()
  const trigger = useScrollTrigger()

  return (
    <header className="App-header">
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="static">
          <LogoHead/>
        </AppBar>
      </Slide>
    </header>
  )
}

export default Header
