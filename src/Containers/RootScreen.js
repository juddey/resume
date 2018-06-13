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
import { Grid, Typography } from '@material-ui/core'
import styles from './Styles/RootScreenStyle'
import ExperienceData from '../data/Experience'

function RootScreen () {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs />
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <div style={styles.heading}>
            <div style={{ display: 'flex', marginBottom: '5px' }}>
              <Avatar />
              <div style={{ marginLeft: 10 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ResumeTitle />
                <Typography> Software Developer </Typography>
              </div>
            </div>
            <div
              style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}
            >
              <IconBar />
            </div>
          </div>
          <div style={styles.section}>
            <Grid item xs />
            <Grid item xs={12}>
              <div style={styles.section}>
                <Footer />
              </div>
              <div style={styles.sectionTitle}>
                <SectionTitle title='Experience' />
              </div>
              <div style={styles.section}>
                {ExperienceData.map((data, i) => (
                  <div style={{ marginBottom: 10 }}>
                    <ExperienceCard
                      headerLeftText={data.position}
                      headerRightText={data.duration}
                      cardText={data.cardText}
                      chips={data.chips}
                      avatarImage={data.avatarImage}
                    />
                  </div>
                ))}
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
