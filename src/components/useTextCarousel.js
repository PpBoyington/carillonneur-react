import { useCallback, useState } from 'react'

const useTextCarousel = () => {
  const [open, setOpen] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)

  const timer = 500
  const animation = 'slide'
  const navButtonsAlwaysVisible = true

  const items = [
    {
      desc: 'Logée entre deux collines, tout en bas...',
      name: 'Le Marchand de Bonheurs',
      text: `Logée entre deux collines, tout en bas,
Bordant un chemin de cailloux sinueux,
Se tient une baraque coiffée d’ardoise en toit ;
Au-devant, se dresse une silhouette aux traits poussiéreux.
« Voyageur : approchez ! Écoutez un peu...
J’entends dire : le Bonheur ne s’achète pas ;
Je réponds : ne parle-t-on pas plutôt là du Malheur ?
Le Bonheur, c’est très simple, il se tient entre les doigts.
Je suis le Marchand de Bonheurs, j’en vends à toute heure.
Je lis dans vos regards, vous doutez de cela.
Approchez, je vais vous montrer mes précieux bâtonnets.
Je les ai juste ici, dans mon vieux coffre en bois.
Pour les moins persuadés, j’ai même de colorées fusées.
Vous n’êtes pas habitués, voyez ce que mon échoppe a de mieux :
Voici toute une panoplie de mes plus beaux artefacts,
Un rapide et court Bonheur ? Je conseille cette fine baguette étincelles,
Je l’allume et sous de brillantes gerbes, je me sens câliné dans de doux
bras.
Elle se consume vite, trop peut-être, mais j’en ai d’autres aussi belles.
Prenez cette longue paille à bulles frémissantes,
Tenez-la fermement, elle glisse bien des fois ;
Soufflez-y avec force, il en sort des comètes savonnantes.

Percez-les de vos doigts, sentez ces odeurs chatouillant l’odorat !
Annonçant les Bonheurs des jours à venir,
Voyez ce lampion floriforme, il éteint le noir, éloigne le froid.
Et ceux en recherche de Bonheurs créant d’émouvants souvenirs,
Trouveront en cette mèche à ballon explosif le bon choix.
Ces bonheurs, ces artifices ont un prix.
A vous de découvrir comment se les offrir...
Avant de poursuivre votre route, je vous remets cette curieuse clé.
Aucune serrure pour elle n’est façonnée, elle n’a qu’un intérêt,
Tourner cette page. Il est temps d’avancer dans votre voyage ».`
    },
    {
      desc: 'Ni le froid, ni la glace, ne gèlent son élan...',
      name: 'Froid et glace',
      text: `Ni le froid, ni la glace,
Ne gèlent son élan.
Ses yeux remplis d'audace,
Fondent sous le firmament.
Tout le froid, toute la glace,
N'arrêtent aucun pas ardents.
Vers ce foyer fugace,
S'évadent tous les errants.
C'est le froid, c'est la glace,
Qui mènent à sa porte, en son temps.
Au refuge, le givre devient rosaces,
Et les pensées vagabondes se posent finalement.`
    },
    {
      desc: 'Dans un délice tout entier retrouvé, la pointe pâtissière se met à croustiller...',
      name: 'Jardin d\'hiver',
      text: `Dans un délice tout entier retrouvé,
La pointe pâtissière se met à croustiller.
Et je n'en suis qu'à la première bouchée !
Pour la suite, je voudrai m'entretenir avec cette part en aparté.
Une ambition royale me chatouille le nez,
Vers la précieuse graine mes pensées sont tournées.
Arborant un feuillage caduc aux reflets dorés,
L'arrondi potager distille un doux parfum beurré.
Savoureusement, il a pris soin de le cultiver.
Le froid au-dehors, ne gâche pas son envie de jardiner.
Mais où, dans ce crémeux terreau il l'a astucieusement déposée ?
Le Planteur de Fèves garde ce jardin secret.`
    },
    {
      desc: 'Du noir au rose, la palette se compose, couleurs et peaux s’assemblent, se mélangent ensemble...',
      name: 'Couleur de cœurs',
      text: `Du noir au rose, la palette se compose,
Couleurs et peaux s’assemblent, se mélangent ensemble,
Le pinceau de la vie peint sans répit.
Du clair au sombre, entre lumières et ombres,
Les couleurs jaillissent, aux yeux de tous resplendissent ;
Le pinceau de la vie a tant de coloris !
De l’ocre au blanc, foisonnent les pigments,
Une couleur pour chacun, c’est la mosaïque du destin ;
Le pinceau de l’envie ne peint ni ne se repli.
Ma couleur est de cœur, celle d’amour et de joie,
Ta couleur vient du cœur, tout comme moi.`
    }, {
      desc: 'Qu\'un lampion s\'illumine, et les ombres se mettent à danser....',
      name: 'Lueurs du soir',
      text: `Qu'un lampion s'illumine,
Et les ombres se mettent à danser.
Elles ne s'embarrassent pas, ni ne ruminent,
Elles célèbrent le simple fait d'exister.
Qu'un lampion s'éveille,
Et les sourires se mettent à briller.
Ils propagent leurs flammes à merveille,
Ils inondent ceux qui s'en sont approchés.
Qu'un lampion s'éteigne,
Et tous accourent pour le raviver.
Posés à bout de cannes, tous peignent,
Les accordéons de lumière consument l'obscurité.`
    }, {
      desc: 'Aujourd’hui je vais jouer à être un autre, de l’aube au crépuscule je peux me transformer....',
      name: 'Carnaval passe',
      text: `Aujourd’hui je vais jouer à être un autre,
De l’aube au crépuscule je peux me transformer ;
Masqué, grimé, costumé, me voilà prêt,
Avec mes amis nous ferons ce jour nôtre.
Visages barbouillés, tissus colorés,
La procession avance dans les rues amusées.
Il y a une abeille, une princesse, un vieux sage,
Les voix sont fortes, résonnent à notre passage ;
On mime à en crier des tirades,
Le rôle de chacun est habité dans cette balade.
Un bouffon grelotté course un justicier capé
Au milieu de confettis qui à tout va sont jetés.
Dans cette joyeuse confusion,
Lentement, le cortège perd des compagnons :
Bientôt va débuter la suite des festivités.
Chocolat chaud, crêpes tièdes sucrées,
Devant ce goûter plus question d’être magnanime.
Couleurs et saveurs se consomment hélas,
Le rêve touche à sa fin, tout se termine,
Emportant folies et simagrées, Carnaval passe.`
    }, {
      desc: 'Clip Clap, Clip Clap, hé Chut...',
      name: 'Chuuut !',
      text: `Clip Clap, Clip Clap, Hé Chut.
Clip... Clap... Hé Ho Chuuut !
Splash Sploush, Splash Sploush, Pchut !
Splash ? Chut. Sploush ? Chut, Chut, Chut !
Pfff...
Crouik Crak, Crouik... Grrr Chut !
Chut ? Mmm Mmm ! Chut !
Clip: Chut, Splash: Chut, Crouik: Chut...
Tic-Tac, Tic-Tac, Boum ?
Tic-Tac, Tic-Tac, Ron Pshh... Dring !
Aaah ! Ron Pshh, Chuuut !!!...
Ron, Tic, Pshh, Tac, Tic, Chuuut !!! Oups !
Chuuut... Ron Pshh, Ron, Ron, Pshh, Pshh...`
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
