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
    default:
      return state
  }
}
