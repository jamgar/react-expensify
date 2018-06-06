import moment from 'moment'

export default [{
  id: '1',
  description: 'Gift',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Project',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Pay Day',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
