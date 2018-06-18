import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import About from '../../Components/About'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<About />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('WithStyles(Typography)')
  expect(wrapper.children().length).toEqual(1)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<About />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
