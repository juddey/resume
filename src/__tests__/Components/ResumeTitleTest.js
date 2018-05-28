import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import ResumeTitle from '../../Components/ResumeTitle'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<ResumeTitle />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('WithStyles(Typography)')
  expect(wrapper.children().length).toEqual(1)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<ResumeTitle />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
