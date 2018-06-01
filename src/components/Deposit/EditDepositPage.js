import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DepositForm from './DepositForm'
import { startEditDeposit } from '../../actions/deposits'

export class EditDepositPage extends React.Component {
  onSubmit = (deposit) => {
    this.props.startEditDeposit(this.props.deposit.id, deposit)
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  deposit: state.deposits.find((deposit) => deposit.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  startEditDeposit: (id, deposit) => dispatch(startEditDeposit(id, deposit))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDepositPage)
