export const addMessage = (uid, text) => ({
  type: 'ADD_MSG',
  uid,
  text
})

export const deleteMessage = (id) => ({
  type: 'DEL_MSG',
  id
})

export const setCompanyFilter = (compname) => ({
  type: 'SET_COMPANY_FILTER',
  compname
})

export const addCompany = (company_list) => ({
  type: 'ADD_COMPANY',
  company_list
})

export const setCompanyDetails = (company_details) => ({
  type: "SET_COMP",
  company_details
})

export const setDetailsLoading = (isLoading, symbol) => ({
  type: "SET_COMP_LOADING",
  isLoading,
  symbol
})