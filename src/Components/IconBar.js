import React from 'react'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { TwitterIcon, GithubCircleIcon, EmailOutlineIcon } from 'mdi-react'

export default class IconBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null
    }
  }

  handleClick (event) {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose () {
    this.setState({
      anchorEl: null
    })
  }

  render () {
    const { anchorEl } = this.state

    return (
      <div>
        <IconButton onClick={this.handleClick.bind(this)}>
          <EmailOutlineIcon color='white' />
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose.bind(this)}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
        >
          <Typography style={{ padding: 15 }}>
            juddeylane at gmail dot com
          </Typography>
        </Popover>
        <IconButton href={'https://github.com/juddey'} target={'_blank'}>
          <GithubCircleIcon color='white' />
        </IconButton>
        <IconButton href={'https://twitter.com/juddeylane'} target={'_blank'}>
          <TwitterIcon color='white' />
        </IconButton>
      </div>
    )
  }
}
