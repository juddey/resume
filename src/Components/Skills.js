import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styles from './Styles/SkillsStyle'

const data = [
  { label: 'React Native', level: 85 },
  { label: 'React', level: 70 },
  { label: 'HTML', level: 45 },
  { label: 'JavaScript', level: 65 },
  { label: 'Ruby', level: 80 },
  { label: 'Elixir', level: 70 }
]

const Skills = () => (
  <div>
    {data.map((x, i) => (
      <div key={i} style={styles.container}>
        <Grid item xs={3} md={2}>
          <Typography>{x.label}</Typography>
        </Grid>
        <Grid item xs={9} md={10}>
          <LinearProgress variant='determinate' value={x.level} />
        </Grid>
      </div>
    ))}
  </div>
)

export default Skills
