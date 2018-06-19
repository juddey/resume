import React from 'react'
import { storiesOf } from '@storybook/react'
import PositionTitle from '../PositionTitle'

storiesOf('Position Title').add('default', () => (
  <div style={{ backgroundColor: 'black' }}>
    <PositionTitle />
  </div>
))
