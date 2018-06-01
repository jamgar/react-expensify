import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { SingleDatePicker } from 'react-dates'

const now = moment()

export default class DepositForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.deposit ? props.deposit.description : '',
      note: props.deposit ? props.deposit.note : '',
      amount: props.deposit ? (props.deposit.amount / 100).toString() : '',
      createdAt: props.deposit ? moment(props.deposit.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }
  isInvalid = () => (
    this.state.description === '' || this.state.amount === ''
  )
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    const {
      description,
      note,
      amount,
      createdAt
    } = this.state

    if (this.isInvalid()) {
      this.setState(() => ({ error: 'Please enter values for description and amount'}))
    } else {
      this.setState(() => { error: '' })
      this.props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      })
    }

  }
  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calendarFocused,
      error
    } = this.state
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {error && <p className="form__error">{error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Amount"
          value={amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={this.onDateChange}
          focused={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your deposit (optional)"
          value={note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button button--margin-right">Save Deposit</button>
          <Link className="button button--secondary" to="/deposit-dashboard">
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}
