import React from 'react'
// import PropTypes from 'prop-types'
// import { FormattedMessage, injectIntl } from 'react-intl'
// import messages from './Messages/HeaderMessages'
import styles from './Styles/HeaderStyle'

export default class Header extends React.Component {
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
        <div>Header Component</div>
      </div>
    )
  }
}

// react-intl Messages, outside of FormatMessage
// https://stackoverflow.com/questions/35186297/how-to-retrieve-a-string-in-reactintl-2-0-without-using-formattedmessage/39161208#39161208
// If you can't use <FormattedMessage /> for some reason, you can use this
// syntax: `this.context.intl.formatMessage({ ...messages.default })`
// by uncommenting the next block.
//  Header.contextTypes = {
//   intl: PropTypes.object.isRequired
// }

// // Prop type warnings
// Header.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Header.defaultProps = {
//   someSetting: false
// }
