import React from 'react'
import { shallow } from 'enzyme'
import { DepositList } from '../../../components/Deposit/DepositList'
import deposits from '../../fixtures/deposits'

test('should render DepositList with deposits', () => {
  const wrapper = shallow(<DepositList deposits={deposits} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render DepositList with empty list', () => {
  const wrapper = shallow(<DepositList deposits={[]} />)
  expect(wrapper).toMatchSnapshot()
})
