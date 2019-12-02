import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Contact from './contact/Contact'
import Livres from './livres/Livres'
import Offrir from './offrir/Offrir'
import Auteurs from './auteurs/Auteurs'
import Projets from './projets/Projets'
import Liens from './liens/Liens'
import Propos from './propos/Propos'

export const AppRouter = () => {
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
