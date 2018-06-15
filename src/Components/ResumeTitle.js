import React from 'react'
import Typography from '@material-ui/core/Typography'

export default class ResumeTitle extends React.Component {
  render () {
    return (
      <Typography
        variant='display1'
        style={{
          letterSpacing: '2px',
          color: 'white',
          textTransform: 'uppercase'
        }}
      >
        Justin Lane
      </Typography>
    )
  }
}
