import React, { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import { RouterProvider } from 'react-router'
import Home from './views/home/Home'
import Contact from './views/contact/Contact'
import MelKropy from './views/melKropy/MelKropy'
import Auteurs from './views/auteurs/Auteurs'
import Liens from './views/liens/Liens'
import Livres from './views/livres/Livres'
import Projets from './views/projets/Projets'
import Propos from './views/propos/Propos'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/melkropy',
        element: <MelKropy />
      },
      {
        path: '/livres',
        element: <Livres />
      },
      {
        path: '/auteurs',
        element: <Auteurs />
      },
      {
        path: '/projets',
        element: <Projets />
      },
      {
        path: '/liens',
        element: <Liens />
      },
      {
        path: '/propos',
        element: <Propos />
      }
    ]
  }

], { basename: process.env.REACT_APP_ROOT_URL })

root.render(<StrictMode><RouterProvider router={router} /></StrictMode>)
