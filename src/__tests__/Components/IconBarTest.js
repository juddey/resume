import React from 'react'
import ReactDOM from 'react-dom'
import { createComponentWithIntl, shallowWithIntl } from '../../../src/Support/Utils'
import IconBar from '../../Components/IconBar'
import renderer from 'react-test-renderer'

const div = document.createElement('div')
const wrapper = shallowWithIntl(<IconBar />)

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
      .containsMatchingElement('IconBar Component')
    ).toEqual(true)
})

it('renders to snapshot', () => {
  const tree = createComponentWithIntl(<IconBar />, div).toJSON()
  expect(tree).toMatchSnapshot()
})

// it('should do some other things', () => {
// const wrapper = shallow(<IconBar // SomeProps > )
   // You can add in props as shown above, or use the constant wrapper declared
   // at the top of the file.
// })
