import React from 'react'
import { connect } from 'react-redux'
import DepositForm from './DepositForm'
import { startAddDeposit } from '../../actions/deposits'

export class AddDepositPage extends React.Component {
  onSubmit = (deposit) => {
    this.props.startAddDeposit(deposit)
    this.props.history.push('/deposit-dashboard')
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Deposit</h1>
          </div>
        </div>
        <div className="content-container">
          <DepositForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddDeposit: (deposit) => dispatch(startAddDeposit(deposit))
})

export default connect(undefined, mapDispatchToProps)(AddDepositPage)
