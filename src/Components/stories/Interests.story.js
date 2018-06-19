import React from 'react'
import { storiesOf } from '@storybook/react'
import Interests from '../Interests'
import { Colors } from '../../Themes'

storiesOf('Interests', module).add('default', () => (
  <div style={{ backgroundColor: Colors.background }}>
    <Interests />
  </div>
))
