import React from 'react'
import PropTypes from 'prop-types'
import { Hidden, Grid } from '@material-ui/core'
// Styles
import styles from './Styles/ResumeSectionStyle'
import { Colors } from '../Themes/'

function ResumeSection (props) {
  return (
    <Grid
      container
      justify='center'
      style={{ backgroundColor: props.backgroundColor }}
    >
      <Hidden only='xs'>
        <Grid item />
      </Hidden>
      <Grid
        item
        xs={props.gridSpread[0]}
        sm={props.gridSpread[1]}
        md={props.gridSpread[2]}
        lg={props.gridSpread[3]}
        xl={props.gridSpread[4]}
        style={{ ...styles.middleGrid, ...props.middleGrid }}
      >
        <div style={styles.sectionTitle}>{props.title}</div>
        {props.section}
      </Grid>
      <Hidden only='xs'>
        <Grid item />
      </Hidden>
    </Grid>
  )
}
ResumeSection.defaultProps = {
  backgroundColor: Colors.background,
  gridSpread: [12, 10, 8, 6, 4]
}

ResumeSection.propTypes = {
  backgroundColor: PropTypes.string,
  gridSpread: PropTypes.array,
  middleGrid: PropTypes.object
}

export default ResumeSection
