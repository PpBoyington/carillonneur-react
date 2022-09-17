import React from 'react'
import { Container, CssBaseline, makeStyles, useScrollTrigger } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/Header'
import AppRouter from './AppRouter'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import Footer from './layouts/footer/Footer'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#DCDCDC',
    backgroundSize: 'cover',
    paddingTop: '90px'
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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PayPalScriptProvider options={{ 'client-id': 'AYstNA3V-_h96Kvfgbt1IB4tT9gjLlQQatgk006mzioIIw8ZtrywTu6MTNeC-7FwsvutvDtkELh8L-SW' }}>
      <div className={classes.root}>
        <Router basename={process.env.REACT_APP_ROOT_URL}>
          <CssBaseline/>
          <Header/>
          <Container style={{ paddingTop: '25px' }}>
            <AppRouter/>
          </Container>
          <Zoom in={trigger}>
            <Fab color="secondary" size="small" aria-label="scroll back to top" onClick={handleClick} role="presentation" className={classes.scrollUp}>
              <KeyboardArrowUpIcon />
            </Fab>
          </Zoom>
          <Footer/>
        </Router>
      </div>
    </PayPalScriptProvider>
  )
}

export default App
