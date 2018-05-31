import React from 'react'
// import PropTypes from 'prop-types'
// import { FormattedMessage, injectIntl } from 'react-intl'
// import messages from './Messages/TimelineMessages'
import styles from './Styles/TimelineStyle'
import {
  Timeline as ImportedTimeline,
  TimelineEvent,
  TimelineBlip
} from 'react-event-timeline'
import {
  BabyBuggyIcon,
  DeveloperBoardIcon,
  HomeHeartIcon,
  SchoolIcon
} from 'mdi-react'
import { Chip } from '@material-ui/core'

export default class Timeline extends React.Component {
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
        <ImportedTimeline>
          <TimelineEvent
            title='Founder: tiaki.care'
            subtitle='2015 - now'
            subtitleStyle={{ color: '#FFFFFF' }}
            icon={<BabyBuggyIcon color='#6fba1c' />}
            container='card'
          >
            <p>
              My latest venture, combining education, technology and process
              improvement.
            </p>
            <Chip label={'React Native'} />
            <Chip label={'React'} />
            <Chip label={'Elixir'} />
            <Chip label={'Ruby'} />
            <Chip label={'AWS'} />
          </TimelineEvent>
          <TimelineEvent
            title='Founder: kandid.nz'
            subtitle='2014 - 2015'
            subtitleStyle={{ color: '#FFFFFF' }}
            icon={<DeveloperBoardIcon color='#6fba1c' />}
            container='card'
          >
            <p>
              Co-Founder for a new Developer Sourcing Tool designed to improve
              the process for recruiting and hiring software developers.
            </p>
            <Chip label={'AngularJS'} />
            <Chip label={'Ruby'} />
            <Chip label={'Ruby on Rails'} />
          </TimelineEvent>
          <TimelineBlip
            title='Taking a break for children'
            icon={<HomeHeartIcon />}
          />
          <TimelineEvent
            title='Various Educational Institutions'
            subtitle='2012 & prior'
            subtitleStyle={{ color: '#FFFFFF' }}
            icon={<SchoolIcon color='#6fba1c' />}
            container='card'
          >
            <p>
              Provided Process Improvement, Business Analysis, Software Design
              and System Design and Development Services for{' '}
              <a
                href='https://en.wikipedia.org/wiki/PeopleSoft'
                target='#_blank'
              >
                {' '}
                PeopleSoft
              </a>{' '}
              Customers.
            </p>
          </TimelineEvent>
        </ImportedTimeline>
      </div>
    )
  }
}

// react-intl Messages, outside of FormatMessage
// https://stackoverflow.com/questions/35186297/how-to-retrieve-a-string-in-reactintl-2-0-without-using-formattedmessage/39161208#39161208
// If you can't use <FormattedMessage /> for some reason, you can use this
// syntax: `this.context.intl.formatMessage({ ...messages.default })`
// by uncommenting the next block.
//  Timeline.contextTypes = {
//   intl: PropTypes.object.isRequired
// }

// // Prop type warnings
// Timeline.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Timeline.defaultProps = {
//   someSetting: false
// }
