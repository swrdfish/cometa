const companyFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_COMPANY_FILTER':
      return action.compname
    default:
      return state
  }
}

export default companyFilter
