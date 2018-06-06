import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import DepositForm from '../../../components/Deposit/DepositForm'
import deposits from '../../fixtures/deposits'

test('should render DepositForm correctly', () => {
  const wrapper = shallow(<DepositForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render DepositForm with deposit data', () => {
  const wrapper = shallow(<DepositForm deposit={deposits[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid submission', () => {
  const wrapper = shallow(<DepositForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New Deposit'
  const wrapper = shallow(<DepositForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New deposit note'
  const wrapper = shallow(<DepositForm />)
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set valid amount on input change', () => {
  const value = '123.45'
  const wrapper = shallow(<DepositForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set invalid amount on input change', () => {
  const value = '12.345'
  const wrapper = shallow(<DepositForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop on valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<DepositForm deposit={deposits[1]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: deposits[1].description,
    amount: deposits[1].amount,
    note: deposits[1].note,
    createdAt: deposits[1].createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<DepositForm />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<DepositForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toEqual(focused)
})
