import React from 'react'
import { shallow } from 'enzyme'
import { SignupPage } from '../../components/SignupPage'

let startCreateUserWithEmailAndPassword, wrapper

beforeEach(() => {
  startCreateUserWithEmailAndPassword = jest.fn()
  wrapper = shallow(<SignupPage startCreateUserWithEmailAndPassword={startCreateUserWithEmailAndPassword} />)
})

test('should render SignupPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render error with invalid form submission', () => {
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set email on input change', () => {
  const value = 'test@email.com'
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('email')).toBe(value)
})

test('should set password on input change', () => {
  const value = '1234567890'
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('password')).toBe(value)
})

test('should set password confirmation on input change', () => {
  const value = '1234567890'
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('passwordConfirmation')).toBe(value)
})
