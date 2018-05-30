import React from 'react'
import styles from './Styles/IconBarStyle'
import IconButton from '@material-ui/core/IconButton'
import { TwitterIcon, GithubCircleIcon, EmailOutlineIcon } from 'mdi-react'

export default class IconBar extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <IconButton>
          <EmailOutlineIcon />
        </IconButton>
        <IconButton href={'https://github.com/juddey'} target={'_blank'}>
          <GithubCircleIcon />
        </IconButton>
        <IconButton href={'https://twitter.com/juddeylane'} target={'_blank'}>
          <TwitterIcon />
        </IconButton>
      </div>
    )
  }
}
