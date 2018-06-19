import React from 'react'
import Typography from '@material-ui/core/Typography'
// import { Images } from '../Themes'
import styles from './Styles/InterestsStyle'
import data from '../data/Interest'
import { Colors } from '../Themes/'

const Interests = () => (
  <div style={styles.container}>
    {data.map((x, i) => (
      <div key={i} style={styles.wrapper}>
        {x.image}
        <Typography style={{ color: Colors.white }}>{x.label}</Typography>
      </div>
    ))}
  </div>
)

export default Interests
