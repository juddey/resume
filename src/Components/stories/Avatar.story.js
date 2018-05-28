import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from '../Avatar'

storiesOf('Avatar').add('default', () => (
  <Avatar onClick={console.log('tester')} />
))
