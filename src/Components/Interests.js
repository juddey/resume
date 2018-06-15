import React from 'react'
import Typography from '@material-ui/core/Typography'
// import { Images } from '../Themes'
import styles from './Styles/InterestsStyle'
import {
  BeerIcon,
  ChurchIcon,
  CoffeeIcon,
  CodeNotEqualVariantIcon,
  RunFastIcon
} from 'mdi-react'

const data = [
  { image: <CoffeeIcon size={40} color='white' />, label: 'Coffee' },
  { image: <RunFastIcon size={40} color='white' />, label: 'Running' },
  { image: <BeerIcon size={40} color='white' />, label: 'Beer' },
  { image: <ChurchIcon size={40} color='white' />, label: 'Church' },
  {
    image: <CodeNotEqualVariantIcon size={40} color='white' />,
    label: 'Coding'
  }
]

const Interests = () => (
  <div style={styles.container}>
    {data.map((x, i) => (
      <div key={i} style={styles.wrapper}>
        {x.image}
        <Typography style={{ color: 'white' }}>{x.label}</Typography>
      </div>
    ))}
  </div>
)

export default Interests
