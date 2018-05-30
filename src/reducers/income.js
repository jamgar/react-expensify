// Income Reducer
const incomeReducerDefaultState = []

export default (state = incomeReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      console.log('adding income...');
      break;
    default:
      return state
  }
}
