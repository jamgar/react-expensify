import moment from 'moment'
import selectTotal from './selectors-total'

export default (expenses, deposits) => {
  const expensesTotal = selectTotal(expenses)
  const depositsTotal = selectTotal(deposits)
  return depositsTotal - expensesTotal
}
