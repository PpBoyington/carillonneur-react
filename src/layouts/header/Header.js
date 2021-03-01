import React from 'react'
import LogoHead from './NavHead'
import { makeStyles } from '@material-ui/core'

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

  return (
    <>
      <div className={classes.headBlack} />
      <LogoHead/>
    </>
  )
}

export default Header
