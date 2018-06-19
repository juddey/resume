import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import PositionTitle from '../../Components/PositionTitle'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<PositionTitle />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('withStyles(Typography)')
  expect(wrapper.children().length).toEqual(1)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<PositionTitle />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
