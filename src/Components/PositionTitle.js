import React from 'react'
import { Typography } from '@material-ui/core'
import { Colors } from '../Themes'

const PositionTitle = props => (
  <Typography
    variant='subheading'
    style={{
      letterSpacing: '1px',
      color: Colors.white,
      marginBottom: '10px'
    }}
  >
    software developer
  </Typography>
)

export default PositionTitle
