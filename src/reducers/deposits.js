// Deposit Reducer
const depositsReducerDefaultState = []

export default (state = depositsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DEPOSIT':
      return [
        ...state,
        action.deposit
      ]
      break;
    case 'SET_DEPOSITS':
      return action.deposits
      break;
    case 'EDIT_DEPOSIT':
      return state.map((deposit) => {
        if (deposit.id === action.id) {
          return {
            ...deposit,
            ...action.updates
          }
        } else {
          return deposit
        }
      })
      break;
    case 'REMOVE_DEPOSIT':
      return state.filter(({ id }) => id !== action.id)
      break;
    default:
      return state
  }
}
