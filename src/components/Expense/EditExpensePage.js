import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/expense-dashboard')
  }
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/expense-dashboard')
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
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <div>
            <button className="button button--danger" onClick={this.onRemove}>Remove Expense</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  // props not used only shown for to let me know it can be used
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
