import React from 'react'
// import PropTypes from 'prop-types'
// import { FormattedMessage, injectIntl } from 'react-intl'
// import messages from './Messages/ExperienceSectionMessages'
import styles from './Styles/ExperienceSectionStyle'

export default class ExperienceSection extends React.Component {
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
        <div>ExperienceSection Component</div>
      </div>
    )
  }
}

// react-intl Messages, outside of FormatMessage
// https://stackoverflow.com/questions/35186297/how-to-retrieve-a-string-in-reactintl-2-0-without-using-formattedmessage/39161208#39161208
// If you can't use <FormattedMessage /> for some reason, you can use this
// syntax: `this.context.intl.formatMessage({ ...messages.default })`
// by uncommenting the next block.
//  ExperienceSection.contextTypes = {
//   intl: PropTypes.object.isRequired
// }

// // Prop type warnings
// ExperienceSection.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired
// }
//
// // Defaults for props
// ExperienceSection.defaultProps = {
//   someSetting: false
// }
