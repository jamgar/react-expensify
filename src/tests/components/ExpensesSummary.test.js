import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render ExpensesSummary with empty expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={234} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={23400} />)
  expect(wrapper).toMatchSnapshot()
})
