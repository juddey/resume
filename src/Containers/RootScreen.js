import React from 'react'
import {
  Avatar,
  About,
  IconBar,
  Interests,
  ResumeTitle,
  SectionTitle,
  Skills,
  ExperienceCard,
  PositionTitle
} from '../Components'
import { Grid } from '@material-ui/core'
import ExperienceData from '../data/Experience'
import { ResumeSection } from '../Containers'
import { Colors } from '../Themes'
import styles from './Styles/RootScreenStyle'

function RootScreen () {
  return (
    <div>
      <Grid container style={styles.container}>
        <div style={styles.heading}>
          <div style={styles.resumeTitleWrapper}>
            <ResumeTitle />
          </div>
          <PositionTitle />
          <IconBar />
        </div>
        <ResumeSection
          title={<Avatar />}
          section={<About />}
          backgroundColor={Colors.white}
          gridSpread={[10, 10, 8, 6, 4]}
          middleGrid={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '150px',
            paddingBottom: '150px'
          }}
        />
      </Grid>
      <ResumeSection
        title={<SectionTitle title='Experience' />}
        section={ExperienceData.map((data, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <ExperienceCard
              headerLeftText={data.position}
              headerRightText={data.duration}
              cardText={data.cardText}
              chips={data.chips}
              avatarImage={data.avatarImage}
            />
          </div>
        ))}
        backgroundColor={Colors.lightGray}
        gridSpread={[11, 10, 8, 6, 4]}
      />
      <ResumeSection
        title={<SectionTitle title='Skills' />}
        section={<Skills />}
        backgroundColor={Colors.white}
        middleGrid={{
          paddingTop: '100px',
          paddingBottom: '100px'
        }}
      />
      <ResumeSection
        title={<SectionTitle title='Interests' color='white' />}
        section={<Interests />}
      />
    </div>
  )
}

export default RootScreen
