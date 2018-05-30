import database from '../firebase/firebase'

// Add Deposit
export const addDeposit = (deposit) => ({
  type: 'ADD_DEPOSIT',
  deposit
})

export const startAddDeposit = (depositData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    // Destructure depositData, and set default values if none are passed in
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = depositData
    const deposit = { description, note, amount, createdAt }

    return database.ref(`users/${uid}/deposits`).push(deposit).then((ref) => {
      dispatch(addDeposit({
        id: ref.key,
        ...deposit
      }))
    })
  }
}
