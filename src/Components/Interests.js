import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Images } from '../Themes'
import styles from './Styles/InterestsStyle'

const data = [
  { image: Images.beer, label: 'Beer' },
  { image: Images.church, label: 'Church' },
  { image: Images.drink, label: 'Coffee' },
  { image: Images.laptop, label: 'Coding' },
  { image: Images.shoes, label: 'Running' }
]

const Interests = () => (
  <div style={styles.container}>
    {data.map((x, i) => (
      <div key={i} style={styles.wrapper}>
        <img src={x.image} style={styles.image} alt={x.label} />
        <Typography>{x.label}</Typography>
      </div>
    ))}
  </div>
)

export default Interests
