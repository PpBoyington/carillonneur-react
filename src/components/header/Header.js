import React from 'react'
import LogoHead from './LogoHead'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  headBlack: {
    flexGrow: 1,
    width: '100%',
    height: 30,
    backgroundColor: 'black',
    color: 'white'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.headBlack}></div>
      <LogoHead/>
    </>
  )
}

export default Header
