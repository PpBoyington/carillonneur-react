import React from 'react'
import LogoHead from './NavHead'
import { AppBar, Slide } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const Header = () => {
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
