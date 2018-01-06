const detailsViewSate = (state = null, action) => {
  switch (action.type) {
    case 'SET_COMP_LOADING':
      return {
        isLoading: action.isLoading,
        symbol: action.symbol
      }
    case 'SET_COMP':
      return {
        isLoading: false,
        symbol: action.company_details.symbol,
        details: action.company_details
      }
    default:
      return state
  }
}

export default detailsViewSate
