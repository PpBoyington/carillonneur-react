import React from 'react'
import Grid from '@material-ui/core/Grid'
import BookCarousel from '../../components/BookCarousel'
import TextCarousel from '../../components/TextCarousel'
import { Card, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  carousel: {
    marginTop: 50
  }
}))

const Home = () => {
  const classes = useStyles()
  return <Grid container>
    <Grid item xs={12} className={classes.carousel}>
      <BookCarousel/>
    </Grid>
    <Grid container item justify="center">
      <Grid item xs={6} className={classes.carousel}>
        <>
          <Typography variant="h3">
            Sur la route de Caranusca
          </Typography>
          <TextCarousel/>
        </>
      </Grid>
    </Grid>
    <Grid item xs={12} className={classes.carousel}>
      <Card >
        The subreddit, describing itself through the tagline "Like 4chan found a Bloomberg terminal",[3] is known for its aggressive trading strategies, which primarily revolve around highly speculative, leveraged options trading. Members of the subreddit are often young retail traders and investors who ignore fundamental investment practices and risk management techniques, so their activity is considered gambling. The growing popularity of no-commission brokers and mobile online trading has potentially contributed to the growth of such trading trends. Members of the communities often see high-risk day trading as an opportunity to quickly improve their financial conditions and obtain additional income. Some of the members tend to use borrowed capital, like student loans, to bet on certain "meme stocks" that show popularity within the community.[1][4][5][6][7]

The subreddit is also known for its profane and juvenile nature, with members often referring to themselves as "autists", "retards", and "degenerates".[6][8] Users also frequently use slang such as "stonks" for stocks; "tendies" for gains or profits; "gay bears" for those who expect a stock to decline, for stock shorters, or as a general insult; "DD" for analysis of potential trades (from "due diligence"); "bagholder" for one whose position has severely dropped in value; "diamond hands" for holding stocks adamantly; and "paper hands" for selling too early

        The subreddit, describing itself through the tagline "Like 4chan found a Bloomberg terminal",[3] is known for its aggressive trading strategies, which primarily revolve around highly speculative, leveraged options trading. Members of the subreddit are often young retail traders and investors who ignore fundamental investment practices and risk management techniques, so their activity is considered gambling. The growing popularity of no-commission brokers and mobile online trading has potentially contributed to the growth of such trading trends. Members of the communities often see high-risk day trading as an opportunity to quickly improve their financial conditions and obtain additional income. Some of the members tend to use borrowed capital, like student loans, to bet on certain "meme stocks" that show popularity within the community.[1][4][5][6][7]

The subreddit is also known for its profane and juvenile nature, with members often referring to themselves as "autists", "retards", and "degenerates".[6][8] Users also frequently use slang such as "stonks" for stocks; "tendies" for gains or profits; "gay bears" for those who expect a stock to decline, for stock shorters, or as a general insult; "DD" for analysis of potential trades (from "due diligence"); "bagholder" for one whose position has severely dropped in value; "diamond hands" for holding stocks adamantly; and "paper hands" for selling too early

        The subreddit, describing itself through the tagline "Like 4chan found a Bloomberg terminal",[3] is known for its aggressive trading strategies, which primarily revolve around highly speculative, leveraged options trading. Members of the subreddit are often young retail traders and investors who ignore fundamental investment practices and risk management techniques, so their activity is considered gambling. The growing popularity of no-commission brokers and mobile online trading has potentially contributed to the growth of such trading trends. Members of the communities often see high-risk day trading as an opportunity to quickly improve their financial conditions and obtain additional income. Some of the members tend to use borrowed capital, like student loans, to bet on certain "meme stocks" that show popularity within the community.[1][4][5][6][7]

The subreddit is also known for its profane and juvenile nature, with members often referring to themselves as "autists", "retards", and "degenerates".[6][8] Users also frequently use slang such as "stonks" for stocks; "tendies" for gains or profits; "gay bears" for those who expect a stock to decline, for stock shorters, or as a general insult; "DD" for analysis of potential trades (from "due diligence"); "bagholder" for one whose position has severely dropped in value; "diamond hands" for holding stocks adamantly; and "paper hands" for selling too early
        The subreddit, describing itself through the tagline "Like 4chan found a Bloomberg terminal",[3] is known for its aggressive trading strategies, which primarily revolve around highly speculative, leveraged options trading. Members of the subreddit are often young retail traders and investors who ignore fundamental investment practices and risk management techniques, so their activity is considered gambling. The growing popularity of no-commission brokers and mobile online trading has potentially contributed to the growth of such trading trends. Members of the communities often see high-risk day trading as an opportunity to quickly improve their financial conditions and obtain additional income. Some of the members tend to use borrowed capital, like student loans, to bet on certain "meme stocks" that show popularity within the community.[1][4][5][6][7]

The subreddit is also known for its profane and juvenile nature, with members often referring to themselves as "autists", "retards", and "degenerates".[6][8] Users also frequently use slang such as "stonks" for stocks; "tendies" for gains or profits; "gay bears" for those who expect a stock to decline, for stock shorters, or as a general insult; "DD" for analysis of potential trades (from "due diligence"); "bagholder" for one whose position has severely dropped in value; "diamond hands" for holding stocks adamantly; and "paper hands" for selling too early
      </Card>
    </Grid>
  </Grid>
}

export default Home
