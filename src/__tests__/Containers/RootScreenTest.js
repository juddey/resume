import React from 'react'
import configureStore from 'redux-mock-store'
import { createComponentWithIntl } from '../../../src/Support/Utils'
import { RootScreen } from '../../Containers/'
// import { INITIAL_STATE } from '../../Redux/YourNameRedux'
const mockStore = configureStore()

const initialState = {
  // someKey: { data: INITIAL_STATE.data },
}
const store = mockStore(initialState)

test('renders to snapshot', () => {
  const tree = createComponentWithIntl(
    <RootScreen store={store} {...initialState} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
