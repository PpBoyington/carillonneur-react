import React from 'react'
import { Container, CssBaseline, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/Header'
import AppRouter from './AppRouter'
import BackgroundImage from './img/space.jpg'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    background: 'url(' + BackgroundImage + ') no-repeat center center fixed',
    backgroundSize: 'cover'
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <PayPalScriptProvider options={{ 'client-id': 'AYstNA3V-_h96Kvfgbt1IB4tT9gjLlQQatgk006mzioIIw8ZtrywTu6MTNeC-7FwsvutvDtkELh8L-SW' }}>
      <div className={classes.root}>
        <Router>
          <CssBaseline/>
          <Header/>
          <Container>
            <AppRouter/>
          </Container>
        </Router>
      </div>
    </PayPalScriptProvider>
  )
}

export default App
