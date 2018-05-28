import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import Avatar from '../../Components/Avatar'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<Avatar />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('div')
  expect(wrapper.children().length).toEqual(1)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<Avatar />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
