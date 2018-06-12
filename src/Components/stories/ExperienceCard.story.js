import React from 'react'
import { storiesOf } from '@storybook/react'
import ExperienceCard from '../ExperienceCard'
import ExperienceData from '../../data/Experience'

const data = ExperienceData[0]
console.log(data)

storiesOf('ExperienceCard')
  .add('with Sample Data', () => (
    <ExperienceCard
      headerLeftText={data.position}
      headerRightText={data.duration}
      cardText={data.cardText}
      chips={data.chips}
      avatarImage={data.avatarImage}
    />
  ))
  .add('default', () => <ExperienceCard />)
