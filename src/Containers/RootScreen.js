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
  ExperienceCard
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
              <div style={styles.sectionTitle}>
                <SectionTitle title='About' />
              </div>
              <div style={styles.section}>
                <Footer />
              </div>
              <div style={styles.sectionTitle}>
                <SectionTitle title='Experience' />
              </div>
              <div style={styles.section}>
                <div style={{ marginBottom: 10 }}>
                  <ExperienceCard />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <ExperienceCard />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <ExperienceCard />
                </div>
              </div>
            </Grid>
          </div>
          <Grid container>
            <Grid item xs />
            <Grid item xs={12}>
              <div style={styles.sectionTitle}>
                <SectionTitle title='Technical Skills' />
              </div>
              <Skills />
              <div style={styles.sectionTitle}>
                <SectionTitle title='Education' />
              </div>
              <Education />
              <div style={styles.sectionTitle}>
                <SectionTitle title='Interests' />
              </div>
              <Interests />
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
