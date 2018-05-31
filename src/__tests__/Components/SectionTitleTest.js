import React from 'react'
import { createComponentWithIntl } from '../../../src/Support/Utils'
import SectionTitle from '../../Components/SectionTitle'

const div = document.createElement('div')

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(
    <SectionTitle title='Section Title Component' />,
    div
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
