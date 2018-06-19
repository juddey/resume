import React from 'react'
import configureStore from 'redux-mock-store'
import { createComponentWithIntl } from '../../../src/Support/Utils'

import { ResumeSection } from '../../Containers/'
// import { INITIAL_STATE } from '../../Redux/YourNameRedux'
const mockStore = configureStore()

const initialState = {}
const store = mockStore(initialState)

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(
    <ResumeSection store={store} {...initialState} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
