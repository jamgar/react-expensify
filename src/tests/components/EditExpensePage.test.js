import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
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
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense)
})

test('should handle removeExpense', () => {
  const expense = expenses[0]
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expense.id
  })
})
