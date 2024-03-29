import React from 'react'
import { Container, useScrollTrigger, createTheme, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/Header'
// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Zoom from '@mui/material/Zoom'
import Footer from './layouts/footer/Footer'

const App = (): JSX.Element => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Pacifico',
        'cursive'
      ].join(',')
    }
  })

  return (
    /* <PayPalScriptProvider options={{ 'client-id': 'AYstNA3V-_h96Kvfgbt1IB4tT9gjLlQQatgk006mzioIIw8ZtrywTu6MTNeC-7FwsvutvDtkELh8L-SW' }}> */
    <ThemeProvider theme={theme}>
      <Header/>
      <Container>
        {/* <PayPalButtons /> */}
        <Outlet />
      </Container>
      <Zoom in={trigger}>
        <Fab color="secondary" size="small" aria-label="scroll back to top" onClick={handleClick} role="presentation" sx={{
          right: 16,
          bottom: 16,
          position: 'fixed'
        }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
      <Footer/>
      </ThemeProvider>
  /* </PayPalScriptProvider> */
  )
}

export default App
