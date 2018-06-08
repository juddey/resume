import React from 'react'
import {
  Avatar,
  Footer,
  Education,
  IconBar,
  Interests,
  ResumeTitle,
  SectionTitle,
  Skills,
  Timeline
} from '../Components'
import { Grid } from '@material-ui/core'
import styles from './Styles/RootScreenStyle'

function RootScreen () {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs />
        <Grid item xs={12} md={10} lg={6}>
          <div style={styles.heading}>
            <Avatar />
            <ResumeTitle />
            <IconBar />
          </div>
          <div style={styles.section}>
            <Grid item xs />
            <Grid item xs={12}>
              <Footer />
              <div style={styles.section}>
                <SectionTitle title='Experience' />
              </div>
              <div style={styles.section}>
                <Timeline />
              </div>
            </Grid>
          </div>
          <Grid container>
            <Grid item xs />
            <Grid item xs={10}>
              <div style={styles.section}>
                <SectionTitle title='Technical Skills' />
              </div>
              <Skills />
              <div style={styles.section}>
                <SectionTitle title='Education' />
              </div>
              <Education />
              <div style={styles.section}>
                <SectionTitle title='Interests' />
                <Interests />
              </div>
            </Grid>
            <Grid item xs />
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  )
}

export default RootScreen
