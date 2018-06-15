import React from 'react'
import { Typography } from '@material-ui/core'

const SectionTitle = props => (
  <Typography
    variant='subheading'
    style={{ color: props.color, textTransform: 'uppercase' }}
  >
    {props.title}
  </Typography>
)

export default SectionTitle
