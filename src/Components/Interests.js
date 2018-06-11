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
  { image: <BeerIcon size={40} />, label: 'Beer' },
  { image: <ChurchIcon size={40} />, label: 'Church' },
  { image: <CoffeeIcon size={40} />, label: 'Coffee' },
  { image: <CodeNotEqualVariantIcon size={40} />, label: 'Coding' },
  { image: <RunFastIcon size={40} />, label: 'Running' }
]

const Interests = () => (
  <div style={styles.container}>
    {data.map((x, i) => (
      <div key={i} style={styles.wrapper}>
        {x.image}
        <Typography>{x.label}</Typography>
      </div>
    ))}
  </div>
)

export default Interests
