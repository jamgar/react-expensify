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

// Set Deposit
export const setDeposits = (deposits) => ({
  type: 'SET_DEPOSITS',
  deposits
})

export const startSetDeposits = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/deposits`).once('value').then((snapshot) => {
      const deposits = []

      snapshot.forEach((childSnapshot) => {
        deposits.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setDeposits(deposits))
    })
  }
}

// Edit Deposit
export const editDeposit = (id, updates) => ({
  type: 'EDIT_DEPOSIT',
  id,
  updates
})

export const startEditDeposit = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const path = `users/${uid}/deposits/${id}`
    return database.ref(path).update(updates).then(() => {
      dispatch(editDeposit(id, updates))
    })
  }
}
