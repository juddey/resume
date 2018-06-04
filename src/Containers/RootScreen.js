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

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

function RootScreen () {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs />
        <Grid item xs={12} md={10} lg={6}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottom: '1px solid black',
              marginBottom: '5px'
            }}
          >
            <Avatar />
            <ResumeTitle />
            <IconBar />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottom: '1px solid black',
              marginBottom: '5px'
            }}
          >
            <Grid item xs />
            <Grid item xs={12}>
              <Footer />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5px',
                  marginTop: '5px'
                }}
              >
                <SectionTitle title='Experience' />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
              >
                <Timeline />
              </div>
            </Grid>
          </div>
          <Grid container>
            <Grid item xs />
            <Grid item xs={10}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
              >
                <SectionTitle title='Technical Skills' />
              </div>
              <Skills />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
              >
                <SectionTitle title='Education' />
              </div>
              <Education />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5px'
                }}
              >
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
