import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import IconBar from '../../Components/IconBar'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<IconBar />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('div')
  expect(wrapper.children().length).toEqual(3)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<IconBar />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
