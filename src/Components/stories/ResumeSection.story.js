import React from 'react'
import { storiesOf } from '@storybook/react'
// I know, container, storybook, meant to be dumb component.... lalala - not listening! ;)
import ResumeSection from '../../Containers/ResumeSection'
import {
  Avatar,
  About,
  Skills,
  Interests,
  SectionTitle,
  ExperienceCard
} from '../../Components'
import ExperienceData from '../../data/Experience'
import { Colors } from '../../Themes'

storiesOf('Resume Section', module)
  .add('Interests', () => (
    <ResumeSection
      title={<SectionTitle title='Interests' color='white' />}
      section={<Interests />}
    />
  ))
  .add('Skills', () => (
    <ResumeSection
      title={<SectionTitle title='Skills' />}
      section={<Skills />}
      backgroundColor={Colors.white}
    />
  ))
  .add('Experience', () => (
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
  ))
  .add('About', () => (
    <ResumeSection
      title={<Avatar />}
      section={<About />}
      backgroundColor={Colors.white}
      gridSpread={[10, 10, 8, 6, 4]}
      middleGrid={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
      }}
    />
  ))
