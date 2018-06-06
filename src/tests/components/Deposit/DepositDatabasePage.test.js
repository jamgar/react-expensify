import React from 'react'
import { shallow } from 'enzyme'
import DepositDashboardPage from '../../../components/Deposit/DepositDashboardPage'

test('should render DepositDashboardPage correctly', () => {
  const wrapper = shallow(<DepositDashboardPage />)
  expect(wrapper).toMatchSnapshot()
})
