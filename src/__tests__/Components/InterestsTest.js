import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import Interests from '../../Components/Interests'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<Interests />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('div')
  expect(wrapper.children().length).toEqual(5)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<Interests />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
