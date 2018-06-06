import React from 'react'
import { shallow } from 'enzyme'
import { EditDepositPage } from '../../../components/Deposit/EditDepositPage'
import deposits from '../../fixtures/deposits'

let startEditDeposit, startRemoveDeposit, history, wrapper

beforeEach(() => {
  startEditDeposit = jest.fn()
  startRemoveDeposit = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditDepositPage
      startEditDeposit={startEditDeposit}
      startRemoveDeposit={startRemoveDeposit}
      history={history}
      deposit={deposits[0]}
    />
  )
})

test('should render EditDepositPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editDeposit', () => {
  const deposit = deposits[0]
  wrapper.find('DepositForm').prop('onSubmit')(deposit)
  expect(history.push).toHaveBeenLastCalledWith('/deposit-dashboard')
  expect(startEditDeposit).toHaveBeenLastCalledWith(deposit.id, deposit)
})

test('should handle removeDeposit', () => {
  const deposit = deposits[0]
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/deposit-dashboard')
  expect(startRemoveDeposit).toHaveBeenLastCalledWith({
    id: deposit.id
  })
})
