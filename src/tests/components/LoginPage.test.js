import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

let startLoginWithGoogle, wrapper

beforeEach(() => {
  startLoginWithGoogle = jest.fn()
  wrapper = shallow(<LoginPage startLoginWithGoogle={startLoginWithGoogle} />)
})

test('should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
  wrapper.find('button').simulate('click')
  expect(startLoginWithGoogle).toHaveBeenLastCalledWith()
})
