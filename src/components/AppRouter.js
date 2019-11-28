import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Contact from './contact/Contact'

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  )
}
