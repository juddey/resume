import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import { Images } from '../Themes'

export default class Avatar extends React.Component {
  render () {
    return (
      <div>
        <MuiAvatar
          alt='juddey'
          src={Images.avatar}
          style={{ width: 60, height: 60, border: '1px solid black' }}
        />
      </div>
    )
  }
}
