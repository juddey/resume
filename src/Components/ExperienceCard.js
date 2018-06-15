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
import styles from './Styles/ExperienceCardStyle'
import { map, addIndex } from 'ramda'

const mapIndexed = addIndex(map)

class ExperienceCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { expanded: false }
  }

  handleExpandClick () {
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    const {
      avatarImage,
      headerLeftText,
      headerRightText,
      cardText,
      chips
    } = this.props
    return (
      <div style={styles.container}>
        <Card>
          <CardHeader
            avatar={<Avatar aria-label='tiaki' alt='tiaki' src={avatarImage} />}
            title={
              <div style={styles.titleWrapper}>
                <div style={styles.title}>
                  <div>{headerLeftText}</div>
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
                  <Typography paragraph>{headerRightText}</Typography>
                  <Typography paragraph>{cardText}</Typography>
                  {mapIndexed(
                    (label, idx) => (
                      <Chip key={idx} label={label} style={styles.chipStyle} />
                    ),
                    chips
                  )}
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
