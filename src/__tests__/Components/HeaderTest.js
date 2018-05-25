import React from 'react'
import {
  createComponentWithIntl,
  shallowWithIntl
} from '../../../src/Support/Utils'
import Header from '../../Components/Header'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<Header />)

it('component exists', () => {
  expect(wrapper.length).toBe(1)
})

it('component structure', () => {
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
      .containsMatchingElement('Header Component')
  ).toEqual(true)
})

it('renders to snapshot', () => {
  const tree = createComponentWithIntl(<Header />, div).toJSON()
  expect(tree).toMatchSnapshot()
})

// it('should do some other things', () => {
// const wrapper = shallow(<Header // SomeProps > )
// You can add in props as shown above, or use the constant wrapper declared
// at the top of the file.
// })
