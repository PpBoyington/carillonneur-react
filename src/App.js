import React from 'react'
import { CssBaseline, Container, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import AppRouter from './components/AppRouter'

const useStyles = makeStyles(theme => ({
  containerStyle: {
    boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.75)',
    paddingLeft: 0,
    paddingRight: 0
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Container maxWidth="md" className={classes.containerStyle}>
          <Header/>
          <AppRouter/>
        </Container>
      </Router>
    </div>
  )
}

export default App
