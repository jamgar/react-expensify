import React from 'react'
import { shallow } from 'enzyme'
import { DepositsSummary } from '../../../components/Deposit/DepositsSummary'
import deposits from '../../fixtures/deposits'

test('should render DepositsSummary with empty deposits', () => {
  const wrapper = shallow(<DepositsSummary deposits={[]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render DepositsSummary with 1 deposit', () => {
  const wrapper = shallow(<DepositsSummary depositsCount={1} depositsTotal={123} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render DepositsSummary with multiple deposits', () =>{
  const wrapper = shallow(<DepositsSummary depositsCount={4} depositsTotal={132455} />)
  expect(wrapper).toMatchSnapshot()
})
