import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import Timeline from '../../Components/Timeline'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<Timeline />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('div')
  expect(wrapper.children().length).toEqual(1)
  expect(
    wrapper
      .children()
      .first()
      .name()
  ).toEqual('Timeline')
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<Timeline />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
