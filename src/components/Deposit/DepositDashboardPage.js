import React from 'react'
import DepositSummary from './DepositSummary'
import DepositList from './DepositList'
import DepositListFilters from './DepositListFilters'

const DepositDashboardPage = () => (
  <div>
    <DepositSummary />
    <DepositListFilters />
    <DepositList />
  </div>
)

export default DepositDashboardPage
