import React from 'react'
import DepositsSummary from './DepositsSummary'
import DepositList from './DepositList'
import DepositListFilters from './DepositListFilters'

const DepositDashboardPage = () => (
  <div>
    <DepositsSummary />
    <DepositListFilters />
    <DepositList />
  </div>
)

export default DepositDashboardPage
