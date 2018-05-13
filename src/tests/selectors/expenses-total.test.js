import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([])
  expect(result).toBe(0)
})

test('should correctly add up a single expense', () => {
  const amount = expenses[0].amount
  const result = selectExpensesTotal([expenses[0]])
  expect(result).toBe(amount)
})

test('should correctly add up multiple expenses', () => {
  const amount = expenses[0].amount + expenses[1].amount + expenses[2].amount
  const result = selectExpensesTotal(expenses)
  expect(result).toBe(amount)
})
