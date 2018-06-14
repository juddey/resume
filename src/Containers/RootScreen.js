import React from 'react'
import {
  Avatar,
  Footer,
  IconBar,
  Interests,
  ResumeTitle,
  SectionTitle,
  Skills,
  ExperienceCard
} from '../Components'
import { Hidden, Grid, Typography } from '@material-ui/core'
import styles from './Styles/RootScreenStyle'
import ExperienceData from '../data/Experience'

function RootScreen () {
  return (
    <div>
      <Grid container>
        <Hidden only='xs'>
          <Grid item sm md={2} lg={3} xl={4} />
        </Hidden>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <div style={styles.heading}>
            <Avatar />
            <div style={{ marginBottom: 10 }} />
            <ResumeTitle />
            <Typography> Software Developer </Typography>
            <div style={{ marginBottom: 10 }} />
            <IconBar />
            <div style={{ marginBottom: 50 }} />
          </div>
          {/* Section Start */}
          <Grid container>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <div style={styles.sectionTitle}>
                <SectionTitle title='About' />
              </div>
              <Footer />
            </Grid>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
          </Grid>
          <div style={styles.line} />
          {/* Section End */}

          <Grid container>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <div style={styles.sectionTitle}>
                <SectionTitle title='Experience' />
              </div>
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
            </Grid>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
          </Grid>
          <div style={styles.line} />
          {/* Section Start */}
          <Grid container>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <div style={styles.sectionTitle}>
                <SectionTitle title='Skills' />
              </div>
              <Skills />
            </Grid>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
          </Grid>
          <div style={styles.line} />
          {/* Section End */}
          <Grid container>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <div style={styles.sectionTitle}>
                <SectionTitle title='Interests' />
              </div>
              <Interests />
            </Grid>
            <Hidden only='xs'>
              <Grid item sm={1} md={1} lg={1} xl={1} />
            </Hidden>
          </Grid>
          <div style={styles.line} />
        </Grid>
      </Grid>
      <Hidden only='xs'>
        <Grid item sm md={2} lg={3} xl={4} />
      </Hidden>
    </div>
  )
}

export default RootScreen
