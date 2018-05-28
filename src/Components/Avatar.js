import React from 'react'
import styles from './Styles/AvatarStyle'
import MuiAvatar from '@material-ui/core/Avatar'
import { Images } from '../Themes'

export default class Avatar extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <MuiAvatar
          alt='juddey'
          src={Images.avatar}
          style={{ width: 60, height: 60 }}
        />
      </div>
    )
  }
}
