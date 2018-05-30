import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './Messages/IconBarMessages'
import styles from './Styles/IconBarStyle'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

export default class IconBar extends React.Component {
//  constructor (props) {
//    super(props)
//    this.state = {
//      something: props.something
//    }
//  }

// componentWillReceiveProps (newProps) {
//   this.setState({ something: newProps.something })
// }

  render () {
    return (
      <div style={styles.container}>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }
}

// react-intl Messages, outside of FormatMessage
// https://stackoverflow.com/questions/35186297/how-to-retrieve-a-string-in-reactintl-2-0-without-using-formattedmessage/39161208#39161208
// If you can't use <FormattedMessage /> for some reason, you can use this
// syntax: `this.context.intl.formatMessage({ ...messages.default })`
// by uncommenting the next block.
//  IconBar.contextTypes = {
//   intl: PropTypes.object.isRequired
// }

// // Prop type warnings
// IconBar.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired
// }
//
// // Defaults for props
// IconBar.defaultProps = {
//   someSetting: false
// }
