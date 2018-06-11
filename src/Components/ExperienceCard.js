import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import { ChevronDownIcon, ChevronUpIcon } from 'mdi-react'

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
      <div style={{ minWidth: 275 }}>
        <Card>
          <CardHeader
            avatar={<Avatar aria-label='tiaki'>T</Avatar>}
            title={
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'row'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                      justifyContent: 'space-between'
                    }}
                  >
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
              </div>
            }
          />
          <div>
            {this.state.expanded && (
              <CardContent>
                <Typography paragraph>
                  creating a SaaS for early childhood centres
                </Typography>

                <Chip
                  label={'React Native'}
                  style={{
                    background: 'white',
                    marginRight: 8,
                    border: '1px solid black'
                  }}
                />
                <Chip
                  label={'React'}
                  style={{
                    background: 'white',
                    marginRight: 8,
                    border: '1px solid black'
                  }}
                />
                <Chip
                  label={'Elixir'}
                  style={{
                    background: 'white',
                    marginRight: 8,
                    border: '1px solid black'
                  }}
                />
                <Chip
                  label={'Ruby'}
                  style={{
                    background: 'white',
                    marginRight: 8,
                    border: '1px solid black'
                  }}
                />
                <Chip
                  label={'AWS'}
                  style={{
                    background: 'white',
                    marginRight: 8,
                    border: '1px solid black'
                  }}
                />
              </CardContent>
            )}
          </div>
        </Card>
      </div>
    )
  }
}
ExperienceCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default ExperienceCard
