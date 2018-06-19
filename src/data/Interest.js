import React from 'react'
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

export default data
