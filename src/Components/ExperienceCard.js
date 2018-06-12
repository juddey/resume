import React from 'react'
import {
  IconButton,
  Chip,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar
} from '@material-ui/core'
import { ChevronDownIcon, ChevronUpIcon } from 'mdi-react'
import { Images } from '../Themes'
import styles from './Styles/ExperienceCardStyle'

class ExperienceCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { expanded: false }
  }

  handleExpandClick () {
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    return (
      <div style={styles.container}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label='tiaki' alt='tiaki' src={Images.tiaki} />
            }
            title={
              <div style={styles.titleWrapper}>
                <div style={styles.title}>
                  <div>Founder, tiaki.care</div>
                  <div>2015 - now</div>
                </div>
                <IconButton onClick={this.handleExpandClick.bind(this)}>
                  {this.state.expanded ? (
                    <ChevronUpIcon />
                  ) : (
                    <ChevronDownIcon />
                  )}
                </IconButton>
              </div>
            }
          />
          <div>
            {this.state.expanded && (
              <div style={styles.cardStyle}>
                <CardContent>
                  <Typography paragraph>
                    creating a SaaS for early childhood centres
                  </Typography>

                  <Chip label={'React Native'} style={styles.chipStyle} />
                  <Chip label={'React'} style={styles.chipStyle} />
                  <Chip label={'Elixir'} style={styles.chipStyle} />
                  <Chip label={'Ruby'} style={styles.chipStyle} />
                  <Chip label={'AWS'} style={styles.chipStyle} />
                </CardContent>
              </div>
            )}
          </div>
        </Card>
      </div>
    )
  }
}

export default ExperienceCard
