import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DepositForm from './DepositForm'
import { startEditDeposit, startRemoveDeposit } from '../../actions/deposits'

export class EditDepositPage extends React.Component {
  onSubmit = (deposit) => {
    this.props.startEditDeposit(this.props.deposit.id, deposit)
    this.props.history.push('/deposit-dashboard')
  }
  onRemove = () => {
    this.props.startRemoveDeposit({ id: this.props.deposit.id })
    this.props.history.push('/deposit-dashboard')
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <DepositForm
            deposit={this.props.deposit}
            onSubmit={this.onSubmit}
          />
          <button className="button button--danger" onClick={this.onRemove}>
          Remove Deposit
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  deposit: state.deposits.find((deposit) => deposit.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  startEditDeposit: (id, deposit) => dispatch(startEditDeposit(id, deposit)),
  startRemoveDeposit: (id) => dispatch(startRemoveDeposit(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDepositPage)
