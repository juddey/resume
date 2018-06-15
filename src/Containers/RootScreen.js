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

const background = '#012C4C'
const screenHeight = window.innerHeight

function RootScreen () {
  return (
    <div>
      <Grid container style={{ flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: background,
            height: screenHeight * 0.67,
            width: '100%'
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <ResumeTitle />
          </div>
          <Typography
            variant='subheading'
            style={{
              letterSpacing: '1px',
              color: 'white',
              marginBottom: '10px'
            }}
          >
            software developer
          </Typography>
          <IconBar />
        </div>
        {/* Section Start */}
        <Grid container justify='center'>
          <Hidden only='xs'>
            <Grid item />
          </Hidden>
          <Grid
            container
            xs={10}
            sm={10}
            md={8}
            lg={6}
            xl={4}
            alignItems='center'
            style={{ flexDirection: 'column' }}
          >
            <div style={{ paddingTop: 70, marginBottom: 10 }}>
              <Avatar />
            </div>
            <div style={{ paddingBottom: 70 }}>
              <Footer />
            </div>
          </Grid>
          <Hidden only='xs'>
            <Grid item />
          </Hidden>
        </Grid>
        {/* Section End */}
      </Grid>
      {/* Section Start */}
      <Grid container justify='center' style={{ backgroundColor: '#F8F8F8' }}>
        <Grid item xs />
        <Grid
          container
          xs={11}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            flexDirection: 'column'
          }}
        >
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
        <Grid item xs />
      </Grid>
      {/* Section End */}
      {/* Section Start */}
      <Grid container justify='center'>
        <Hidden only='xs'>
          <Grid item />
        </Hidden>
        <Grid
          container
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            flexDirection: 'column'
          }}
        >
          <div style={styles.sectionTitle}>
            <SectionTitle title='Skills' />
          </div>
          <Skills />
        </Grid>
        <Hidden only='xs'>
          <Grid item />
        </Hidden>
      </Grid>
      {/* Section End */}
      <Grid container justify='center'>
        <Hidden only='xs'>
          <Grid item />
        </Hidden>
        <Grid
          container
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          style={{
            backgroundColor: background,
            paddingTop: '20px',
            paddingBottom: '20px',
            flexDirection: 'column'
          }}
        >
          <div style={styles.sectionTitle}>
            <SectionTitle title='Interests' color='white' />
          </div>
          <Interests />
        </Grid>
        <Hidden only='xs'>
          <Grid item />
        </Hidden>
      </Grid>
      {/* Section End */}
    </div>
  )
}

export default RootScreen
