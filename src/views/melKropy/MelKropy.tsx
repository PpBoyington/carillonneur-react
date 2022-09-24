import React from 'react'
import { Grid } from '@mui/material'
import melKropyMenu from '../../img/rollup_mathieu_page-0001.jpg'
import melKropyVisuel from '../../img/Visuel_Mug-Mel_&_Kropy.jpg'
import melBioExpression from '../../img/mel_bio_expression.PNG'
import kropyBioExpression from '../../img/kropy_bio_expression.PNG'
import krikKrakBioExpression from '../../img/krik_krak_bio_expression.PNG'
import jeanLoupBioExpression from '../../img/jean_loup_bio_expression.PNG'
import ardinjBioExpression from '../../img/ardinj_bio_expression.PNG'
import djinnoBioExpression from '../../img/djinno_bio_expression.PNG'
import lorelaBioExpression from '../../img/lorela_bio_expression.PNG'

const MelKropy = (): JSX.Element => {
  return (
      <Grid container spacing={3}>
        <Grid container item spacing={2}xs={12}>
          <Grid item xs={2}>
            <img src={melKropyMenu} style={{ width: '100%', filter: 'drop-shadow( 15px 11px 4px #2C3532)' }} alt="test" />
          </Grid>
          <Grid item xs={10}>
            <Grid item style={{ textAlign: 'center' }}xs>
              <img src={melKropyVisuel} style={{ width: '25%', paddingLeft: 'drop-shadow( 15px 11px 4px #2C3532)' }} alt="test" />
            </Grid>
            <Grid container spacing={3} style={{ textAlign: 'center', marginTop: '10px' }}>
              <Grid item xs={2}>
                <img src={melBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={kropyBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={krikKrakBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={jeanLoupBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={ardinjBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={djinnoBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={lorelaBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={lorelaBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={lorelaBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={lorelaBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={djinnoBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={lorelaBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={lorelaBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>
              <Grid item xs={2}>
                <img src={lorelaBioExpression} style={{ width: '125px' }}alt="test" />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default MelKropy
