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
import LesPillys from '../img/les_pillys_3.jpg'
import RecherchesBocal from '../img/recherches_bocal.png'
import JangDraach from '../img/RECHERCHES_JANG_DRAACH.png'

const mainFeaturedPost = [{
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: LesPillys,
  imgText: 'main image description',
  linkText: 'Continue reading…'
},
{
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: RecherchesBocal,
  imgText: 'main image description',
  linkText: 'Continue reading…'
},
{
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: JangDraach,
  imgText: 'main image description',
  linkText: 'Continue reading…'
}]

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} post={mainFeaturedPost} />} />
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
