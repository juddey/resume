import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'

// TODO: Can we put this object in its own file?
const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  colorPrimary: {
    backgroundColor: '#F8F8F8'
  },
  barColorPrimary: {
    backgroundColor: '#012C4C'
  }
})

const data = [
  { label: 'React Native', level: 85 },
  { label: 'React', level: 70 },
  { label: 'HTML', level: 45 },
  { label: 'JavaScript', level: 65 },
  { label: 'Ruby', level: 80 },
  { label: 'Elixir', level: 70 }
]

function Skills (props) {
  const { classes } = props
  console.log(classes.bar)
  return (
    <div>
      {data.map((x, i) => (
        <div key={i} className={classes.container}>
          <Grid item xs={3} md={2}>
            <Typography>{x.label}</Typography>
          </Grid>
          <Grid item xs={9} md={10}>
            <LinearProgress
              classes={{
                barColorPrimary: classes.barColorPrimary,
                colorPrimary: classes.colorPrimary
              }}
              variant='determinate'
              value={x.level}
            />
          </Grid>
        </div>
      ))}
    </div>
  )
}

export default withStyles(styles)(Skills)
