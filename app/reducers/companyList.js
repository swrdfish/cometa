const company_list = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return [
        ...state,
        ...action.company_list
      ]
    default:
      return state
  }
}

export default company_list
