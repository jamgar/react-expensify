import React from 'react'
import { shallow } from 'enzyme'
import { AddDepositPage } from '../../../components/Deposit/AddDepositPage'
import deposits from '../../fixtures/deposits'

let startAddDeposit, history, wrapper

beforeEach(() => {
  startAddDeposit = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddDepositPage startAddDeposit={startAddDeposit} history={history}/>)
})

test('should render AddDepositPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('DepositForm').prop('onSubmit')(deposits[1])
  expect(history.push).toHaveBeenLastCalledWith('/deposit-dashboard')
  expect(startAddDeposit).toHaveBeenLastCalledWith(deposits[1])
})
