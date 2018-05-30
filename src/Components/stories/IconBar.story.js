import React from 'react'
import { storiesOf } from '@storybook/react'
import IconBar from '../IconBar'
import { BrowserRouter } from 'react-router-dom'

storiesOf('IconBar', module).add('default', () => (
  <BrowserRouter>
    <IconBar />
  </BrowserRouter>
))
