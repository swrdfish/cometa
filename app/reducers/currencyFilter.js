const currencyFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENCY_FILTER':
      return action.currency
    default:
      return state
  }
}

export default currencyFilter
