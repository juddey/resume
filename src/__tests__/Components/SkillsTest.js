import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import Skills from '../../Components/Skills'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<Skills />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('Skills')
  expect(wrapper.children().length).toEqual(0)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<Skills />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
