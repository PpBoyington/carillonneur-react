import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import { AppRouter } from './components/AppRouter'

function App () {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header/>
          <AppRouter/>
        </Container>
      </Router>
    </div>
  )
}

export default App
