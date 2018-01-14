const detailsViewSate = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURR_LOADING':
      return {
        isLoading: action.isLoading,
        symbol: action.symbol
      }
    case 'SET_CURR':
      return {
        isLoading: false,
        symbol: action.currency_details.symbol,
        details: action.currency_details
      }
    default:
      return state
  }
}

export default detailsViewSate
