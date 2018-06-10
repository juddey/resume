import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import ExperienceCard from '../../Components/ExperienceCard'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<ExperienceCard />)

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
  ).toEqual('div')
  expect(
    wrapper
      .children()
      .first()
      .containsMatchingElement('ExperienceCard Component')
  ).toEqual(true)
})('renders to snapshot', () => {
  const tree = createComponentWithIntl(<ExperienceCard />, div).toJSON()
  expect(tree).toMatchSnapshot()
})

// test('should do some other things', () => {
// const wrapper = shallow(<ExperienceCard // SomeProps > )
//   You can add in props as shown above, or use the constant wrapper declared
//   at the top of the file.
// })
