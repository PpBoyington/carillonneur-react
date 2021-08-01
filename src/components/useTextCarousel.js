import { useCallback, useState } from 'react'

const useTextCarousel = () => {
  const [open, setOpen] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)

  const timer = 500
  const animation = 'slide'
  const navButtonsAlwaysVisible = true

  const items = [
    {
      desc: 'Logée entre deux collines, tout en bas, Bordant un chemin de cailloux sinueux...',
      name: 'Le Marchand de Bonheurs',
      text: 'Logée entre deux collines, tout en bas,' +
            'Bordant un chemin de cailloux sinueux,' +
            'Se tient une baraque coiffée d’ardoise en toit ;' +
            'Au-devant, se dresse une silhouette aux traits poussiéreux.' +
            '« Voyageur : approchez ! Écoutez un peu...' +
            'J’entends dire : le Bonheur ne s’achète pas ;' +
            'Je réponds : ne parle-t-on pas plutôt là du Malheur ?' +
            'Le Bonheur, c’est très simple, il se tient entre les doigts.' +
            'Je suis le Marchand de Bonheurs, j’en vends à toute heure.' +
            'Je lis dans vos regards, vous doutez de cela.' +
            'Approchez, je vais vous montrer mes précieux bâtonnets.' +
            'Je les ai juste ici, dans mon vieux coffre en bois.' +
            'Pour les moins persuadés, j’ai même de colorées fusées.' +
            'Vous n’êtes pas habitués, voyez ce que mon échoppe a de mieux :' +
            'Voici toute une panoplie de mes plus beaux artefacts,' +
            'Un rapide et court Bonheur ? Je conseille cette fine baguette étincelles,' +
            'Je l’allume et sous de brillantes gerbes, je me sens câliné dans de doux' +
            'bras.' +
            'Elle se consume vite, trop peut-être, mais j’en ai d’autres aussi belles.' +
            'Prenez cette longue paille à bulles frémissantes,' +
            'Tenez-la fermement, elle glisse bien des fois ;' +
            'Soufflez-y avec force, il en sort des comètes savonnantes.' +
            'Percez-les de vos doigts, sentez ces odeurs chatouillant l’odorat !' +
            'Annonçant les Bonheurs des jours à venir,' +
            'Voyez ce lampion floriforme, il éteint le noir, éloigne le froid.' +
            'Et ceux en recherche de Bonheurs créant d’émouvants souvenirs,' +
            'Trouveront en cette mèche à ballon explosif le bon choix.' +
            'Ces bonheurs, ces artifices ont un prix.' +
            'A vous de découvrir comment se les offrir…' +
            'Avant de poursuivre votre route, je vous remets cette curieuse clé.' +
            'Aucune serrure pour elle n’est façonnée, elle n’a qu’un intérêt,' +
            'Tourner cette page. Il est temps d’avancer dans votre voyage »'
    },
    {
      desc: 'Ni le froid, ni la glace, Ne gèlent son élan...',
      name: 'Froid et glace',
      text: 'Logée entre deux collines, tout en bas,' +
            'Bordant un chemin de cailloux sinueux,' +
            'Se tient une baraque coiffée d’ardoise en toit ;' +
            'Au-devant, se dresse une silhouette aux traits poussiéreux.' +
            '« Voyageur : approchez ! Écoutez un peu...' +
            'J’entends dire : le Bonheur ne s’achète pas ;' +
            'Je réponds : ne parle-t-on pas plutôt là du Malheur ?' +
            'Le Bonheur, c’est très simple, il se tient entre les doigts.' +
            'Je suis le Marchand de Bonheurs, j’en vends à toute heure.' +
            'Je lis dans vos regards, vous doutez de cela.' +
            'Approchez, je vais vous montrer mes précieux bâtonnets.' +
            'Je les ai juste ici, dans mon vieux coffre en bois.' +
            'Pour les moins persuadés, j’ai même de colorées fusées.' +
            'Vous n’êtes pas habitués, voyez ce que mon échoppe a de mieux :' +
            'Voici toute une panoplie de mes plus beaux artefacts,' +
            'Un rapide et court Bonheur ? Je conseille cette fine baguette étincelles,' +
            'Je l’allume et sous de brillantes gerbes, je me sens câliné dans de doux' +
            'bras.' +
            'Elle se consume vite, trop peut-être, mais j’en ai d’autres aussi belles.' +
            'Prenez cette longue paille à bulles frémissantes,' +
            'Tenez-la fermement, elle glisse bien des fois ;' +
            'Soufflez-y avec force, il en sort des comètes savonnantes.' +
            'Percez-les de vos doigts, sentez ces odeurs chatouillant l’odorat !' +
            'Annonçant les Bonheurs des jours à venir,' +
            'Voyez ce lampion floriforme, il éteint le noir, éloigne le froid.' +
            'Et ceux en recherche de Bonheurs créant d’émouvants souvenirs,' +
            'Trouveront en cette mèche à ballon explosif le bon choix.' +
            'Ces bonheurs, ces artifices ont un prix.' +
            'A vous de découvrir comment se les offrir…' +
            'Avant de poursuivre votre route, je vous remets cette curieuse clé.' +
            'Aucune serrure pour elle n’est façonnée, elle n’a qu’un intérêt,' +
            'Tourner cette page. Il est temps d’avancer dans votre voyage »'
    },
    {
      desc: 'Dans un délice tout entier retrouvé, La pointe pâtissière se met à croustiller...',
      name: 'Jardin d\'hiver',
      text: 'Logée entre deux collines, tout en bas,' +
            'Bordant un chemin de cailloux sinueux,' +
            'Se tient une baraque coiffée d’ardoise en toit ;' +
            'Au-devant, se dresse une silhouette aux traits poussiéreux.' +
            '« Voyageur : approchez ! Écoutez un peu...' +
            'J’entends dire : le Bonheur ne s’achète pas ;' +
            'Je réponds : ne parle-t-on pas plutôt là du Malheur ?' +
            'Le Bonheur, c’est très simple, il se tient entre les doigts.' +
            'Je suis le Marchand de Bonheurs, j’en vends à toute heure.' +
            'Je lis dans vos regards, vous doutez de cela.' +
            'Approchez, je vais vous montrer mes précieux bâtonnets.' +
            'Je les ai juste ici, dans mon vieux coffre en bois.' +
            'Pour les moins persuadés, j’ai même de colorées fusées.' +
            'Vous n’êtes pas habitués, voyez ce que mon échoppe a de mieux :' +
            'Voici toute une panoplie de mes plus beaux artefacts,' +
            'Un rapide et court Bonheur ? Je conseille cette fine baguette étincelles,' +
            'Je l’allume et sous de brillantes gerbes, je me sens câliné dans de doux' +
            'bras.' +
            'Elle se consume vite, trop peut-être, mais j’en ai d’autres aussi belles.' +
            'Prenez cette longue paille à bulles frémissantes,' +
            'Tenez-la fermement, elle glisse bien des fois ;' +
            'Soufflez-y avec force, il en sort des comètes savonnantes.' +
            'Percez-les de vos doigts, sentez ces odeurs chatouillant l’odorat !' +
            'Annonçant les Bonheurs des jours à venir,' +
            'Voyez ce lampion floriforme, il éteint le noir, éloigne le froid.' +
            'Et ceux en recherche de Bonheurs créant d’émouvants souvenirs,' +
            'Trouveront en cette mèche à ballon explosif le bon choix.' +
            'Ces bonheurs, ces artifices ont un prix.' +
            'A vous de découvrir comment se les offrir…' +
            'Avant de poursuivre votre route, je vous remets cette curieuse clé.' +
            'Aucune serrure pour elle n’est façonnée, elle n’a qu’un intérêt,' +
            'Tourner cette page. Il est temps d’avancer dans votre voyage »'
    },
    {
      desc: 'Du noir au rose, la palette se compose, Couleurs et peaux s’assemblent, se mélangent ensemble...',
      name: 'Couleur de cœurs',
      text: 'Logée entre deux collines, tout en bas,' +
            'Bordant un chemin de cailloux sinueux,' +
            'Se tient une baraque coiffée d’ardoise en toit ;' +
            'Au-devant, se dresse une silhouette aux traits poussiéreux.' +
            '« Voyageur : approchez ! Écoutez un peu...' +
            'J’entends dire : le Bonheur ne s’achète pas ;' +
            'Je réponds : ne parle-t-on pas plutôt là du Malheur ?' +
            'Le Bonheur, c’est très simple, il se tient entre les doigts.' +
            'Je suis le Marchand de Bonheurs, j’en vends à toute heure.' +
            'Je lis dans vos regards, vous doutez de cela.' +
            'Approchez, je vais vous montrer mes précieux bâtonnets.' +
            'Je les ai juste ici, dans mon vieux coffre en bois.' +
            'Pour les moins persuadés, j’ai même de colorées fusées.' +
            'Vous n’êtes pas habitués, voyez ce que mon échoppe a de mieux :' +
            'Voici toute une panoplie de mes plus beaux artefacts,' +
            'Un rapide et court Bonheur ? Je conseille cette fine baguette étincelles,' +
            'Je l’allume et sous de brillantes gerbes, je me sens câliné dans de doux' +
            'bras.' +
            'Elle se consume vite, trop peut-être, mais j’en ai d’autres aussi belles.' +
            'Prenez cette longue paille à bulles frémissantes,' +
            'Tenez-la fermement, elle glisse bien des fois ;' +
            'Soufflez-y avec force, il en sort des comètes savonnantes.' +
            'Percez-les de vos doigts, sentez ces odeurs chatouillant l’odorat !' +
            'Annonçant les Bonheurs des jours à venir,' +
            'Voyez ce lampion floriforme, il éteint le noir, éloigne le froid.' +
            'Et ceux en recherche de Bonheurs créant d’émouvants souvenirs,' +
            'Trouveront en cette mèche à ballon explosif le bon choix.' +
            'Ces bonheurs, ces artifices ont un prix.' +
            'A vous de découvrir comment se les offrir…' +
            'Avant de poursuivre votre route, je vous remets cette curieuse clé.' +
            'Aucune serrure pour elle n’est façonnée, elle n’a qu’un intérêt,' +
            'Tourner cette page. Il est temps d’avancer dans votre voyage »'
    }
  ]

  const handleClickOpen = useCallback(() => {
    setOpen(true)
    setAutoPlay(false)
  }, [setAutoPlay])

  const handleClose = useCallback(() => {
    setOpen(false)
    setAutoPlay(true)
  }, [setAutoPlay])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  return {
    handleClickOpen,
    handleClose,
    handlePrint,
    open,
    items,
    autoPlay,
    setAutoPlay,
    timer,
    animation,
    navButtonsAlwaysVisible
  }
}

export default useTextCarousel
