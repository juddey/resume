import React from 'react'
import Typography from '@material-ui/core/Typography'
// import styles from './Styles/InterestsStyle'
import { Images } from '../Themes'

const data = [
  { image: Images.beer, label: 'Beer' },
  { image: Images.church, label: 'Church' },
  { image: Images.drink, label: 'Coffee' },
  { image: Images.laptop, label: 'Coding' },
  { image: Images.shoes, label: 'Running' }
]

const Interests = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {data.map((x, i) => (
      <div
        key={i}
        style={{
          width: 75,
          height: 75,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img src={x.image} style={{ width: 50, height: 50 }} />
        <Typography>{x.label}</Typography>
      </div>
    ))}
  </div>
)

export default Interests
