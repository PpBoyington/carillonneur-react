import React from 'react'
import { Container, CssBaseline, makeStyles, useScrollTrigger } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/Header'
import AppRouter from './AppRouter'
import BackgroundImage from './img/space.jpg'
//  import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import Footer from './layouts/footer/Footer'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    background: 'url(' + BackgroundImage + ') no-repeat center center fixed',
    backgroundSize: 'cover'
  },
  scrollUp: {
    right: 16,
    bottom: 16,
    position: 'fixed'
  }
}))

const App = () => {
  const classes = useStyles()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    // <PayPalScriptProvider options={{ 'client-id': 'AYstNA3V-_h96Kvfgbt1IB4tT9gjLlQQatgk006mzioIIw8ZtrywTu6MTNeC-7FwsvutvDtkELh8L-SW' }}>
    <div className={classes.root}>
      <Router>
        <CssBaseline/>
        <Header/>
        <Container>
          <AppRouter/>
        </Container>
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.scrollUp}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </div>
        </Zoom>
        <Footer/>
      </Router>
    </div>
    // </PayPalScriptProvider>
  )
}

export default App
