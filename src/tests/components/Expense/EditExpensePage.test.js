import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../../components/Expense/EditExpensePage'
import expenses from '../../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      expense={expenses[0]}
      history={history}
    />
  )
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  const expense = expenses[0]
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(history.push).toHaveBeenLastCalledWith('/expense-dashboard')
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense)
})

test('should handle removeExpense', () => {
  const expense = expenses[0]
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/expense-dashboard')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expense.id
  })
})
