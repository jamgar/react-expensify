import React from 'react'
import { shallow } from 'enzyme'
import DepositListItem from '../../../components/Deposit/DepositListItem'
import deposits from '../../fixtures/deposits'

test('should render DepositListItem correctly', () {
  const wrapper = shallow(<DepositListItem deposit={deposits[0]} />)
  expect(wrapper).toMatchSnapshot()
})
