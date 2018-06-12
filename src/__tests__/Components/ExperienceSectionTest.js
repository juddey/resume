import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import ExperienceSection from '../../Components/ExperienceSection'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<ExperienceSection />)

test('component exists', () => {
  expect(wrapper.length).toBe(1)
})

test('component structure', () => {
  expect(wrapper.name()).toEqual('div')
  expect(wrapper.children().length).toEqual(1)
})

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(<ExperienceSection />, div).toJSON()
  expect(tree).toMatchSnapshot()
})
