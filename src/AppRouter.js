import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/home/Home'
import Contact from './views/contact/Contact'
import Livres from './views/livres/Livres'
import Offrir from './views/offrir/Offrir'
import Auteurs from './views/auteurs/Auteurs'
import Projets from './views/projets/Projets'
import Liens from './views/liens/Liens'
import Propos from './views/propos/Propos'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/offrir" component={Offrir} />
      <Route exact path="/livres" component={Livres} />
      <Route exact path="/auteurs" component={Auteurs} />
      <Route exact path="/projets" component={Projets} />
      <Route exact path="/liens" component={Liens} />
      <Route exact path="/propos" component={Propos} />
    </Switch>
  )
}

export default AppRouter
